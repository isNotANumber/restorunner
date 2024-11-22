import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/Map';
import PlaceCardsList from '../../components/place-cards-list/PlaceCardsList';
import { CITY } from '../../const';
import Header from '../../components/header/Header';
import HeaderNav from '../../components/header-nav/HeaderNav';
import PlacesTypes from '../../components/places-types/PlacesTypes';
import { useAppSelector } from '../../store/hooks';

function MainPage(): JSX.Element {
  const currentPlaceType = useAppSelector(
    (state) => state.catalog.currentPlaceType
  );
  const filteredOffers = useAppSelector((state) =>
    state.catalog.offers.filter((offer) => offer.type === currentPlaceType)
  );

  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <title>Restorunner: main</title>
      </Helmet>

      <Header>
        <HeaderNav></HeaderNav>
      </Header>

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Places</h1>

        <PlacesTypes></PlacesTypes>

        <div className='rest-places'>
          <div className='rest-places__places-container container'>
            <section className='rest-places__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>
                {filteredOffers.length} {currentPlaceType}s found
              </b>
              <PlaceCardsList
                offers={filteredOffers}
                page='rest-places'
              ></PlaceCardsList>
            </section>
            <div className='rest-places__right-section'>
              <section className='rest-places__map map'>
                <Map city={CITY}></Map>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
