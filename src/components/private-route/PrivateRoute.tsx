import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizstionStatus } from '../../const';
import { useAppSelector } from '../../store/hooks';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({
  children,
}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(state => state.auth.authorizationStatus);

  return authorizationStatus === AuthorizstionStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login}></Navigate>
  );
}

export default PrivateRoute;
