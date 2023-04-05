import React, { useState } from "react";
import * as yup from "yup";
import "../App.css";
import logo from "../assets/logo.png";
import company from "../assets/lendsqr.png";
import graphic from "../assets/pablo-graphic-login.png";

const Login: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleUsernameChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
		setUsername(evt.target.value);
	const handlePasswordChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
		setPassword(evt.target.value);
	const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		console.log(`username: ${username} password: ${password}`);
	};

	return (
		<div className="login">
			<div className="image-container">
				<div className="company-logo">
					<img src={logo} alt="logo" />
					<img src={company} alt="Lendsqr" />
				</div>

				<div className="graphic">
					<img src={graphic} alt="login-page-graphic" />
				</div>
			</div>

			<div className="form-container">
				<h1>Welcome!</h1>
				<p>Enter your details to login</p>
				<form onSubmit={handleSubmit}>
					<div className="input-container">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							name="username"
							value={username}
							onChange={handleUsernameChange}
						/>
					</div>
					<div className="input-container">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={handlePasswordChange}
						/>
					</div>

          <a href="#">Forgot Password?</a>

					<button type="submit">Log In</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
