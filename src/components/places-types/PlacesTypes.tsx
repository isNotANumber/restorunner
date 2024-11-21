function PlacesTypes(): JSX.Element {
  return (
    <div className='tabs'>
      <section className='places-types container'>
        <ul className='places-types__list tabs__list'>
          <li className='places-types__item'>
            <a
              className='places-types__item-link tabs__item tabs__item--active'
              href='#'
            >
              <span>Restaurants</span>
            </a>
          </li>
          <li className='places-types__item'>
            <a className='places-types__item-link tabs__item' href='#'>
              <span>Cafes</span>
            </a>
          </li>
          <li className='places-types__item'>
            <a className='places-types__item-link tabs__item' href='#'>
              <span>Bars</span>
            </a>
          </li>
          <li className='places-types__item'>
            <a className='places-types__item-link tabs__item'>
              <span>FastFood</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default PlacesTypes;