import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categories, RequestStatus } from "../../const";
import { fetchCategories } from "../thunks/catalogThunk";
import { Offers } from "../../types/types";

type CategoriesState = {
	activeCategory: string;
	categories: string[];
	requestStatus: RequestStatus;
};

const initialState: CategoriesState = {
	activeCategory: Categories.Restaurant,
	categories: [],
	requestStatus: RequestStatus.Idle,
};

const categoriesSlice = createSlice({
	extraReducers: (builder) =>
		builder
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.requestStatus = RequestStatus.Success;
				state.categories = action.payload;
			})
			.addCase(fetchCategories.rejected, (state) => {
				state.requestStatus = RequestStatus.Failed;
			})
			.addCase(fetchCategories.pending, (state) => {
				state.requestStatus = RequestStatus.Loading;
			}),
	name: "categories",
	initialState,
	reducers: {
		setActiveCategory: (state, action: PayloadAction<string>) => {
			state.activeCategory = action.payload;
		},
	},
	selectors: {
		categories: (state: CategoriesState) => state.categories,
		activeCategory: (state: CategoriesState) => state.activeCategory,
		categoriesRequestStatus: (state: CategoriesState) => state.requestStatus,
		selectOffersByCategory: (state: CategoriesState, offers: Offers) =>
			offers.filter((offer) => offer.category === state.activeCategory),
	},
});

const categoriesActions = categoriesSlice.actions;
const categoriesSelectors = categoriesSlice.selectors;

export { categoriesActions, categoriesSelectors, categoriesSlice };
