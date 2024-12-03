import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import { useAppDispatch } from "../../hooks/store";
import { FormEvent, ReactEventHandler, useState } from "react";
import { login } from "../../store/thunks/authThunk";

type HTMLLoginForm = HTMLFormElement & {
	email: HTMLInputElement;
	password: HTMLInputElement;
};

type ChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

function LoginPage(): JSX.Element {
	const dispatch = useAppDispatch();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange: ChangeHandler = (evt) => {
		const { name, value } = evt.currentTarget;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (evt: FormEvent<HTMLLoginForm>) => {
		evt.preventDefault();
		dispatch(login(formData));
	};

	return (
		<div className="page page--gray page--login">
			<Helmet>
				<title>Restorunner: login</title>
			</Helmet>

			<Header></Header>

			<main className="page__main page__main--login">
				<div className="page__login-container container">
					<section className="login">
						<h1 className="login__title">Sign in</h1>
						<form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
							<div className="login__input-wrapper form__input-wrapper">
								<label className="visually-hidden">E-mail</label>
								<input
									className="login__input form__input"
									type="email"
									name="email"
									placeholder="Email"
									required
									onChange={handleChange}
								/>
							</div>
							<div className="login__input-wrapper form__input-wrapper">
								<label className="visually-hidden">Password</label>
								<input
									className="login__input form__input"
									type="password"
									name="password"
									placeholder="Password"
									required
									onChange={handleChange}
								/>
							</div>
							<button className="login__submit form__submit button" type="submit">
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
