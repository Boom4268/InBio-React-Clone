import React, { useState } from 'react'
import './Reviews.css'
import { data } from '../../data/ReviewData.js'
import Review from '../Review/Review';

export default function () {

    const [index, setIndex] = useState(3);

    const styles = {
        backgroundColor: '#DA1F26',
    }
    const apper = {
        opacity: 1,
    }

    const diserpear = {
        display: 'none'
    }

    function handleClick(e) {
        console.log(e.target)
        setIndex(e.target.id);
    }

    console.log(index);

  return (
    <div className="reviews">
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-ms-6 col-xs-12 reviews-col1">
                    <h3 className="heading">What clients say about this product</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                </div>

                <div className="col-lg-6 col-md-6 col-ms-6 col-xs-12 reviews-col2">
                    <div className="reviews-wrapper">
                        {data.map((review, i) => (
                            <Review review={review} isOpacity={i ===index}/>
                        ))}
                    </div>

                    <div className="btn-wrapper">
                        {
                            data.map((reviewr, i) => (
                            <span
                                onClick={() => setIndex(i)}
                                style={index===i ? styles : {}}
                            ></span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
