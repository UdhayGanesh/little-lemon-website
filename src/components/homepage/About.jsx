import React from 'react'
import '../../styles/about.css'
import about_pics from '../../assets/about-pic.png'

export default function About() {
  return (
        <section id='about'>
          <div id="about_text">
            <h1>Little Lemon</h1>
            <p id='a-chicago'>Chicago</p>
            <p id='about-intro'>Little lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>
          <div id="about_pics">
            <img src={about_pics} alt="About Picture" />
          </div>
        </section>
  )
}
