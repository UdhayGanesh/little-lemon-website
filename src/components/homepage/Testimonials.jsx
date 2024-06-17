import React from 'react'
import '../../styles/testimonials.css'
import tt1 from '../../assets/tt1.jpg'
import tt2 from '../../assets/tt2.jpg'
import tt3 from '../../assets/tt3.jpg'
import tt4 from '../../assets/tt4.jpg'

const testimonials = [
  {
    imgSrc: tt1,
    imgAlt: "Testimonial 1",
    ttComment: "Awesome",
    ttName: "Sarah",
  },
  {
    imgSrc: tt2,
    imgAlt: "Testimonial 2",
    ttComment: "Amazing!",
    ttName: "David",
  },
  {
    imgSrc: tt3,
    imgAlt: "Testimonial 3",
    ttComment: "Very good.",
    ttName: "Bray",
  },
  {
    imgSrc: tt4,
    imgAlt: "Testimonial 4",
    ttComment: "Great!",
    ttName: "Abdul",
  },
];

export default function Testimonials() {
  return (
        <section id='testimonials'>
          <h4>Testimonials</h4>
          <div id='tts'>
            {testimonials && testimonials.map(testimonial => (
              <div key={testimonial.imgSrc}>
                <div>
                  <p className='rating'>*****</p>
                  <img src={testimonial.imgSrc} alt={testimonial.imgAlt} />
                  <p>{testimonial.ttComment}</p>
                </div>
                <p className='name'>{testimonial.ttName}</p>
              </div>
            ))}
          </div>
        </section>
  )
}
