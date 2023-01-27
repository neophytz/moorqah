import React from "react";
import "./LandingPage.css";
import hand from "../../assets/LandingPage/palm.svg";
import background from "../../assets/LandingPage/Background.jpg";
import ring from "../../assets/LandingPage/ring.png";
import person from "../../assets/LandingPage/person.jpg";
import add from "../../assets/LandingPage/add-new.svg";
import mail from "../../assets/LandingPage/mail.svg";
import video from "../../assets/LandingPage/video-call.svg";
import stars from "../../assets/LandingPage/star.png";

const LandingPage = () => {
	return (
		<>
			<div
				className="landing-page"
				style={{
					backgroundImage: `url(${background})`,
					backgroundSize: `cover`,
					backgroundRepeat: `no-repeat`,
				}}
			>
				<div className="hero-section">
					<h1 className="hero-text">
						Become Fluent in <br /> Any Language With <br /> Anya Wareeson
					</h1>
					<p className="aux-text">
						Choose from over 10000 teachers and excel your favourite language.
					</p>
					<div className="btn-group">
						<button className="btn"> Get Started</button>
						<button className="btn">Learn More</button>
					</div>
					<button className="scroll-btn">
						<p>Scroll to Bottom</p>
						<svg
							stroke-width="4"
							stroke="currentColor"
							viewBox="0 0 24 24"
							fill="none"
							class="h-6  w-6"
							xmlns="http://www.w3.org/2000/svg"
							transform="rotate(90)"
						>
							<path
								d="M14 5l7 7m0 0l-7 7m7-7H3"
								stroke-linejoin="round"
								stroke-linecap="round"
							></path>
						</svg>
					</button>
				</div>
				<div className="graphic-div">
					<img src={ring} className="ring" alt="ring" />
					<div
						className="teacher-card"
						style={{
							backgroundImage: `url(${person})`,
							backgroundSize: `cover`,
							backgroundPositionX: `-100px`,
						}}
					>
						<div class="container">
							<div class="box">
								<span class="teacher-name">John Doe</span>
								<p className="category">English Teacher</p>
							</div>
						</div>
					</div>
					<div className="interact-btn">
						<button className="video-btn">
							<img src={video} alt="video" className="video" />
						</button>
						<button className="add-btn">
							<img src={add} alt="video" className="add" />
						</button>
						<button className="mail-btn">
							<img src={mail} alt="video" className="mail" />
						</button>
					</div>
				</div>
			</div>
			<div className="footer">
				<div className="left-group">
					<div className="icn-group">
						<img className="hand-icon" src={hand} alt="hand" />
					</div>
					<p className="aux-text-footer">10000+ teachers </p>
					<p className="aux-text-break"> for any language you love</p>
				</div>
				<div className="right-group">
					<div className="card-top">
						<div
							className="teacher-cards-top"
							style={{
								backgroundImage: `url(${person})`,
								backgroundSize: `cover`,
								backgroundPositionX: `-35px`,
							}}
						></div>
						<div
							className="teacher-cards-top"
							style={{
								backgroundImage: `url(${person})`,
								backgroundSize: `cover`,
								backgroundPositionX: `-35px`,
							}}
						></div>
						<div
							className="teacher-cards-top"
							style={{
								backgroundImage: `url(${person})`,
								backgroundSize: `cover`,
								backgroundPositionX: `-35px`,
							}}
						></div>
					</div>
					<div className="card-bottom">
						<div className="teacher-cards-bottom">
							<div className="teacher-card-content">
								<h3 className="expertise">English</h3>
								<img className="rating" src={stars} alt="rating" />
							</div>
						</div>
						<div className="teacher-cards-bottom">
							<div className="teacher-card-content">
								<h3 className="expertise">Spanish</h3>
								<img className="rating" src={stars} alt="rating" />
							</div>
						</div>
						<div className="teacher-cards-bottom">
							<div className="teacher-card-content">
								<h3 className="expertise">German</h3>
								<img className="rating" src={stars} alt="rating" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LandingPage;
