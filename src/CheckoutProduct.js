import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
	const [, dispatch] = useStateValue();

	const removeFromCart = () => {
		dispatch({
			type: "REMOVE_FROM_CART",
			id: id,
		});
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<p className="checkoutProduct__stock">In Stock</p>
				<p className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<img
								className="checkoutProduct__star"
								src="https://img.icons8.com/fluent/48/000000/star.png"
								alt=""
							/>
						))}
				</p>
				{!hideButton && (
					<button
						onClick={removeFromCart}
						className="checkoutProduct__button"
					>
						Remove from cart
					</button>
				)}
			</div>
		</div>
	);
}

export default CheckoutProduct;
