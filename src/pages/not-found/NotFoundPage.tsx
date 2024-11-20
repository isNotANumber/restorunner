import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className='page page--gray page--not-found'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <a className='header__logo-link' href='main.html'>
                <img
                  className='header__logo'
                  src='img/icons/logo.svg'
                  alt='Restorunner logo'
                  width='171'
                  height='41'
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className='page__not-found-container container'>
        <main className='page__main'>
          <section className='not-found'>
            <h1 className='not-found__title'>404 - Not Found</h1>
            <p className='not-found__message'>
              Sorry, the page you are looking for does not exist.
            </p>
            <Link className='not-found__link' to='/'>
              To Home Page
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}

export default NotFoundPage;
