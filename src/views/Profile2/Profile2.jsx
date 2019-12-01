import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import  Profile  from './../../components/profile/profile'


export default function Profile2(props) {
    return (
    <div
    className='root'
    style={{"backgroundColor": "gray"}} 
    >
        <Profile/>
    </div>
    )
  }


