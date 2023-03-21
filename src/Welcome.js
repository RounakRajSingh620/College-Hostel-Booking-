import React from 'react'
import "./Welcome.css"
function Welcome() {
    return (
        <div>
            <div className="container">
                <img className='overlay' src="https://www.srmist.edu.in/wp-content/uploads/2022/04/Building_Hostel-and-Lake_0C6A7841-1-scaled.jpg" alt="" srcset="" />
                <div className="container_text">
                <h1>Welcome to SRM HOSTELS</h1>
                <button className='btn'>Book Hostel &#8594;</button>
                <button className='btn'>Contact Us &#8594;</button>
                </div>
                

            </div>
        </div>
    )
}

export default Welcome
