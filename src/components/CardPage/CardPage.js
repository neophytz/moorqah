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

const bottomCardsData = [
	{
		image: customer,
		heading: "Triage",
		info: "nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam",
		backgroundColor: "rgb(26, 109, 204)"
	},
	{
		image: handshake,
		heading: "Triage",
		info: "nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam",
		backgroundColor: "rgb(255, 124, 46)"
	},
	{
		image: magicwand,
		heading: "Triage",
		info: "nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam",
		backgroundColor: "rgb(255, 76, 58)"
	}
];


const CardPage = () => {
	return (
		<>
			<div className="container my-3">
				<div className="row mx-2">
					<div className="col-md-7 d-flex order-md-1 order-2">
						<div className="row">
							{
								cardsData.map((card, idx) => {
									return (
										<div key={idx} className="col-md-4 p-2">
											<div className="shadow rounded px-5 py-3 d-flex flex-column justify-content-center align-items-center text-center">
												<div className="h-100px bg-light" style={{ backgroundImage: `url(${card.image})` }} />
												<div>
													<h4 className="my-4"><strong>{card.heading}</strong></h4>
													<p>{card.info}</p>
												</div>
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
					<div className="col-md-5 d-flex flex-column justify-content-around p-5 order-md-2 order-1">
						<h1 className="text-primary" ><strong> How it helps people</strong> </h1>
						<h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
						<p>Enhance your preliminatry diagnosis and tiage with pediatric content...</p>
						<div className="btn btn-outline-primary p-2 w-50">
							Get in Touch
						</div>
					</div>
				</div>
			</div>
			<div className="row py-4">
				{bottomCardsData.map((data, idx) => {
					return (
						<div className="col-sm-8 col-md-4 px-5" key={idx}>
							<div className="rounded shadow p-4 text-dark" style={{ backgroundColor: data.backgroundColor }}>
								<div className="row p-4 text-light">
									<div className="col-4 d-flex justify-content-center align-items-center">
										<div className="h-100px bg-light" style={{ backgroundImage: `url(${data.image})` }} >
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
						</div>
					)
				})}
			</div>
		</>
	);
};

export default CardPage;