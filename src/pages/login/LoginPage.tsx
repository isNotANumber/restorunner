import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/Header';
import { useAppDispatch } from '../../store/hooks';
import { setAuthorizationStatus } from '../../features/auth/authSlice';
import { AppRoute, AuthorizstionStatus } from '../../const';
import { useNavigate } from 'react-router-dom';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignInClick = () => {
    dispatch(setAuthorizationStatus(AuthorizstionStatus.Auth));
  };

  return (
    <div className='page page--gray page--login'>
      <Helmet>
        <title>Restorunner: login</title>
      </Helmet>

      <Header></Header>

      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form className='login__form form' action='#' method='post'>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>E-mail</label>
                <input
                  className='login__input form__input'
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input
                  className='login__input form__input'
                  type='password'
                  name='password'
                  placeholder='Password'
                  required
                />
              </div>
              <button
                onClick={() => {
                  handleSignInClick();
                  navigate(AppRoute.Root);
                }}
                className='login__submit form__submit button'
                type='submit'
              >
                Sign in
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
