import type { AxiosInstance } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Offers } from "../../types/types";
import { Endpoint } from "../../const";
import OfferDto from "../../dto/offer/offer.dto";
import { adaptOffersToClient } from "../../utils/adapters/adaptersToClient";

const fetchAllOffers = createAsyncThunk<Offers, undefined, { extra: AxiosInstance }>(
	"fetchOffers/all",
	async (_arg, { extra: api }) => {
		const response = await api.get<OfferDto[]>(Endpoint.Offers);
		return adaptOffersToClient(response.data);
	}
);

export { fetchAllOffers };
