import React from 'react'
import ItemProject from '../ItemProject/ItemProject'
import './Project.css'

import Image1 from '../../images/project-img-1.jpg'
import Image2 from '../../images/project-img-2.jpg'
import Image3 from '../../images/project-img-3.jpg'
import Image4 from '../../images/project-img-4.jpg'
import Image5 from '../../images/project-img-5.jpg'
import Image6 from '../../images/project-img-6.jpg'



export default function Project() {
  return (
    <div className='project'>
        <div className="container-fuild">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-ms-12 h-project">
                    <h2>Our Projects</h2>
                    <p>It is a long established fact that a reader will
                        be distracted by the readable content of a page
                        when looking at its layout. The point of using
                        Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using
                        'Content here, content here'. Lorem Ipsum has
                        been the industry's standard dummy text ever since.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6 col-xs-12 item">
                    <ItemProject image={ Image2 } infor={{time: 'March, 17, 2000', title: "Hand Drawn Patterned Circle", type: "Bussiness"}}/>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12 item">
                    <ItemProject image={ Image3 } infor={{time: 'March, 17, 2000', title: "Hand Drawn Patterned Circle", type: "Bussiness"}}/>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12 item">
                    <ItemProject image={ Image1 } infor={{time: 'March, 17, 2000', title: "Mobile Application Templates", type: "Bussiness"}}/>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12 item">
                    <ItemProject image={ Image4 } infor={{time: 'March, 17, 2000', title: "Web Design Agency Landing Page", type: "Bussiness"}}/>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12 item">
                    <ItemProject image={ Image5 } infor={{time: 'March, 17, 2000', title: "Restaurant Logo Collection", type: "Photography"}}/>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12 item">
                    <ItemProject image={ Image6 } infor={{time: 'March, 17, 2000', title: "Online Shopping Landing Page", type: "Food"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}
