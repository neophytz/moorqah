/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./customer.css"

const Customer = () => {
    return (
        <>

            <div className='container mt-5'>
                <div className='row d-flex align-items-center'>
                    <div className='col-md-6 col-sm-12 mb-4'>
                        <div className="mb-2"><strong>Our community</strong> </div>
                        <h2 className='display-4 mb-2' style={{ fontWeight: "400" }}><strong> Learn from hundreds of <em>millions</em> of Moodle users</strong></h2>
                        <p>Moodle is more than just an LMS platform &#8211; we are a global community of educators, trainers, developers, system administrators, and learners who are dedicated to building the world’s most effective platform for online learning.</p>
                        <p>From sharing educational resources and debating new ideas to fixing bugs and updating documentation, our community is here to support you throughout your online learning journey.</p>

                        <div className='btn btn-outline-dark px-4 rounded-pill'>
                            Meet the Moodle community
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <div className='row '>
                            <div className='col-md-6 col-sm-12 '>
                                <div className="card-innerr a ">
                                    <div >
                                        <img className="imagee" src="https://moodle.com/wp-content/uploads/2022/03/our-community-1.svg" alt="Moodle Community Image" width="980" height="980" />
                                    </div>
                                    <div className="card-content">
                                        <div className="card-copy">
                                            <h3>Moodle Community</h3>
                                            <div className="desc">Access Q&amp;A forums and resources on how to set up and teach with Moodle.</div>
                                        </div>
                                    </div>

                                </div>   </div>
                            <div className='col-md-6 col-sm-12 '>

                                <div className="card-innerr b ">
                                    <img className="imagee" src="https://moodle.com/wp-content/uploads/2022/03/our-community-2.svg" alt="Moodle Community Image" width="980" height="980" />

                                    <div className="card-content">
                                        <div className="card-copy">
                                            <h3>MoodleNet</h3>
                                            <div>Our global network to share and curate open educational resources.</div>
                                        </div></div>
                                </div> </div>
                            <div className='col-md-6 col-sm-12 '>

                                <div className="card-innerr c">
                                    <img className="imagee" src="https://moodle.com/wp-content/uploads/2022/03/our-community-3.svg" alt="Moodle Community Image" width="980" height="980" />

                                    <div className="card-content">
                                        <div className="card-copy">
                                            <h3>Moodle Academy</h3>
                                            <div >Join our learning hub for the global Moodle community.</div>
                                        </div></div>
                                </div> </div>
                            <div className='col-md-6 col-sm-12 '>

                                <div className="card-innerr d">
                                    <img className="imagee" src="https://moodle.com/wp-content/uploads/2022/03/our-community-4.svg" alt="Moodle Community Image" width="980" height="980" />

                                    <div className="card-content">
                                        <div className="card-copy">
                                            <h3>Moodle Plugins</h3>
                                            <div >Find Moodle-endorsed open source plugins for Moodle LMS and Moodle Workplace.</div>
                                        </div></div>
                                </div> </div>



                        </div>
                    </div>
                </div>
            </div>







        </>
    )
}

export default Customer
