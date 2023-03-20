import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
function header() {
    return (
        <div className='header'>
            <div className="header_left">
                <img src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/01/srm-logo-white.svg.gzip" alt="" />
            </div>
            <div className="header_search">
                <SearchIcon />
                <input placeholder='Search' type="text" />
            </div>
            <div className="header_right">
            <a className='items' href="https://www.srmist.edu.in/students/">Students</a>
            <a className='items' href="https://www.srmist.edu.in/faculty-gateway/">Faculty & Staff</a>
            <a className='items' href="https://www.srmist.edu.in/parents/">Parents</a>
            <a className='items' href="https://www.srmist.edu.in/visitors/">Visitors</a>
            <a className='items' href="https://alumni.srmist.edu.in/">Alumni</a>
    
        
            </div>

        </div>
    )
}

export default header
