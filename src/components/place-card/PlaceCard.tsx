import { Link } from "react-router-dom";
import { Offer } from "../../types/types";
import { catalogActions } from "../../store/slices/catalogSlice";
import { useAppDispatch } from "../../hooks/store";
import { patchAddToFavorites, patchRemoveFromFavorites } from "../../store/thunks/catalogThunk";

type PlaceCardProps = {
	offer: Offer;
	page: "rest-places" | "favorites";
};

function PlaceCard({ offer, page }: PlaceCardProps): JSX.Element {
	const dispatch = useAppDispatch();

	const handleCardMouseEnter = (offerId: Offer["id"]) => {
		return dispatch(catalogActions.setActiveCardId(offerId));
	};

	const handleBookmarkBtnClick = (offer: Offer) => {
		return offer.isFavorite ? dispatch(patchRemoveFromFavorites(offer.id)) : dispatch(patchAddToFavorites(offer.id));
	};

	return (
		<article className={`${page}__card place-card`} onMouseEnter={() => handleCardMouseEnter(offer.id)}>
			{offer.isPopular ? (
				<div className="place-card__mark">
					<span>Popular</span>
				</div>
			) : null}
			<div className={`${page}__image-wrapper place-card__image-wrapper`}>
				<a href="#">
					<img
						className="place-card__image"
						src="./img/placeholders/placeholder260x200.png"
						width="260"
						height="200"
						alt="Place image"
					/>
				</a>
			</div>
			<div className="place-card__info">
				<div className={`place-card__price-wrapper`}>
					<div className="place-card__price">
						<b className="place-card__price-value">{offer.price}</b>
						<span className="place-card__price-text">&nbsp;&#47;&nbsp;Price</span>
					</div>
					<button
						onClick={() => handleBookmarkBtnClick(offer)}
						className={`place-card__bookmark-button ${
							offer.isFavorite ? "place-card__bookmark-button--active" : ""
						} button`}
						type="button"
					>
						<svg className="place-card__bookmark-icon" width="18" height="19">
							<use xlinkHref="#icon-bookmark"></use>
						</svg>
						<span className="visually-hidden">To bookmarks</span>
					</button>
				</div>
				<h2 className="place-card__name">
					<Link to={`/offer/${offer.id}`}>{offer.title}</Link>
				</h2>
				<div className="place-card__rating rating">
					<div className="place-card__stars rating__stars">
						<span style={{ width: `${offer.rating * 20}%` }}></span>
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<p className="place-card__type">{offer.category}</p>
			</div>
		</article>
	);
}

export default PlaceCard;
