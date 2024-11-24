import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../../mocks/types';
import { OFFERS } from '../../mocks/offers';
import Map from '../../components/map/Map';
import Footer from '../../components/footer/Footer';

function OfferPage(): JSX.Element {
  const { id } = useParams();
  const offer: Offer = OFFERS.find((item) => item.id === id) as Offer;

  return (
    <div className='page'>
      <Helmet>
        <title>Restorunner: offer</title>
      </Helmet>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link' href='main.html'>
                <img
                  className='header__logo'
                  src='img/icons/logo.svg'
                  alt='Restorunner logo'
                  width='171'
                  height='41'
                />
              </a>
            </div>
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <a
                    className='header__nav-link header__nav-link--profile'
                    href='#'
                  >
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <span className='header__user-name user__name'>
                      nananner@gmail.com
                    </span>
                    <span className='header__favorite-count'>1</span>
                  </a>
                </li>
                <li className='header__nav-item'>
                  <a className='header__nav-link' href='#'>
                    <span className='header__signout'>Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className='page__main page__main--offer'>
        <section className='offer'>
          <div className='offer__gallery-container container'>
            <div className='offer__gallery'>
              {offer?.images.map((image) => (
                <div key={image} className='offer__image-wrapper'>
                  <img
                    className='offer__image'
                    src='img/placeholders/placeholder260x200.png'
                    alt='Photo studio'
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='offer__container container'>
            <div className='offer__wrapper'>
              {offer?.isPopular ? (
                <div className='offer__mark'>
                  <span>Popular</span>
                </div>
              ) : null}
              <div className='offer__name-wrapper'>
                <h1 className='offer__name'>{offer?.title}</h1>
                <button
                  className={`offer__bookmark-button ${
                    offer?.isFavorite ? 'offer__bookmark-button--active' : ''
                  } button`}
                  type='button'
                >
                  <svg className='offer__bookmark-icon' width='31' height='33'>
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
              </div>
              <div className='offer__rating rating'>
                <div className='offer__stars rating__stars'>
                  <span
                    style={{
                      height: '100%',
                      width: `${offer?.rating ? offer.rating * 20 : null}%`,
                    }}
                  ></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='offer__rating-value rating__value'>
                  {offer?.rating}
                </span>
              </div>
              <ul className='offer__features'>
                <li className='offer__feature'>Mmm</li>
                <li className='offer__feature'>Wow</li>
                <li className='offer__feature'>Nice</li>
              </ul>
              <div className='offer__price'>
                <b className='offer__price-value'>{offer?.price}</b>
                <span className='offer__price-text'>&nbsp;Price</span>
              </div>
              <div className='offer__inside'>
                <h2 className='offer__inside-title'>What&apos;s inside</h2>
                <ul className='offer__inside-list'>
                  {offer?.goods.map((good) => (
                    <li key={good} className='offer__inside-item'>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='offer__description'>
                <p className='offer__text'>{offer?.description}</p>
              </div>
              <div className='offer__contacts'>
                <h2 className='contacts__title'>Contacts</h2>
                <div className='contacts__wrapper'>
                  <div className='contacts__phone'>
                    Phone: {offer?.contacts.phone}
                  </div>
                  <div className='contacts__mail'>
                    Email: {offer?.contacts.email}
                  </div>
                  <div className='contacts__telegram'>
                    Telegram: {offer?.contacts.telegram}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className='offer__map map'>
            <Map offers={[offer]}></Map>
          </section>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default OfferPage;
