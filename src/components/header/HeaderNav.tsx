import { AuthorizstionStatus } from "../../const";
import { useAppSelector } from "../../hooks/store";
import { authSelectors } from "../../store/slices/authSlice";
import UserAuthorized from "../user/UserAuthorized";
import UserUnauthorized from "../user/UserUnauthorized";

function HeaderNav(): JSX.Element {
	const authorizationStatus = useAppSelector(authSelectors.getAuthorizationStatus);

	return (
		<nav className="header__nav">
			<ul className="header__nav-list">
				{authorizationStatus === AuthorizstionStatus.Auth ? (
					<UserAuthorized></UserAuthorized>
				) : (
					<UserUnauthorized></UserUnauthorized>
				)}
			</ul>
		</nav>
	);
}

export default HeaderNav;
