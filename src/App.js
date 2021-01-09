import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
	"pk_test_51I7k5VHnGNV6Bkc9ia8NVclAHEiKAHyfsgFcnH7s5CRh3ArNQASEEzwxAgPAFoBbXxhdGlmCmzsoD6FoTxCXpBxz00eN99Xl3Z"
);

const App = () => {
	const [, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// User just logged in / was logged in

				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// User is logged out

				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, [dispatch]);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route path="/checkout">
						{/* Header */}
						<Header />

						{/* Checkout */}
						<Checkout />
					</Route>

					<Route path="/login">
						<Login />
					</Route>

					<Route path="/payment">
						{/* Header */}
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>

					<Route path="/">
						{/* Header */}
						<Header />

						{/* Home */}
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
