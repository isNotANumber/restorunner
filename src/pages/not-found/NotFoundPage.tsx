import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className='page page--gray page--not-found'>
      <div className='page__not-found-container container'>
        <main className='page__main'>
          <section className='not-found'>
            <h1 className='not-found__title'>404 - Not Found</h1>
            <p className='not-found__message'>
              Sorry, the page you are looking for does not exist.
            </p>
            <Link className='not-found__link' to='/'>
              Go to Home Page
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}

export default NotFoundPage;
