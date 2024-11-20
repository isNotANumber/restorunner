import { Helmet } from 'react-helmet-async';
import PlaceCard from '../../components/place-card/PlaceCard';

function FavoritesPage(): JSX.Element {
  return (
    <div className='page'>
      <Helmet>
        <title>Restorunner: favorites</title>
      </Helmet>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link' href='main.html'>
                <img
                  className='header__logo'
                  src='./img/icons/logo.svg'
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

      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ul className='favorites__list'>
              <li className='favorites__locations-items'>
                <div className='favorites__locations locations locations--current'>
                  <div className='locations__item'>
                    <a className='locations__item-link' href='#'>
                      <span>Restaurants</span>
                    </a>
                  </div>
                </div>
                <div className='favorites__places'>
                  <PlaceCard page='favorites'></PlaceCard>
                </div>
              </li>

              <li className='favorites__locations-items'>
                <div className='favorites__locations locations locations--current'>
                  <div className='locations__item'>
                    <a className='locations__item-link' href='#'>
                      <span>Bars</span>
                    </a>
                  </div>
                </div>
                <div className='favorites__places'>
                  <PlaceCard page='favorites'></PlaceCard>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className='footer container'>
        <a className='footer__logo-link' href='main.html'>
          <img
            className='footer__logo'
            src='./img/icons/logo.svg'
            alt='Restorunner logo'
            width='124'
            height='33'
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
