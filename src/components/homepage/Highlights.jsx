import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/highlights.css'
import wsp1 from '../../assets/wsp1.png'
import wsp2 from '../../assets/wsp2.png'
import wsp3 from '../../assets/wsp3.png'

const highlights = [
  {
    imgSrc: wsp1,
    imgAlt: "Week's special Image 1",
    dishName: "Greek salad",
    dishPrice: "10.99",
    dishDes: "Refreshing Mediterranean dish featuring tomatoes, cucumbers, onions, feta cheese, and a dressing of olive oil and herbs."
  },
  {
    imgSrc: wsp2,
    imgAlt: "Week's special Image 2",
    dishName: "Bruschetta",
    dishPrice: "5.99",
    dishDes: " Italian appetizer consisting of toasted bread topped with tomatoes, garlic, basil, and olive oil."
  },
  {
    imgSrc: wsp3,
    imgAlt: "Week's special Image 3",
    dishName: "Lemon cake",
    dishPrice: "5.00",
    dishDes: "Tangy dessert made with a creamy cheesecake filling infused with zesty lemon flavor, served on a buttery graham cracker crust."
  }
];

export default function Highlights() {
  return (
        <section id='highlights'>
          <div id='hintro'>
            <h3>This weeks specials!</h3>
            <button><Link to="/bookings">Online Menu</Link></button>
          </div>

          <div id="wsp_dishes">
            {highlights && highlights.map(highlight => (
              <div key={highlight.dishName} className='dishes'>
                <img src={highlight.imgSrc} alt={highlight.imgAlt} />
                <div className='dish-names'>
                  <p>{highlight.dishName}</p>
                  <span>$ {highlight.dishPrice}</span>
                </div>
                <p>{highlight.dishDes}</p>
                <div className='order'>
                  <a href='#'>Order</a>
                </div>
              </div>
            ))}
          </div>
        </section>
  )
}
