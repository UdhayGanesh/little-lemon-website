import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/confirmedBooking.css'

export default function ConfirmedBooking() {
  return (
    <>
      <main id='cbks'>
        <p id='con'>Congratulations!</p>
        <p id='cmsg'>Booking Successful</p>
        <button><Link to="/">Go Back Home</Link></button>
      </main>
    </>
  )
}
