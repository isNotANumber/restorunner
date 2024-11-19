function MainPage(): JSX.Element {
    return (
        <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="./img/icons/logo.svg" alt="Restorunner logo" width="171" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">nananner@gmail.com</span>
                    <span className="header__favorite-count">1</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Places</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active" href="#">
                  <span>Restaurants</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Bars</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cafes</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item">
                  <span>FastFood</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="rest-places">
          <div className="rest-places__places-container container">
            <section className="rest-places__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">52 Restaurants found</b>
              <div className="rest-places__places-list places__list tabs__content">
                <article className="rest-places__card place-card">
                  <div className="rest-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="./img/placeholders/placeholder260x200.png" width="260" height="200" alt="Place image" />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <h2 className="place-card__name">
                        <a href="#">Name</a>
                      </h2>
                      <button className="place-card__bookmark-button button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__price">
                      <b className="place-card__price-value">Above Average</b>
                      <span className="place-card__price-text">Price</span>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{width: `${80}%`}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <p className="place-card__type">Restaurant</p>
                  </div>
                </article>
                <article className="rest-places__card place-card">
                  <div className="rest-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="./img/placeholders/placeholder260x200.png" width="260" height="200" alt="Place image" />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <h2 className="place-card__name">
                        <a href="#">Name</a>
                      </h2>
                      <button className="place-card__bookmark-button button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__price">
                      <b className="place-card__price-value">Above Average</b>
                      <span className="place-card__price-text">Price</span>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{width: `${80}%`}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <p className="place-card__type">Restaurant</p>
                  </div>
                </article>
                <article className="rest-places__card place-card">
                  <div className="rest-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="./img/placeholders/placeholder260x200.png" width="260" height="200" alt="Place image" />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <h2 className="place-card__name">
                        <a href="#">Name</a>
                      </h2>
                      <button className="place-card__bookmark-button button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__price">
                      <b className="place-card__price-value">Above Average</b>
                      <span className="place-card__price-text">Price</span>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{width: `${80}%`}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <p className="place-card__type">Restaurant</p>
                  </div>
                </article>
                <article className="rest-places__card place-card">
                  <div className="rest-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="./img/placeholders/placeholder260x200.png" width="260" height="200" alt="Place image" />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <h2 className="place-card__name">
                        <a href="#">Name</a>
                      </h2>
                      <button className="place-card__bookmark-button button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__price">
                      <b className="place-card__price-value">Above Average</b>
                      <span className="place-card__price-text">Price</span>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{width: `${80}%`}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <p className="place-card__type">Restaurant</p>
                  </div>
                </article>
              </div>
            </section>
            <div className="rest-places__right-section">
              <section className="rest-places__map map"><img src="./img/placeholders/map512x777.png" alt="map" /></section>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
}

export default MainPage;