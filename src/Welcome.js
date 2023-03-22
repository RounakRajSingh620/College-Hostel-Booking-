import React from 'react'
import "./Welcome.css"
function Welcome() {
    return (
        <div>
            <div className="container">
                <img className="overlay" src="https://www.srmist.edu.in/wp-content/uploads/2022/04/Building_Hostel-and-Lake_0C6A7841-1-scaled.jpg" alt="" srcset="" />
                <div className="container_text">
                <h1 className='text'>Welcome to SRM Hostels</h1>
                <button className="button-89" >Book Hostel &#10132;</button>
                <button className="button-89" >Contact Us &#10132;</button>
                
                </div>
                

            </div>
        </div>
    )
}

export default Welcome
