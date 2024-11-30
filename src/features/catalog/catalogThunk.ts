import type { AxiosInstance } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Offers } from "../../mocks/types";
import { Endpoint } from "../../const";

const fetchAllOffers = createAsyncThunk<Offers, undefined, { extra: AxiosInstance }>(
	"fetchOffers/all",
	async (_arg, { extra: api }) => {
		const response = await api.get<Offers>(Endpoint.Offers);
		console.log(response.data);
		return response.data;
	}
);

export { fetchAllOffers };
