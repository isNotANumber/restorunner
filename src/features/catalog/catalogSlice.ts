import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offers } from '../../mocks/types';
import { AppDispatch } from '../../store';
import { OFFERS } from '../../mocks/offers';

type CatalogState = {
  currentPlaceType: string;
  offers: Offers;
};

const initialState: CatalogState = {
  currentPlaceType: 'Restaurants',
  offers: [],
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
  },
});

export const loadOffers = () => (dispatch: AppDispatch) => {
    dispatch(setOffers(OFFERS));
}

export const { setCurrentPlaceType, setOffers } = catalogSlice.actions;

export default catalogSlice.reducer;