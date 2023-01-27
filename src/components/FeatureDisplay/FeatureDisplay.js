import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import "./FeatureDisplay.css";
import cart from "../../assets/FeatureDisplay/cart.svg";
import arrow from "../../assets/FeatureDisplay/arrow.svg";
import image1 from "../../assets/FeatureDisplay/1.png";
import image2 from "../../assets/FeatureDisplay/2.png";
import image3 from "../../assets/FeatureDisplay/3.png";
import image4 from "../../assets/FeatureDisplay/4.png";
import image5 from "../../assets/FeatureDisplay/5.png";

const FeatureDisplay = () => {
	const professions = [
		{
			title: "Product Discovery",
			image: image1,
			description: "Connect buyers with merchants tailored to them",
			icon: cart,
		},
		{
			title: "SaaS Application Search",
			image: image2,
			description:
				"Decrease your application’s time to market by building the search and discovery experience with Algolia’s APIs.",
			icon: cart,
		},
		{
			title: "Site Search",
			image: image3,
			description:
				"Increase web visitor conversions by enabling search and discovery across different types of website content.",
			icon: cart,
		},
		{
			title: "Content Discovery",
			image: image4,
			description:
				"Boost ad or subscription revenue by enabling search and discovery for digital media.",
			icon: cart,
		},
		{
			title: "Enterprise & Workplace Search",
			image: image5,
			description:
				"Enable enterprise-grade customer search and discovery, while empowering employees to find information across company systems.",
			icon: cart,
		},
	];
	const [myProfession, setMyProfession] = useState("Product Discovery");

	return (
		<div className="second-page">
			{/* <div className="heading-text">
        <h1>Powerful, flexible, scalable digital experiences for your business</h1>
      </div> */}
			<div>
				{professions.map((profession, idx) => (
					<div key={idx} onClick={() => setMyProfession(profession.title)}>
						<div
							class="card-btn-selected"
							style={
								myProfession === profession.title
									? {
											borderRadius: "16px",
											boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
											position: "relative",
											zIndex: "1",
											borderBottom: "0px solid rgb(2, 0, 0)",
									  }
									: {}
							}
						>
							<div
								className="card-btn-icon"
								style={
									myProfession === profession.title
										? {
												backgroundColor: "#003dff",
										  }
										: {}
								}
							>
								<img className="cart" src={profession.icon} alt="cart-icn" />
							</div>
							<div className="card-btn-content">
								<h1 className="lead-content">
									{profession.title.toUpperCase()}
								</h1>
								{myProfession === profession.title && (
									<>
										<p className="support-content">{profession.description}</p>
										<div className="btn-div">
											<button className="link-btn">B2C Solutions</button>
											<img src={arrow} className="arrow" alt="arrow" />
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="images">
				<p>
					{myProfession === "Product Discovery" && (
						<ProfessionImage src={image1} />
					)}
					{myProfession === "SaaS Application Search" && (
						<ProfessionImage src={image2} />
					)}
					{myProfession === "Site Search" && <ProfessionImage src={image3} />}
					{myProfession === "Content Discovery" && (
						<ProfessionImage src={image4} />
					)}
					{myProfession === "Enterprise & Workplace Search" && (
						<ProfessionImage src={image5} />
					)}
				</p>
			</div>
		</div>
	);
};

const ProfessionImage = ({ src }) => {
	const props = useSpring({ opacity: 1, from: { opacity: 0 } });
	return (
		<animated.img
			src={src}
			alt=""
			style={{ width: "560px", height: "560px", ...props }}
		/>
	);
};

export default FeatureDisplay;
