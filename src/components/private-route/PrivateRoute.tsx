import { Navigate } from "react-router-dom";
import { AppRoute, AuthorizstionStatus } from "../../const";
import { useAppSelector } from "../../hooks/store";
import { userSelectors } from "../../store/slices/userSlice";

type PrivateRouteProps = {
	children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
	const authorizationStatus = useAppSelector(userSelectors.userStatus);

	return authorizationStatus === AuthorizstionStatus.Auth ? children : <Navigate to={AppRoute.Login}></Navigate>;
}

export default PrivateRoute;
