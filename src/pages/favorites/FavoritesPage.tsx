import { Helmet } from "react-helmet-async";
import PlaceCardsList from "../../components/place-cards-list/PlaceCardsList";
import Header from "../../components/header/Header";
import HeaderNav from "../../components/header-nav/HeaderNav";
import { useAppSelector } from "../../store/hooks";
import Footer from "../../components/footer/Footer";
import { getCategories, getFavoriteOffers } from "../../store/slices/catalogSlice";

function FavoritesPage(): JSX.Element {
	const categories = useAppSelector((state) => getCategories(state));

	const getCategoryOffers = (type: string) =>
		useAppSelector((state) => getFavoriteOffers(state).filter((offer) => offer.category === type && offer.isFavorite));

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
									<PlaceCardsList page="favorites" offers={getCategoryOffers(type)}></PlaceCardsList>
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
