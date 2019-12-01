import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import  Sell  from './../../components/sell/sell'


export default function Seller(props) {
    return (
    <div
    className='root'
    style={{"backgroundColor": "gray"}} 
    >
        <Sell/>
    </div>
    )
  }


