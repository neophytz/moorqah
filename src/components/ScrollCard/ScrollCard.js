import React from "react";
import './ScrollCard.css'
import see from "../../assets/ScrollCard/see.png";
import understand from '../../assets/ScrollCard/understand.png'
import enable from '../../assets/ScrollCard/enable.png'

const cardData = [
	{
		image: see,
		title: "Gain Content",
		info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		image: understand,
		title: "Address Blind Spots",
		info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		image: enable,
		title: "Eliminate Universal Risk",
		info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

const ScrollCard = () => {
	return (
		<div className="container-fluid p-0">
			<div className="col-lg-12 col-md-8 col-sm-6 d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"#0a1628", padding:"50px"}}>
				<h1 className="text-center text-light pb-4 pt-2 mt-2">
					<strong>
						Gain Context, Address Blind Spots, <br /> and Eliminate Universal Risk
					</strong>
				</h1>
				<div className="container">
					<div className="col-12">
						{cardData.map((data, idx) => {
							return (
								<div className="col-12 rounded-4 d-flex flex-row justify-content-between align-items-center mb-5 sticky-card">
									<img src={data.image} alt="img" style={{ height: "550px" }} />
									<div
										className="d-flex flex-column text-light px-2"
										style={{ paddingRight: "150px" }}>
										  <h2
											  className="display-5 mb-3"
											  style={{ fontSize: "45px", fontWeight: "500" }}>
											    {data.title}
										  </h2>
										  <p style={{ fontSize: "18px" }}>
											  {data.info}
										  </p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScrollCard;