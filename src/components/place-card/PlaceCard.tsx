type PlaceCardProps = {
    // check page names
  page: 'rest-places' | 'favorites';
};

function PlaceCard({ page }: PlaceCardProps): JSX.Element {
  return (
    <article className={`${page}__card place-card`}>
      <div className={`${page}__image-wrapper place-card__image-wrapper`}>
        <a href='#'>
          <img
            className='place-card__image'
            src='./img/placeholders/placeholder260x200.png'
            width='260'
            height='200'
            alt='Place image'
          />
        </a>
      </div>
      <div className='place-card__info'>
        <h2 className='place-card__name'>
          <a href='#'>Name</a>
        </h2>
        <div className={`place-card__price-wrapper`}>
          <div className='place-card__price'>
            <b className='place-card__price-value'>Above Average</b>
            <span className='place-card__price-text'>&#47;&nbsp;Price</span>
          </div>
          <button className='place-card__bookmark-button button' type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${80}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='place-card__type'>Restaurant</p>
      </div>
    </article>
  );
}

export default PlaceCard;