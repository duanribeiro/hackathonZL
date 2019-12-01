import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import  Select  from './../../components/select/select'


export default function SelectOption(props) {
    return (
    <div
    className='root'
    style={{"backgroundColor": "gray"}} 
    >
        <Select/>
    </div>
    )
  }


