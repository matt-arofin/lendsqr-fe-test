import React, { useState } from "react";
import "../App.css";
// import * as yup from "yup";
// import logo from "../assets/logo.png";
// import company from "../assets/lendsqr.png";
import graphic from "../assets/pablo-graphic-login.png";


const Login: React.FC = () => {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

	const handleEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
		setEmail(evt.target.value);
	const handlePasswordChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
		setPassword(evt.target.value);
	const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
    setIsLogin(false); // allows rest of top bar to render
		console.log(`email: ${email} password: ${password}`);
	};

	return (
		<div className="login">
			<div className="image-container">
				{/* <div className="company-logo">
					<img src={logo} alt="logo" />
					<img src={company} alt="Lendsqr" />
				</div> */}

				<div className="graphic">
					<img src={graphic} alt="login-page-graphic" />
				</div>
			</div>

			<div className="form-container">
				<h1>Welcome!</h1>
				<h4>Enter your details to login</h4>
				<form onSubmit={handleSubmit}>
					<div className="input-container">
						<input
							type="text"
							id="email"
							name="email"
              placeholder="Email Address"
							value={email}
							onChange={handleEmailChange}
						/>
					</div>
					<div className="input-container">
						<input
							type="password"
							id="password"
							name="password"
              placeholder="Password"
							value={password}
							onChange={handlePasswordChange}
						/>
					</div>

					<div className="login-page-links">
						<a href="/">Forgot Password?</a>
					</div>

					<button type="submit">Log In</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
