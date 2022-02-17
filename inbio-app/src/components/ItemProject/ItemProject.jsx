import React from 'react'
import './ItemProject.css'

export default function ItemProject({ image, infor} ) {
 
  return (
    <div className="wrapper-item">
      <div 
          className="item-project"
          style={{backgroundImage: `url(${image})`}}
      >
      </div>
      <div className="infor">
        <span className='time'>
          <i className='bx bx-time-five'></i>
          <span>{infor.time}</span>
        </span>
        <div className='heading'>
          <a href="#">{infor.title}</a>
        </div>
        <span className='text-infor'>
        {infor.type}
        </span>
      </div>
    </div>
  )
}
