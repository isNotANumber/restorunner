import { Helmet } from "react-helmet-async";
import PlaceCardsList from "../../components/place-cards-list/PlaceCardsList";
import Header from "../../components/header/Header";
import HeaderNav from "../../components/header/HeaderNav";
import { useAppSelector } from "../../hooks/store";
import Footer from "../../components/footer/Footer";
import { offersSelectors } from "../../store/slices/offersSlice";
import { categoriesSelectors } from "../../store/slices/categoriesSlice";

function FavoritesPage(): JSX.Element {
	const categories = useAppSelector(categoriesSelectors.getCategories);
	const favoriteOffers = useAppSelector(offersSelectors.getFavoriteOffers);

	return (
		<div className="page">
			<Helmet>
				<title>Restorunner: favorites</title>
			</Helmet>

			<Header>
				<HeaderNav></HeaderNav>
			</Header>

			<main className="page__main page__main--favorites">
				<div className="page__favorites-container container">
					<section className="favorites">
						<h1 className="favorites__title">Saved listing</h1>
						<ul className="favorites__list">
							{categories.map((type) => (
								<li key={type} className="favorites__places-types-items">
									<div className="favorites__places-types places-types places-types--current">
										<div className="places-types__item">
											<a className="places-types__item-link" href="#">
												<span>{type}</span>
											</a>
										</div>
									</div>
									<PlaceCardsList
										page="favorites"
										offers={favoriteOffers.filter((offer) => offer.category === type)}
									></PlaceCardsList>
								</li>
							))}
						</ul>
					</section>
				</div>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default FavoritesPage;
