import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Offer, Offers } from "../../types/types";
import {
	fetchAllOffers,
	fetchFavoriteOffers,
	patchAddToFavorites,
	patchRemoveFromFavorites,
} from "../thunks/catalogThunk";
import { RequestStatus } from "../../const";

type OffersState = {
	offers: Offers;
	favoriteOffers: Offers;
	activeOfferId: string | undefined | null;
	loadingStatus: RequestStatus;
};

const initialState: OffersState = {
	offers: [],
	favoriteOffers: [],
	activeOfferId: null,
	loadingStatus: RequestStatus.Idle,
};

const offersSlice = createSlice({
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllOffers.fulfilled, (state, action) => {
				state.offers = action.payload;
			})
			.addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
				state.favoriteOffers = action.payload;
			})
			.addCase(patchAddToFavorites.fulfilled, (state, action) => {
				const updatedOffer = action.payload;
				state.offers = state.offers.map((offer) => (offer.id === updatedOffer.id ? updatedOffer : offer));
				state.favoriteOffers = state.favoriteOffers.concat(updatedOffer);
			})
			.addCase(patchRemoveFromFavorites.fulfilled, (state, action) => {
				const updatedOffer = action.payload;
				state.offers = state.offers.map((offer) => (offer.id === updatedOffer.id ? updatedOffer : offer));
				state.favoriteOffers = state.favoriteOffers.filter((favoriteOffer) => favoriteOffer.id !== updatedOffer.id);
			});
	},
	name: "offers",
	initialState,
	reducers: {
		updateOffer: (state, action: PayloadAction<Offer>) => {
			const targetOfferIndex = state.offers.findIndex((offer) => offer.id === action.payload.id);

			state.offers = [
				...state.offers.slice(0, targetOfferIndex),
				action.payload,
				...state.offers.slice(targetOfferIndex + 1),
			];
		},
		setActiveOfferId: (state, action: PayloadAction<Offer["id"] | undefined>) => {
			state.activeOfferId = action.payload;
		},
	},
	selectors: {
		getOffers: (state: OffersState) => state.offers,
		getActiveOfferId: (state: OffersState) => state.activeOfferId,
		getFavoriteOffers: (state: OffersState) => state.favoriteOffers,
	},
});

const offersActions = offersSlice.actions;
const offersSelectors = offersSlice.selectors;

export { offersActions, offersSelectors, offersSlice };
