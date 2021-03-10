import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import React from 'react'

export default function dialogue({show,cancel,confirm}) {
   
    
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
        <h2 className="dialog__title">On a scale of 1-10, how likely are you to recommend this provider to a friend? Why?</h2>
        <div className = "feedback">
        <button className = "feedback1">1</button>
        <button className = "feedback2">2</button>
        <button className = "feedback3">3</button>
        <button className = "feedback4">4</button>
        <button className = "feedback5">5</button>
        <button className = "feedback6">6</button>
        <button className = "feedback7">7</button>
        <button className = "feedback8">8</button>
        <button className = "feedback9">9</button>
        <button className = "feedback10">10</button>
        </div>
        <form>
  <label className = "jaja">
      Type your message here (optional):
    <input className = "haha" type="text" name="name" />
  </label>
</form>
      </div>
      <hr />
      <div className="dialog__footer">
        <button className="dialog__cancel" onClick = {cancel} >Cancel</button>
        <button className="dialog__confirm" onClick = {confirm}>Next</button>
      </div>
    </div>
  </div>
</>

    )
}
