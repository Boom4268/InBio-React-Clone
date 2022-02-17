import React from 'react'
import './Author.css'

export default function Author() {
  return (
    <div className="container-fluid">
        <div className='author row'>
            <div className="col-lg-5 col-md-12">
                <div className='author-img'></div>
            </div>
            <div className="col-lg-7 col-md-12 infor">
                <h2>"If you want to build something big, you have to start with a small step!"</h2>
                <p>
                    It is a long established fact that a reader will be distracted by the readable
                 content of a page when looking at its layout. The point of using Lorem Ipsum 
                 is that it has a more-or-less normal distribution of letters, as opposed 
                 to using 'Content here, content here'. Lorem Ipsum has been the industry's 
                 standard dummy text ever since.
                 </p>
            </div>
        </div>
    </div>
  )
}
