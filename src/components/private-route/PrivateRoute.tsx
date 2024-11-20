import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizstionStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizstionStatus;
  children: JSX.Element;
};

function PrivateRoute({
  authorizationStatus,
  children,
}: PrivateRouteProps): JSX.Element {
  return authorizationStatus === AuthorizstionStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login}></Navigate>
  );
}

export default PrivateRoute;
