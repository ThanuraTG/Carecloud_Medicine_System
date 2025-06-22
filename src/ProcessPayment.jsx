import React from 'react'
import "./ProcessPayment.css"
import VerticalMenu from './Components/verticalmenu'
import Header from './Components/Header'
import Basic from './billpage/Basic'


export default function ProcessPayment() {
  return (
    <div className='payment-list'>
        <VerticalMenu/>
        <Header/>
      <div className='box-payment '>
        <Basic />
       </div>
    </div>
      
  )
}
