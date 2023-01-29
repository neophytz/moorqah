import React from 'react'
import canvas from "./Canvas.png"

const Customer2 = () => {
    return (
        <div className='container'>
            <div className='row d-flex align-items-center'>
                <div className='col-md-6 col-sm-12 mb-4'>
                    <div className="mb-2"><strong>CUSTOMER STORY </strong> </div>
                    <h2 className='display-4 mb-2' style={{ fontWeight: "400" }}><strong> Creating consistency with Canvas.</strong></h2>
                    <p>Virginia Community College System provides flexible pathways in higher education to strengthen individuals and communities. With Canvas as a partner, this rapidly growing system with 23 individual colleges creates consistency in teaching and learning and invests in student success.</p>
                    <ul style={{ fontWeight: 'bolder' }}>
                        <li>A set of Canvas best practices helps maintain LMS-usage consistency across the colleges.</li>
                        <li>Ubiquitous Canvas use allowed VCCS to transition smoothly to online learning during COVID-19.</li>
                    </ul>
                    <div className='btn btn-outline-dark px-4 rounded-pill'>
                        Read the story
                    </div>
                </div>
                <div className='image-fluid col-md-6 col-sm-12'>
                    <img  src={canvas} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Customer2
