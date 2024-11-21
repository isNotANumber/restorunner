import { Offer, Offers } from '../../mocks/types';
import PlaceCard from '../place-card/PlaceCard';

type PlaceCardsListProps = {
  offers: Offers;
  page: 'rest-places' | 'favorites';
  onCardMouseEnter: (id: string) => void;
};

function PlaceCardsList({
  offers,
  page,
  onCardMouseEnter,
}: PlaceCardsListProps): JSX.Element {
  return (
    <div
      className={
        page === 'rest-places'
          ? `rest-places__places-list places__list tabs__content`
          : 'favorites__places'
      }
    >
      {offers.map((offer: Offer) => (
        <PlaceCard
          onCardMouseEnter={onCardMouseEnter}
          key={offer.id}
          offer={offer}
          page={page}
        />
      ))}
    </div>
  );
}

export default PlaceCardsList;
