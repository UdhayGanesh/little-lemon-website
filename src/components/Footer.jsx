import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'
import footlg from '../assets/footlg.png'

export default function Footer() {
  return (
        <footer>
                <div id='ftimg'><img src={footlg} alt="footer logo" /></div>
                <div id='doormat'>
                        <h1>Important Links</h1>
                        <p><a href="#header">Navigation</a></p>
                        <p><Link to="/">Home</Link></p>
                        <p><a href="#about">About</a></p>
                        <p><a href="#highlights">Menu</a></p>
                        <p><Link to="/bookings">Reservations</Link></p>
                        <p><Link to="/bookings">Order Online</Link></p>
                        <p><Link to="/">Login</Link></p>
                </div>
                <div id='contact'>
                        <h1>Contact</h1>
                        <p>Address</p>
                        <p>Phone Number</p>
                        <p>Email</p>
                </div>
                <div id='smedia'>
                        <h1>Social Media</h1>
                        <p><a href='instagram.com'>Instagram</a></p>
                        <p><a href='facebook.com'>Facebook</a></p>
                        <p><a href='linkedin.com'>LinkedIn</a></p>
                </div>
        </footer>
  )
}
