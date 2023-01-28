import React from "react";
import "../CardPage/CardPage.css";
import '../LandingPage/LandingPageBootstrap.css'
import hand from "../../assets/LandingPage/palm.svg";
import background from "../../assets/LandingPage/Background.jpg";
import ring from "../../assets/LandingPage/ring.png";
import person from "../../assets/LandingPage/person.jpg";
import add from "../../assets/LandingPage/add-new.svg";
import mail from "../../assets/LandingPage/mail.svg";
import video from "../../assets/LandingPage/video-call.svg";
import stars from "../../assets/LandingPage/star.png";

const cardData = [
	{
		subject: "English",
		rating: stars,
		mentor: person,
	},
	{
		subject: "Spanish",
		rating: stars,
		mentor: person,
	},
	{
		subject: "French",
		rating: stars,
		mentor: person,
	},
];
const LandingPageBootstrap = () => {
	return (
		<section>
			<div
				className="container-fluid"
				style={{
					backgroundImage: `url(${background})`,
					backgroundSize: `cover`,
					backgroundRepeat: `no-repeat`,
					height: `100vh`,
				}}>
				<div className="row d-flex justify-content-center align-items-center p-5 vh-100 ">
					<div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
						<div>
							<div className="display-2 text-dark mb-4 font-weight-500">
								<strong>
									Become Fluent in Any Language With Anya Wareeson
								</strong>
							</div>
							<div className="btn btn-light text-light px-4 py-2 rounded ">
								<h4>Get Started</h4>
							</div>
							<div className="btn btn-light text-light mx-2 px-4 py-2 rounded ">
								<h4>Learn More</h4>
							</div>
						</div>
					</div>
					<div className="row-lg-6 row-sm-12 d-flex flex-column justify-content-center align-items-center h-100px" style={{ background:`url(${ring})`, height: "750px", width: "750px", backgroundSize:'cover'}}>
						{/* <img src={ring} alt="text" style={{ height: "800px", width: "800px" }} /> */}
						<div>
							<div className="rounded-5" style={{
								backgroundImage: `url(${person})`,
								width: '300px',
								height: '375px',
								backgroundPosition:'center',
								backgroundSize:'cover',
								transform:'translateY(-190px)'
							}}>
								<div className="d-flex flex-column justify-content-center align-items-center box">
									<strong className="display-6 text-light">John Doe</strong>
									<p className="text-light font-weight-500">English Teacher</p>
								</div>
							</div>
						</div>
						<div className="" style={{zIndex:'2'}}>
							<button className="video-btn">
								<img src={video} alt="video" className="icn" />
							</button>
							<button className="add-btn">
								<img src={add} alt="video" className="icn" />
							</button>
							<button className="mail-btn">
								<img src={mail} alt="video" className="icn" />
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				className="container-fluid"
				style={{
					height: "220px",
					background: "linear-gradient(to bottom, #ff3695, #ff60ac)",
				}}
			>
				<div className="row d-flex justify-content-center align-itmes-center vw-100 ">
					<div className="col-lg-2 col-sm-12 d-flex flex-column justify-content-center align-items-start">
						<div
							className="bg-light h-100px"
							style={{
								backgroundImage: `url(${hand})`,
								height: "70px",
								width: "70px",
							}}
						></div>
						<div className="row-2 text-light">
							<h2>
								<strong> 10000+ teachers </strong>
							</h2>
							<p> for any language you love </p>
						</div>
					</div>
					<div className="col-lg-8 col-sm-12 d-flex justify-content-between align-items-center">
						{cardData.map((data, idx) => {
							return (
								<div
									className="col-lg-2 rounded shadow bg-primary text-light"
									key={idx}>
									<div className="d-flex flex-column justify-content-center align-items-center p-4 text-light mx-4">
										<div>
											<div
												style={{
													backgroundImage: `url(${data.mentor})`,
													backgroundSize: "cover",
												}}
												className="bg-light h-100px"
											></div>
										</div>
										<div>
											<h3> {data.subject}</h3>
											<div
												style={{
													backgroundImage: `url(${data.rating})`,
													height: "50px",
													width: "auto",
													backgroundSize: "contain",
													backgroundRepeat: "no-repeat",
													backgroundPosition: "center",
												}}
											></div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default LandingPageBootstrap;
