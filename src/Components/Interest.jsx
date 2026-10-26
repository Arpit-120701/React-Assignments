import React from 'react'

function Interest() {
    const principal = 10000;
    const time =  2;
    const rate = 5;
    const interest= principal * rate * time/ 100;
  return (
    <div>
    <h1><b>Simple Interests Details</b></h1>
    <hr/>
    <h2><b>Principal Amount:</b>10000</h2>
    <h2><b>Rate of Interest :</b> 5%</h2>
    <h2><b>Time Interval :</b>2 years</h2>
    <h2><b>Rate of Interests :</b>{interest}</h2>
    </div>
  )
}

export default Interest
