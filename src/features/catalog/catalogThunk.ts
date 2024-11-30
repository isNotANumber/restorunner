import type { AxiosInstance } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Offers, Offer } from "../../types/types";
import { Endpoint } from "../../const";
import OfferDto from "../../dto/offer/offer.dto";
import {
	adaptCategoriesToClient,
	adaptOffersToClient,
	adaptOfferToClient,
} from "../../utils/adapters/adaptersToClient";
import CategoryDto from "../../dto/category/category.dto";

const fetchAllOffers = createAsyncThunk<Offers, undefined, { extra: AxiosInstance }>(
	"fetchOffers/all",
	async (_arg, { extra: api }) => {
		const response = await api.get<OfferDto[]>(Endpoint.Offers);
		return adaptOffersToClient(response.data);
	}
);

const fetchFavoriteOffers = createAsyncThunk<Offers, undefined, { extra: AxiosInstance }>(
	"fetchOffers/favorites",
	async (_arg, { extra: api }) => {
		const response = await api.get<OfferDto[]>(Endpoint.Favorites);
		return adaptOffersToClient(response.data);
	}
);

const fetchCategories = createAsyncThunk<string[], undefined, { extra: AxiosInstance }>(
	"fetchCategories/all",
	async (_arg, { extra: api }) => {
		const response = await api.get<CategoryDto[]>(Endpoint.Categories);
		return adaptCategoriesToClient(response.data);
	}
);

const patchAddToFavorites = createAsyncThunk<Offer, Offer["id"], { extra: AxiosInstance }>(
	"patchAddToFavorites/",
	async (offerId, { extra: api }) => {
		const response = await api.patch<OfferDto>(`${Endpoint.Offers}/${offerId}`, { isFavorite: true });
		return adaptOfferToClient(response.data);
	}
);

const patchRemoveFromFavorites = createAsyncThunk<Offer, Offer["id"], { extra: AxiosInstance }>(
	"patchRemoveFromFavorites/",
	async (offerId, { extra: api }) => {
		const response = await api.patch<OfferDto>(`${Endpoint.Offers}/${offerId}`, { isFavorite: false });
		return adaptOfferToClient(response.data);
	}
);

export { fetchAllOffers, fetchFavoriteOffers, fetchCategories, patchAddToFavorites, patchRemoveFromFavorites };
