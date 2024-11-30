import { Offer, Offers } from "../../types/types";
import PlaceCard from "../place-card/PlaceCard";

type PlaceCardsListProps = {
	offers: Offers;
	page: "rest-places" | "favorites";
};

function PlaceCardsList({ offers, page }: PlaceCardsListProps): JSX.Element {
	return (
		<div
			className={page === "rest-places" ? `rest-places__places-list places__list tabs__content` : "favorites__places"}
		>
			{offers.map((offer: Offer) => (
				<PlaceCard key={offer.id} offer={offer} page={page} />
			))}
		</div>
	);
}

export default PlaceCardsList;
