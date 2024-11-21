import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

type HeaderProps = {
    children?: React.ReactNode;
}

function Header({children}: HeaderProps): JSX.Element {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link to={AppRoute.Root} className='header__logo-link header__logo-link--active'>
              <img
                className='header__logo'
                src='./img/icons/logo.svg'
                alt='Restorunner logo'
                width='171'
                height='41'
              />
            </Link>
          </div>
          {children}
        </div>
      </div>
    </header>
  );
}

export default Header;