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
								<strong> Become Fluent in Any Language With Anya Wareeson </strong>
							</div>
							<div className="btn btn-light text-light px-4 py-2 rounded-5 button-grp">
								<h5>Get Started</h5>
							</div>
							<div className="btn btn-light text-light mx-2 px-4 py-2 rounded-5 button-grp">
								<h5>Learn More</h5>
							</div>
						</div>
					</div>
					<div className="row-lg-6 row-sm-12 d-flex flex-column justify-content-center align-items-center h-100px" style={{ background:`url(${ring})`, height: "750px", width: "750px", backgroundSize:'cover'}}>
						{/* <img src={ring} alt="text" style={{ height: "800px", width: "800px" }} /> */}
						<div style={{transform:'translateY(-135px)'}}>
							<div className="rounded-5" style={{
								backgroundImage: `url(${person})`,
								width: '300px',
								height: '375px',
								backgroundPosition:'center',
								backgroundSize:'cover',
							}}>
								<div className="d-flex flex-column justify-content-center align-items-center box">
									<strong className="display-6 text-light">John Doe</strong>
									<p className="text-light font-weight-500">English Teacher</p>
								</div>
							</div>
						</div>
						<div className="d-flex flex-row justify-content-around" style={{
							zIndex:'2',
							transform:"translateY(-60px)",
							width:"350px"
							}}>
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
				className="container-fluid rounded-5 mx-5"
				style={{
					height: "240px",
					background: "linear-gradient(to bottom, #ff3695, #ff60ac)",
					transform: "translateY(-50px)",
					margin: "0px"
				}}
			>
				<div className="row d-flex justify-content-around align-itmes-center vw-100 ">
					<div className="col-lg-2 col-sm-12 d-flex flex-column justify-content-center align-items-start" style={{transform:"translateY(-70px)"}}>
						<div
							className="bg-light h-100px"
							style={{
								backgroundImage: `url(${hand})`,
								height: "100px",
								width: "100px",
								transform: "translateY(-50px)"
							}}
						></div>
						<div className="row-2 text-light">
							<h2>
								<strong> 10000+ teachers </strong>
							</h2>
							<p> for any language you love </p>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12 d-flex justify-content-around align-items-center" style={{ margin:"0px 60px 0px 50px" , transform:"translateY(-65px)"}}>
						{cardData.map((data, idx) => {
							return (
								<div className="d-flex flex-column">
									<div
										style={{
											backgroundImage: `url(${data.mentor})`,
											backgroundSize: "cover",
											zIndex:"1"
											}}
										className="col-lg-12 bg-light pfp"
									></div>
									<div
										className="col-lg-12 rounded-5 shadow text-light" style={{transform:"translateY(-100px) translateX(20px)",	background: "rgb(254, 0, 122)" }}
										key={idx}>
										<div className="col-lg-12 d-flex flex-column justify-content-end align-items-center text-light "
											style={{
												width:"200px",
												height:"215px",
												zIndex:"2"
											}}>
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
