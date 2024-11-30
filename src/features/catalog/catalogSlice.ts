import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Offer, Offers } from "../../types/types";
import { fetchAllOffers, fetchCategories, fetchFavoriteOffers } from "./catalogThunk";

type CatalogState = {
	activeCategory: string;
	categories: string[];
	offers: Offers;
	favoriteOffers: Offers;
	activeCardId: string;
};

const initialState: CatalogState = {
	activeCategory: "Restaurant",
	categories: [],
	offers: [],
	favoriteOffers: [],
	activeCardId: "",
};

const catalogSlice = createSlice({
	extraReducers: (builder) => {
		builder.addCase(fetchAllOffers.fulfilled, (state, action) => {
			state.offers = action.payload;
		});
		builder.addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
			state.favoriteOffers = action.payload;
		});
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.categories = action.payload;
		});
	},
	name: "catalog",
	initialState,
	reducers: {
		setActiveCategory: (state, action: PayloadAction<string>) => {
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
		setActiveCardId: (state, action: PayloadAction<string>) => {
			state.activeCardId = action.payload;
		},
	},
	selectors: {
		getOffers: (state) => state.offers,
		getFavoriteOffers: (state) => state.favoriteOffers,
		getCategories: (state) => state.categories,
		getActiveCategory: (state) => state.activeCategory,
		selectOffersByCategory: (state) => state.offers.filter((offer) => offer.type === state.activeCategory),
	},
});

export const { setActiveCategory, updateOffer, setActiveCardId } = catalogSlice.actions;

export const { getOffers, getFavoriteOffers, getCategories, selectOffersByCategory } = catalogSlice.selectors;

export default catalogSlice.reducer;
