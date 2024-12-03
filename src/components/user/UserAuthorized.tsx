import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { userSelectors } from "../../store/slices/userSlice";
import { offersSelectors } from "../../store/slices/offersSlice";
import { logout } from "../../store/thunks/authThunk";

function UserAuthorized(): JSX.Element {
	const dispatch = useAppDispatch();
	const favoriteOffersCount = useAppSelector(offersSelectors.favoriteOffers).length;
	const user = useAppSelector(userSelectors.user);

	const handleClick = () => {
		dispatch(logout());
	};

	return (
		<>
			<li className="header__nav-item user">
				<Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
					<div className="header__avatar-wrapper user__avatar-wrapper"></div>
					<span className="header__user-name user__name">{user?.email}</span>
					<span className="header__favorite-count">{favoriteOffersCount}</span>
				</Link>
			</li>
			<li className="header__nav-item">
				<a href="#" className="header__nav-link" onClick={handleClick}>
					<span className="header__signout">Sign out</span>
				</a>
			</li>
		</>
	);
}

export default UserAuthorized;
