import { Helmet } from "react-helmet-async";
import Map from "../../components/map/Map";
import PlaceCardsList from "../../components/place-cards-list/PlaceCardsList";
import Header from "../../components/header/Header";
import HeaderNav from "../../components/header/HeaderNav";
import Categories from "../../components/categories/Categories";
import { useAppSelector } from "../../hooks/store";
import { catalogSelectors } from "../../store/slices/catalogSlice";
import { categoriesSelectors } from "../../store/slices/categoriesSlice";

function MainPage(): JSX.Element {
	const currentPlaceType = useAppSelector(categoriesSelectors.getActiveCategory);
	const offers = useAppSelector(catalogSelectors.getOffers);
	const offersByCategory = useAppSelector((state) => categoriesSelectors.selectOffersByCategory(state, offers));

	return (
		<div className="page page--gray page--main">
			<Helmet>
				<title>Restorunner: main</title>
			</Helmet>

			<Header>
				<HeaderNav></HeaderNav>
			</Header>

			<main className="page__main page__main--index">
				<h1 className="visually-hidden">Places</h1>

				<Categories></Categories>

				<div className="rest-places">
					<div className="rest-places__places-container container">
						<section className="rest-places__places places">
							<h2 className="visually-hidden">Places</h2>
							<b className="places__found">
								{offersByCategory.length} {currentPlaceType}s found
							</b>
							<PlaceCardsList offers={offersByCategory} page="rest-places"></PlaceCardsList>
						</section>
						<div className="rest-places__right-section">
							<section className="rest-places__map map">
								<Map offers={offersByCategory}></Map>
							</section>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default MainPage;
