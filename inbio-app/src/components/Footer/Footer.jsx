import React from 'react'
import './Footer.css'
import imageBorder from '../../images/footer-border.png'

export default function () {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="footer-img">
            {/* <div className='footer-img-border'></div> */}
            <img src={imageBorder} alt="" />
            <div className="content">
              <h3>Brand Creation, Trend Analysis & Style Consulting</h3>
              <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since.
              </p>
              <a href="#" className='btn-contact'>Contact</a>
            </div>
        </div>
    </div>
    </div>
  )
}
