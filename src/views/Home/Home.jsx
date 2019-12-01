import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import  Intro  from './../../components/intro/intro'


export default function Home(props) {
    return (
    <div
    className='root'
    style={{"backgroundColor": "gray"}} 
    >
        <Intro/>
    </div>
    )
  }


