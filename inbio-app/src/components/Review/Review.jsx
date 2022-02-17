import React from 'react'
import './Review.css'

export default function Review({review, isOpacity}) {
  return (
      <div className='infor-text'
        style={isOpacity ? {opacity: 1} : {opacity: 0}}
      >
          <div className="text">
              <i className='bx bxs-quote-left'></i>
              <span>{review.text}</span>
              <i className='bx bxs-quote-right'></i>
          </div>
          <div className='infor-reviewer'>
              <div className='img-reviewer'>
                  <img src={review.image} alt="user-img" />
              </div>
              <div className='name-major'>
                  <span className='name'>{review.name}</span>
                  <span className='major'>{review.type}</span>
              </div>
          </div>
      </div>
  )
}
