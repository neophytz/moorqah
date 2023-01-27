import React from "react";
import "./CardPage.css";
import medicine from "../../assets/CardPage/medicine.svg";
import microscope from "../../assets/CardPage/microscope.svg";
import protection from "../../assets/CardPage/medicine-bottle.svg";
import customer from "../../assets/CardPage/client-care.svg";
import handshake from "../../assets/CardPage/handshake.svg";
import magicwand from "../../assets/CardPage/magic-wand.svg";

const cardsData = [
	{
		image: medicine,
		heading: "Triage",
		info: "nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam"
	},
	{
		image: microscope,
		heading: "Triage",
		info: "nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam"
	},
	{
		image: protection,
		heading: "Triage",
		info: "nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam"
	}
];


const CardPage = () => {
	return (
		<>
		{/* <div className="card-page">
			<div className="top-part">
				<div className="info-cards-group">
						{cardsData.map((data, idx) => {
						return (
						<div className="info-cards" key={idx}>
							<div className="circle"></div>
							<img src={data.image} alt="medicine" className="medicine-img" />
							<h1 className="headline-text">{data.heading}</h1>
							<p className="card-info">
								{data.info}
							</p>
						</div>
						)
					})}
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
			</div> */}


{/* 

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
				</div> */}
			{/* </div> */}
		{/* </div> */}
		<div className="row">
				{cardsData.map((data, idx) => {
					return(
						<div className="col-sm-12 col-md-4 rounded shadow bg-primary text-dark" key={idx}>
							<div className="row p-4 text-light">
								<div className="col-4 d-flex justify-content-center align-items-center">
									<div style={{backgroundImage:`url(${data.image})`, borderRadius:"50%", height:'100px', width:'100px', backgroundRepeat:"no-repeat", backgroundSize:"contain"}} className="bg-light">
									</div>
								</div>
								<div className="col-8">
									<h1 className=""> {data.heading}</h1>
									<p className="">
										{data.info}
									</p>
								</div>
							</div>
						</div>
					)
				})}
		</div>
		</>
	);
};

export default CardPage;