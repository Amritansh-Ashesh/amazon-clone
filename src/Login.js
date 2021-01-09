import "./Login.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const signIn = (e) => {
		e.preventDefault();

		// Firebase Login
		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();

		// Firebase Register
		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>
			<div className="login__container">
				<h1>Sign-In</h1>

				<form action="POST">
					<h5>Email</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						type="submit"
						onClick={signIn}
						className="login__signInButton"
					>
						Continue
					</button>
				</form>

				<p>
					By continuing, you agree to Amazon's Conditions of Use &
					Sale. Please see our Privacy Notice, our Cookies Notice and
					our Interest-Based Ads Notice{" "}
				</p>

				<p className="login__registerInfo">New to Amazon?</p>

				<button onClick={register} className="login__registerButton">
					Create your Amazon account
				</button>

				<p className="login__registerInfo">
					© 1996-2020, Amazon.com, Inc. or its affiliates
				</p>
			</div>
		</div>
	);
}

export default Login;
