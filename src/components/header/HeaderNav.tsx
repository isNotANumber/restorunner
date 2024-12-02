import { AuthorizstionStatus } from "../../const";
import { useAppSelector } from "../../store/hooks";
import { getAuthorizationStatus } from "../../store/slices/authSlice";
import UserAuthorized from "../user/UserAuthorized";
import UserUnauthorized from "../user/UserUnauthorized";

function HeaderNav(): JSX.Element {
	const authorizationStatus = useAppSelector(getAuthorizationStatus);

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