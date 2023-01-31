import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import cart from "../../assets/FeatureDisplay/cart.svg";
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
			description:"Decrease your application’s time to market by building the search and discovery experience with Algolia’s APIs.",
			icon: cart,
		},
		{
			title: "Site Search",
			image: image3,
			description:"Increase web visitor conversions by enabling search and discovery across different types of website content.",
			icon: cart,
		},
		{
			title: "Content Discovery",
			image: image4,
			description:"Boost ad or subscription revenue by enabling search and discovery for digital media.",
			icon: cart,
		},
		{
			title: "Enterprise & Workplace Search",
			image: image5,
			description:"Enable enterprise-grade customer search and discovery, while empowering employees to find information across company systems.",
			icon: cart,
		},
	];
	const [myProfession, setMyProfession] = useState("Product Discovery");

	return (
		<>
			<div className="container">
				<div className="text-center mb-4">
					<h1 className=" display-3"><strong>Powerful, flexible, scalable digital experiences for your business</strong></h1>
				</div>
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col">
						{professions.map((profession, idx) => (
							<div key={idx} onClick={() => setMyProfession(profession.title)}>
								<div className={`p-4 ${myProfession === profession.title && "card shadow border-0"}`}>
									<div className="d-flex mt-2 align-items-start">
										<img className={`rounded p-1 ${myProfession === profession.title ? 'bg-primary' : "bg-dark"}`} src={profession.icon} alt="cart-icon" height='30px' />
										<div className="mx-2">
											<h4>{profession.title.toUpperCase()}</h4>
											<div>
												{myProfession === profession.title && (
													<>
														<p>{profession.description}</p>
														<div className="btn btn-outline-primary px-4">B2C Solutions</div>
													</>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="col d-flex justify-content-center align-items-center h-100">
						{professions.map((profession, idx) => <div key={idx}> {myProfession === profession.title && <ProfessionImage src={profession.image} />} </div>)}
					</div>
				</div>
			</div>
		</>
	);
};

const ProfessionImage = ({ src }) => {
	const props = useSpring({ opacity: 1, from: { opacity: 0 } });
	return (
		<animated.img
			src={src}
			loading="lazy"
			alt=""
			style={{ width: "560px", height: "560px", ...props }}
		/>
	);
};

export default FeatureDisplay;