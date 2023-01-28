import React from "react";
import hand from "../../assets/LandingPage/palm.svg";
import background from "../../assets/LandingPage/Background.jpg";
import ring from "../../assets/LandingPage/ring.png";
import person from "../../assets/LandingPage/person.jpg";
import add from "../../assets/LandingPage/add-new.svg";
import mail from "../../assets/LandingPage/mail.svg";
import video from "../../assets/LandingPage/video-call.svg";
import stars from "../../assets/LandingPage/star.png";

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
                        <div className="mt-5"><p> Scroll to Bottom </p></div>
					</div>
                    </div>
					<div className='col-lg-6 col-sm-12 d-flex justify-content-center align-items-center'>
                        <img src={ring} alt="text" style={{ height:'800px', width:'800px'}}/>
                    </div>
				</div>
			</div>

            <div className="container-fluid mx-5 ml-5" 
            style={{
                height:'220px',
                background: 'linear-gradient(to bottom, #ff3695, #ff60ac)'
            }}>
                <div className="row d-flex justify-content-center align-itmes-center vw-100 ">
                    <div className="col-lg-4 col-sm-12 d-flex justify-content-center align-items-center">
                        <div>hi</div>
                    </div>
                    <div className="col-lg-8 col-sm-12 d-flex justify-content-center align-items-center"> 
                        <div>hi</div>
                        <div>hi</div>
                        <div>hi</div>
                    </div>
                </div>
            </div>
		</section>
	);
};

export default LandingPageBootstrap;
