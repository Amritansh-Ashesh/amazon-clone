import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./header.css";
import { useStateValue } from "./StateProvider";
// import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
	const [{ basket, user }] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="amazon"
				/>
			</Link>

			<div className="header__option">
				<span className="header__optionLineOne">Hello,</span>
				<span className="header__optionLineTwo">
					Select your address
				</span>
			</div>

			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<img
					className="header__searchIcon"
					src="https://img.icons8.com/android/96/000000/search.png"
					alt="Search"
				/>
			</div>

			<div className="header__nav">
				<Link to={!user && "/login"} className="header__link">
					<div
						onClick={handleAuthentication}
						className="header__option"
					>
						<span className="header__optionLineOne">
							Hello {user ? user?.email.split("@", 1) : "Guest"}
						</span>
						<span className="header__optionLineTwo">
							{user ? "Sign Out" : "Sign in"}
						</span>
					</div>
				</Link>

				<Link to="/orders">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>

				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>

				<div className="header__optionBasket">
					<span className="header__optionLineTwo header__basketCount">
						{basket?.length}
					</span>
					<Link to="/checkout">
						<img
							src="https://img.icons8.com/android/48/ffffff/shopping-cart.png"
							alt="cart"
							className="header__basketIcon"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
