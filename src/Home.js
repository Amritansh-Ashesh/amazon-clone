import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primedeals/PSW_PC_1x_English_Illustration._CB422946471_.jpg"
					alt=""
				/>

				<div className="home__row">
					<Product
						id="12345"
						title="Apple MacBook Pro (13-inch, 8GB RAM, 512GB Storage, 2.4GHz Intel Core i5) - Silver"
						price={1599}
						image="https://images-na.ssl-images-amazon.com/images/I/81LvopNOumL._SX679_.jpg"
						rating={4}
					/>
					<Product
						id="1245"
						title="New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Grey (2nd Generation)"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SX679_.jpg"
						rating={5}
					/>
				</div>
				{/* https://images-na.ssl-images-amazon.com/images/I/61yU0TJyaVL._SX679_.jpg */}
				<div className="home__row">
					<Product
						id="1245"
						title="M7STORE 6 blade Portable USB electronic hand blander mixture juice maker mixer grinders shaker"
						price={13.99}
						image="https://images-na.ssl-images-amazon.com/images/I/61yU0TJyaVL._SY450_.jpg"
						rating={4}
					/>
					<Product
						id="1245"
						title="Amazon Brand - Solimo 100% Cotton 2 Piece Bath Towel Set, 500 GSM (Turquoise Blue and Baby Pink)"
						price={15.99}
						image="https://images-na.ssl-images-amazon.com/images/I/91p9LRp4SLL._SX522_.jpg"
						rating={3}
					/>
					<Product
						id="1245"
						title="Haier 570 L Inverter Frost-Free Side-by-Side Refrigerator with Twin Inverter Technology (HRF-622KS, Black Steel) "
						price={859}
						image="https://images-na.ssl-images-amazon.com/images/I/71RlCxjpkRL._SX679_.jpg"
						rating={4}
					/>
				</div>

				<div className="home__row">
					<Product
						id="1245"
						title="Sony WH-1000XM4 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, Touch Control & Alexa Voice Control – (Black) "
						price={479}
						image="https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._SX425_.jpg"
						rating={5}
					/>
					{/* Nikon D3500 W/AF-P DX Nikkor 18-55mm f/3.5-5.6G VR with 16GB Memory Card and Carry Case (Black) */}
					<Product
						id="12455"
						title="Nikon D3500 W/AF-P DX Nikkor 18-55mm f/3.5-5.6G VR with 16GB Memory Card and Carry Case (Black)"
						price={789}
						image="https://images-na.ssl-images-amazon.com/images/I/71TSinb4usL._SX569_.jpg"
						rating={4}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
