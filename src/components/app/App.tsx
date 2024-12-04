import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AppRoute } from "../../const";
import MainPage from "../../pages/main/MainPage";
import LoginPage from "../../pages/login/LoginPage";
import FavoritesPage from "../../pages/favorites/FavoritesPage";
import OfferPage from "../../pages/offer/OfferPage";
import NotFoundPage from "../../pages/not-found/NotFoundPage";
import PrivateRoute from "../private-route/PrivateRoute";
import { store } from "../../store";
import { useEffect } from "react";
import { fetchAllOffers, fetchCategories, fetchFavoriteOffers } from "../../store/thunks/catalogThunk";
import { getToken } from "../../services/token";
import { checkAuth } from "../../store/thunks/authThunk";
import HistoryRouter from "../history-route/HistoryRoute";
import browserHistory from "../../browser-history";

function App() {
	const dispatch = store.dispatch;

	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(fetchAllOffers());
	});

	const token = getToken();
	useEffect(() => {
		if (token) {
			dispatch(checkAuth());
			dispatch(fetchFavoriteOffers());
		}
	}, [token, checkAuth]);

	return (
		<HelmetProvider>
			<HistoryRouter history={browserHistory}>
				<Routes>
					<Route path={AppRoute.Root} element={<MainPage></MainPage>}></Route>
					<Route
						path={AppRoute.Login}
						element={
							<PrivateRoute onlyUnAuth>
								<LoginPage></LoginPage>
							</PrivateRoute>
						}
					></Route>
					<Route
						path={AppRoute.Favorites}
						element={
							<PrivateRoute>
								<FavoritesPage></FavoritesPage>
							</PrivateRoute>
						}
					></Route>
					<Route path={AppRoute.Offer} element={<OfferPage></OfferPage>}></Route>
					<Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
				</Routes>
			</HistoryRouter>
		</HelmetProvider>
	);
}

export default App;
