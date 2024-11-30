import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Offer, Offers } from "../../types/types";
import { fetchAllOffers } from "./catalogThunk";

type CatalogState = {
	currentPlaceType: string;
	offers: Offers;
	favoritesOffersCount: number;
	activeCardId: string;
};

const initialState: CatalogState = {
	currentPlaceType: "Restaurant",
	offers: [],
	favoritesOffersCount: 0,
	activeCardId: "",
};

const catalogSlice = createSlice({
	extraReducers: (builder) =>
		builder.addCase(fetchAllOffers.fulfilled, (state, action) => {
			state.offers = action.payload;
		}),
	name: "catalog",
	initialState,
	reducers: {
		setCurrentPlaceType: (state, action: PayloadAction<string>) => {
			state.currentPlaceType = action.payload;
		},
		setOffers: (state, action: PayloadAction<Offers>) => {
			state.offers = action.payload;
		},
		updateOffer: (state, action: PayloadAction<Offer>) => {
			const targetOfferIndex = state.offers.findIndex((offer) => offer.id === action.payload.id);

			state.offers = [
				...state.offers.slice(0, targetOfferIndex),
				action.payload,
				...state.offers.slice(targetOfferIndex + 1),
			];
		},
		setFavoritesOffersCount: (state, action: PayloadAction<number>) => {
			state.favoritesOffersCount = action.payload;
		},
		updateFavoritesOffersCount: (state) => {
			state.favoritesOffersCount = state.offers.filter((offer) => offer.isFavorite).length;
		},
		setActiveCardId: (state, action: PayloadAction<string>) => {
			state.activeCardId = action.payload;
		},
	},
	selectors: {
		getAllOffers: (state) => state.offers,
		getOffersByCategory: (state, category) => state.offers.filter((offer) => offer.type === category),
	},
});

export const {
	setCurrentPlaceType,
	setOffers,
	updateOffer,
	setFavoritesOffersCount,
	updateFavoritesOffersCount,
	setActiveCardId,
} = catalogSlice.actions;

export const { getAllOffers, getOffersByCategory } = catalogSlice.selectors;

export default catalogSlice.reducer;
