import React from "react";
import "./FeaturePage.css";
import illustration from "../../assets/FeaturePage/illustrationMan.svg";
import cloud from "../../assets/FeaturePage/cloud-protection.svg";
import security from "../../assets/FeaturePage/security.svg";
import search from "../../assets/FeaturePage/searching.svg";
import malware from "../../assets/FeaturePage/malware.svg";

const cardsData = [
	{
		image: cloud,
		heading: "Improving Opportunity",
		subText: "makes it possible",
	},
	{
		image: security,
		heading: "Increasing Employability",
		subText: "gain practical skills",
	},
	{
		image: malware,
		heading: "Transforming Education",
		subText: "fostering the development",
	},
	{
		image: search,
		heading: "Investing in Innovation",
		subText: "support creative ideas",
	},
];

const FeaturePage = () => {
	return (
		<>
			<div className="container-fluid" style={{ backgroundColor: "#ff7c2e" }}>
				<div className="row d-flex justify-content-center align-items-center p-4">
					<div className="col-lg-4 col-sm-12">
						<div className="display-3 text-light mb-4">
							<strong>
								Gain Skills When & Where You Want For Your Study or Career...
							</strong>
						</div>
						<div className="btn btn-light text-primary px-4 py-2 rounded opacity-50 hero-button">
							<h4>
								Explore Gigs<span className="arrow"> »</span>
							</h4>
						</div>
					</div>
					<div className="col-lg-8 col-sm-12 d-flex justify-content-center align-items-center">
						<img src={illustration} alt="text" />
					</div>
				</div>
			</div>
			<div className="container-fluid mx-5 ">
				<div
					className="row d-flex justify-content-around"
					style={{ transform: "translateY(-50px)" }}
				>
					{cardsData.map((data, idx) => {
						return (
							<div className=" col-sm-6 col-md-3 p-2 subcard" key={idx}>
								<div className="d-flex flex-column justify-content-center align-items-center bg-white shadow h-100 rounded p-4">
									<img className="icon-svg" src={data.image} alt="" />
									<h2>{data.heading}</h2>
									<h5>{data.subText}</h5>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default FeaturePage;
