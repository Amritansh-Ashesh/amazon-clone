import React from "react";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";

function Checkout() {
	const [{ basket }] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
					className="checkout__ad"
				/>
				<div className="checkout__payText">
					<strong>
						Pay faster for all your shopping needs{" "}
						<span className="checkout__lineOne">
							with Amazon Pay balance
						</span>
					</strong>
					<p>
						Get Instant refund on cancellations | Zero payment
						failures
					</p>
				</div>

				<div>
					<h2 className="checkout__title">Shopping Cart</h2>

					{basket.map((item) => (
						<CheckoutProduct
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>

			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
