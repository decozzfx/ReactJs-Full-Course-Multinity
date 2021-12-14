import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1>Halaman About</h1>
            <p>untuk tentang team kami lainnya bisa klik link dibawah ini</p>
            <ul>
                <li><Link to='/about/team'>About Team</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default About
