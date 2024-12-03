import type { ReactNode } from "react";
import type { Location } from "react-router-dom";

import { Navigate, useLocation } from "react-router-dom";

import { AppRoute, AuthorizstionStatus } from "../../const";
import { useAppSelector } from "../../hooks/store";
import { userSelectors } from "../../store/slices/userSlice";

type PrivateRouteProps = {
	children: ReactNode;
	onlyUnAuth?: boolean;
};

type FromState = {
	from?: Location;
};

export default function PrivateRoute({ children, onlyUnAuth }: PrivateRouteProps) {
	const location: Location<FromState> = useLocation() as Location<FromState>;

	const user = useAppSelector(userSelectors.user);
	const userCheckAuth = useAppSelector(userSelectors.userStatus);

	if (userCheckAuth === AuthorizstionStatus.Unknown) {
		return <div>*Loader placeholder*</div>;
	}

	if (onlyUnAuth && user) {
		const from = location.state?.from || { pathname: AppRoute.Root };
		return <Navigate to={from} />;
	}

	if (!onlyUnAuth && !user) {
		return <Navigate state={{ from: location }} to={AppRoute.Login}></Navigate>;
	}

	return children;
}
