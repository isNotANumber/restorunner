import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main/MainPage';
import LoginPage from '../../pages/login/LoginPage';
import FavoritesPage from '../../pages/favorites/FavoritesPage';
import OfferPage from '../../pages/offer/OfferPage';

function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage></MainPage>}></Route>
        <Route path={AppRoute.Login} element={<LoginPage></LoginPage>}></Route>
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesPage></FavoritesPage>}
        ></Route>
        <Route path={AppRoute.Offer} element={<OfferPage></OfferPage>}></Route>
        <Route path='*' element={<MainPage></MainPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
