import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import React from 'react'

export default function dialogue({show, confirm}) {
    if(!show) {
        return <>  </>
    }
    return (
<>
  <div className="mt-10 text-center">
    <button className="btn">Delete Task</button>
    <button className="btn">Delete User</button>
  </div>
  <div className="overlay"> 
    <div className="dialog">
      <div className="dialog__content">
        <h2 className="dialog__title">How would you rate the following services?</h2>
        <p className="dialog__description">...</p>
 
 <div className="cleaniness"> 
 
 <ReactStars
    count={5}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="red"
  />
  </div>
  
  <div className="cleaniness" >

  <ReactStars
  
    count={5}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="red"
  />
  </div>
  <div className="cleaniness">
  <ReactStars
    count={5}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="red"
  />
  </div>
  <div className="cleaniness">
  <ReactStars
    count={5}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="red"
  />
  </div>
  <div className="cleaniness">
  <ReactStars
    count={5}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="red"
  />
  </div>
      </div>
      <hr />
      <div className="dialog__footer">
        <button className="dialog__cancel">Cancel</button>
        <button className="dialog__confirm" onClick = {confirm}>Next</button>
      </div>
    </div>
  </div>
</>

    )
}
