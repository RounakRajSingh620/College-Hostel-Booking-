import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <footer className="footer" >
      <p >Copyrights All Rights Reserved</p>
      <span className='social_items'>
        <a className='items' href="https://www.facebook.com/SRMUniversityOfficial" ><img src="https://cdn-icons-png.flaticon.com/512/2504/2504903.png" alt="facebook" /></a>
        <a className='items' href="https://twitter.com/SRM_Univ"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670127.png" alt="twitter" /></a>
        <a className='items' href="https://www.instagram.com/SRMUniversityOfficial/"><img src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png" alt="instagram" /></a>
        <a className='items' href="https://www.linkedin.com/company/srm-ist-chennai"><img src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png" alt="linkedin" /></a>
      </span>
    </footer>
  )
}

export default Footer
