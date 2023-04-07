import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
// import * as yup from "yup"; form validation pending
import graphic from "../assets/pablo-graphic-login.png";

interface LoginProps {
  setIsLogin?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

const Login: React.FC<LoginProps> = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
    if (setIsLogin) {
      setIsLogin(true);
    }
  }, [setIsLogin]);

	const handleEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
		setEmail(evt.target.value);
	const handlePasswordChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
		setPassword(evt.target.value);
	const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		console.log(`email: ${email} password: ${password}`);
		navigate("/userlist")
	};

	return (
		<div className="login">
			<div className="image-container">
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
							data-testid="email-field"
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
							data-testid="password-field"
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

					<button data-testid="submit-button" type="submit">Log In</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
