import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/Map';
import PlaceCardsList from '../../components/place-cards-list/PlaceCardsList';
import { CITY } from '../../const';
import { useState } from 'react';
import Header from '../../components/header/Header';
import HeaderNav from '../../components/header-nav/HeaderNav';
import PlacesTypes from '../../components/places-types/PlacesTypes';
import { useAppSelector } from '../../store/hooks';

function MainPage(): JSX.Element {
  const [activeCardId, setActiveCardId] = useState('');

  const currentPlaceType = useAppSelector(
    (state) => state.catalog.currentPlaceType
  );
  const filteredOffers = useAppSelector((state) =>
    state.catalog.offers.filter((offer) => offer.type === currentPlaceType)
  );

  const handleCardMouseEnter = (id: string) => {
    setActiveCardId(id);
  };

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
              <b className='places__found'>52 Restaurants found</b>
              <PlaceCardsList
                offers={filteredOffers}
                onMouseEnter={handleCardMouseEnter}
                page='rest-places'
              ></PlaceCardsList>
            </section>
            <div className='rest-places__right-section'>
              <section className='rest-places__map map'>
                <Map city={CITY} selectedPointId={activeCardId}></Map>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
