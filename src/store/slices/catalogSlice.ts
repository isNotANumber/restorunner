import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Offer, Offers } from "../../types/types";
import {
	fetchAllOffers,
	fetchCategories,
	fetchFavoriteOffers,
	patchAddToFavorites,
	patchRemoveFromFavorites,
} from "../thunks/catalogThunk";
import { RequestStatus } from "../../const";

type CatalogState = {
	activeCategory: string;
	categories: string[];
	offers: Offers;
	favoriteOffers: Offers;
	activeCardId: string | undefined;
	loadingStatus: RequestStatus;
};

const initialState: CatalogState = {
	activeCategory: "Restaurant",
	categories: [],
	offers: [],
	favoriteOffers: [],
	activeCardId: undefined,
	loadingStatus: RequestStatus.Idle,
};

const catalogSlice = createSlice({
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllOffers.fulfilled, (state, action) => {
				state.offers = action.payload;
			})
			.addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
				state.favoriteOffers = action.payload;
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.categories = action.payload;
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
	name: "catalog",
	initialState,
	reducers: {
		setActiveCategory: (state, action: PayloadAction<Offer["category"]>) => {
			state.activeCategory = action.payload;
		},
		updateOffer: (state, action: PayloadAction<Offer>) => {
			const targetOfferIndex = state.offers.findIndex((offer) => offer.id === action.payload.id);

			state.offers = [
				...state.offers.slice(0, targetOfferIndex),
				action.payload,
				...state.offers.slice(targetOfferIndex + 1),
			];
		},
		setActiveCardId: (state, action: PayloadAction<Offer["id"] | undefined>) => {
			state.activeCardId = action.payload;
		},
	},
	selectors: {
		getOffers: (state: CatalogState) => state.offers,
		getFavoriteOffers: (state: CatalogState) => state.favoriteOffers,
		getCategories: (state: CatalogState) => state.categories,
		getActiveCategory: (state: CatalogState) => state.activeCategory,
		selectOffersByCategory: (state: CatalogState) =>
			state.offers.filter((offer) => offer.category === state.activeCategory),
	},
});

const catalogActions = catalogSlice.actions;
const catalogSelectors = catalogSlice.selectors;

export { catalogActions, catalogSelectors, catalogSlice };
