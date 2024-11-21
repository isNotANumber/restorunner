import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Footer(): JSX.Element {
  return (
    <footer className='footer container'>
      <Link className='footer__logo-link' to={AppRoute.Root}>
        <img
          className='footer__logo'
          src='./img/icons/logo.svg'
          alt='Restorunner logo'
          width='124'
          height='33'
        />
      </Link>
    </footer>
  );
}

export default Footer;
