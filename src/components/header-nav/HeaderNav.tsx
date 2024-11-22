import { AuthorizstionStatus } from '../../const';
import { useAppSelector } from '../../store/hooks';
import HeaderLogged from '../header-logged/HeaderLogged';
import HeaderNotLogged from '../header-logged/HeaderNotLogged';

function HeaderNav(): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.auth.authorizationStatus
  );

  return (
    <nav className='header__nav'>
      <ul className='header__nav-list'>
        {authorizationStatus === AuthorizstionStatus.Auth ? (
          <HeaderLogged></HeaderLogged>
        ) : (
          <HeaderNotLogged></HeaderNotLogged>
        )}
      </ul>
    </nav>
  );
}

export default HeaderNav;
