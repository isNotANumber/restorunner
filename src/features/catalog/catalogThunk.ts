import type { AxiosInstance } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Offers } from "../../types/types";
import { Endpoint } from "../../const";
import OfferDto from "../../dto/offer/offer.dto";
import { adaptCategoriesToClient, adaptOffersToClient } from "../../utils/adapters/adaptersToClient";
import CategoryDto from "../../dto/category/category.dto";

const fetchAllOffers = createAsyncThunk<Offers, undefined, { extra: AxiosInstance }>(
	"fetchOffers/all",
	async (_arg, { extra: api }) => {
		const response = await api.get<OfferDto[]>(Endpoint.Offers);
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

export { fetchAllOffers, fetchCategories };
