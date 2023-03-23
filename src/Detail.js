import React from 'react'
import "./Detail.css"
function Detail() {
    return (
        <div className="Abouts">
            <h2 className="About_Acc"> All About Student Accommodation & Facilities </h2>
            <h3 className="points">We, at SRM Institute of Science and Technology (formerly known as SRM University), provide a wide choice in selecting the type or rooms in a hostel to suit every budget, with an aim of providing a decent stay and the best possible learning environment.</h3>
            <h3 className="points">The quality of life is one of the most important factors considered by the students deciding to stay in the College/University hostels. By quality, it is not just the rooms but also the overall environment of the University campus. Ours is one of the greenest Campuses’ in the country with all the facilities that are expected from global Universities. The stay at our campus provides a wealth of experience by developing qualities such as camaraderie and social responsibility. Our students comprise a cosmopolitan mix from all parts of India as well as many countries across the globe. </h3>
            <h3 className="points">The students staying at SRM hostels are provided with healthy and sumptuous food options at highly subsidized rates. They can choose to have North Indian or South Indian menu in the dining halls that are co-located. For the benefit of our international students, the hostels also offer a multi-cuisine dining facility providing Thai, Chinese and continental food.</h3>
            <h3 className="points">Life on campus helps the students not only to study but also to socialize with the peers. Friendships formed on the campus last a lifetime. SRM provides a comfortable and safe housing to all its students. The students housed in the campus are encouraged to use the gymnasium, playground, and all indoor gaming facilities.</h3>
            <div className="Abouts2">
                <div className="Vision">
                    <h1>Vision</h1>
                    <p className='Vision_pts'>&#8227; make the students feel at home</p>
                    <p className='Vision_pts'>&#8227; provide a friendly, comfortable, well furnished and secure ambiance</p>
                    <p className='Vision_pts'>&#8227; provide a healthy competitive and diverse cultural learning environment</p>
                    <p className='Vision_pts'>&#8227; inculcate discipline and to make students more systematic and strategic</p>
                </div>
                <div className="Vision_img">
                    <img src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/03/Boys_Hostel-768x512.png" alt="" srcset="" />
                </div>

            </div>
            <div className="Abouts3">
                <div className="schedule">
                    <div className="hostel_schedule">
                        <h2>Online Hostel Booking Schedule For<br></br> Academic Year 2023-24</h2>
                        <p>➱For Senior Students - Boys & Girls - KTR Campus (CSH, Law, Management)</p>
                        <p>➱For Senior Students - Boys & Girls - KTR Campus (E&T)</p>
                    </div>
                    <div className="four_image">
                        <img className="pics2" src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/03/SRM_GirlsHostel.jpg" alt="" srcset="" />
                        <img className="pics2" src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/03/Girls_NightingaleHostelVOOL-12-768x540.jpg" alt="" srcset="" />
                        <img className="pics2" src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/03/Hostel1-768x432.png" alt="" srcset="" />
                        <img className="pics2" src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/04/Copy-of-Building_Hostels-and-Sky-and-Sunset_VOOL0390__c-768x1152.jpg" alt="" srcset="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Detail
