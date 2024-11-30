import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Offer, Offers } from "../../types/types";
import { fetchAllOffers, fetchCategories, fetchFavoriteOffers } from "./catalogThunk";

type CatalogState = {
	currentPlaceType: string;
	categories: string[];
	offers: Offers;
	favoriteOffers: Offers;
	favoritesOffersCount: number;
	activeCardId: string;
};

const initialState: CatalogState = {
	currentPlaceType: "Restaurant",
	categories: [],
	offers: [],
	favoriteOffers: [],
	favoritesOffersCount: 0,
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
		getFavoriteOffers: (state) => state.offers,
		getOffersByCategory: (state, category) => state.offers.filter((offer) => offer.type === category),
		getCategories: (state) => state.categories,
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

export const { getAllOffers, getFavoriteOffers, getOffersByCategory, getCategories } = catalogSlice.selectors;

export default catalogSlice.reducer;
