import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categories, RequestStatus } from "../../const";
import { fetchCategories } from "../thunks/catalogThunk";
import { Offers } from "../../types/types";

type CategoriesState = {
	activeCategory: string;
	categories: string[];
	loadingStatus: RequestStatus;
};

const initialState: CategoriesState = {
	activeCategory: Categories.Restaurant,
	categories: [],
	loadingStatus: RequestStatus.Idle,
};

const categoriesSlice = createSlice({
	extraReducers: (builder) =>
		builder
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.loadingStatus = RequestStatus.Success;
				state.categories = action.payload;
			})
			.addCase(fetchCategories.rejected, (state) => {
				state.loadingStatus = RequestStatus.Failed;
			})
			.addCase(fetchCategories.pending, (state) => {
				state.loadingStatus = RequestStatus.Loading;
			}),
	name: "categories",
	initialState,
	reducers: {
		setActiveCategory: (state, action: PayloadAction<string>) => {
			state.activeCategory = action.payload;
		},
	},
	selectors: {
		getCategories: (state: CategoriesState) => state.categories,
		getActiveCategory: (state: CategoriesState) => state.activeCategory,
		selectOffersByCategory: (state: CategoriesState, offers: Offers) =>
			offers.filter((offer) => offer.category === state.activeCategory),
	},
});

const categoriesActions = categoriesSlice.actions;
const categoriesSelectors = categoriesSlice.selectors;

export { categoriesActions, categoriesSelectors, categoriesSlice };
