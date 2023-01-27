import React from "react";
import "./CardPage.css";
import medicine from "../../assets/CardPage/medicine.svg";
import microscope from "../../assets/CardPage/microscope.svg";
import protection from "../../assets/CardPage/medicine-bottle.svg";
import customer from "../../assets/CardPage/client-care.svg";
import handshake from "../../assets/CardPage/handshake.svg";
import magicwand from "../../assets/CardPage/magic-wand.svg";

const CardPage = () => {
	return (
		<div className="card-page">
			<div className="top-part">
				<div className="info-cards-group">
					<div className="info-cards">
						<div className="circle"></div>
						<img src={medicine} alt="medicine" className="medicine-img" />
						<h1 className="headline-text">Traige</h1>
						<p className="card-info">
							nunc id cursus metus aliquam eleifend mi in nulla posuere
							sollicitudin aliquam
						</p>
					</div>
					<div className="info-cards">
						<div className="circle"></div>
						<img src={microscope} alt="microscope" className="microscope-img" />
						<h1 className="headline-text">Traige</h1>
						<p className="card-info">
							nunc id cursus metus aliquam eleifend mi in nulla posuere
							sollicitudin aliquam
						</p>
					</div>
					<div className="info-cards">
						<div className="circle"></div>
						<img src={protection} alt="protection" className="protection-img" />
						<h1 className="headline-text">Traige</h1>
						<p className="card-info">
							nunc id cursus metus aliquam eleifend mi in nulla posuere
							sollicitudin aliquam
						</p>
					</div>
				</div>
				<div className="side-content">
					<h1 className="head-line"> How it helps people </h1>
					<h5 className="sub-text">
						{" "}
						Lorem Ipsum is simply dummy text of the printing <br /> and
						typesetting industry.{" "}
					</h5>
					<p className="info-text">
						Enhance your preliminatry diagnosis and tiage with pediatric
						content...
					</p>
					<button className="btn-more">
						<span>Get in Touch</span>
					</button>
				</div>
			</div>
			<div className="bottom-part">
				<div className="bottom-card-left">
					<div className="icon-holder">
						<div className="card-circle"></div>
						<img className="card-icon" src={customer} alt="customer" />
					</div>
					<div className="text-holder">
						<h1 className="main-text"> Learning Skills</h1>
						<p className="sub-content">
							Help you measure your skill and help you solve problem faster{" "}
						</p>
					</div>
				</div>
				<div className="bottom-card-middle">
					<div className="icon-holder">
						<div className="card-circle"></div>
						<img className="card-icon" src={handshake} alt="customer" />
					</div>
					<div className="text-holder">
						<h1 className="main-text"> Learning Skills</h1>
						<p className="sub-content">
							Help you measure your skill and help you solve problem faster{" "}
						</p>
					</div>
				</div>
				<div className="bottom-card-right">
					<div className="icon-holder">
						<div className="card-circle"></div>
						<img className="card-icon" src={magicwand} alt="customer" />
					</div>
					<div className="text-holder">
						<h1 className="main-text"> Learning Skills</h1>
						<p className="sub-content">
							Help you measure your skill and help you solve problem faster{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardPage;