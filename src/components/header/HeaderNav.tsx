import { AuthorizstionStatus } from "../../const";
import { useAppSelector } from "../../hooks/store";
import { userSelectors } from "../../store/slices/userSlice";
import UserAuthorized from "../user/UserAuthorized";
import UserUnauthorized from "../user/UserUnauthorized";

function HeaderNav(): JSX.Element {
	const authorizationStatus = useAppSelector(userSelectors.userStatus);

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
