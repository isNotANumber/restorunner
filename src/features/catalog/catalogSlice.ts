import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offers, Offer } from '../../mocks/types';
import { AppDispatch } from '../../store';
import { OFFERS } from '../../mocks/offers';

type CatalogState = {
  currentPlaceType: string;
  offers: Offers;
  favoritesOffersCount: number;
  activeCardId: string;
};

const initialState: CatalogState = {
  currentPlaceType: 'Restaurant',
  offers: [],
  favoritesOffersCount: 0,
  activeCardId: '',
};

const catalogSlice = createSlice({
  name: 'catalog',
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

      state.offers = [...state.offers.slice(0, targetOfferIndex), action.payload, ...state.offers.slice(targetOfferIndex + 1)];
    },
    setFavoritesOffersCount: (state, action: PayloadAction<number>) => {
      state.favoritesOffersCount = action.payload;
    },
    setActiveCardId: (state, action: PayloadAction<string>) => {
      state.activeCardId = action.payload;
    },
  },
});

export const loadOffers = () => (dispatch: AppDispatch) => {
  dispatch(setOffers(OFFERS));
};

export const {
  setCurrentPlaceType,
  setOffers,
  updateOffer,
  setFavoritesOffersCount,
  setActiveCardId,
} = catalogSlice.actions;

export default catalogSlice.reducer;
