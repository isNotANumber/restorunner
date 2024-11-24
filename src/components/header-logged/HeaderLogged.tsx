import { Link } from 'react-router-dom';
import { AppRoute, AuthorizstionStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setAuthorizationStatus } from '../../features/auth/authSlice';

function HeaderLogged(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleSignOutClick = () => {
    dispatch(setAuthorizationStatus(AuthorizstionStatus.NoAuth));
  };

  const favoriteOffersCount = useAppSelector(
    (state) => state.catalog.favoritesOffersCount
  );

  return (
    <>
      <li className='header__nav-item user'>
        <Link
          to={AppRoute.Favorites}
          className='header__nav-link header__nav-link--profile'
        >
          <div className='header__avatar-wrapper user__avatar-wrapper'></div>
          <span className='header__user-name user__name'>
            nananner@gmail.com
          </span>
          <span className='header__favorite-count'>{favoriteOffersCount}</span>
        </Link>
      </li>
      <li className='header__nav-item'>
        <Link
          to={AppRoute.Root}
          className='header__nav-link'
          onClick={handleSignOutClick}
        >
          <span className='header__signout'>Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default HeaderLogged;
