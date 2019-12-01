import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import  Chat  from './../../components/chatbot/chatbot'


export default function SelectOption(props) {
    return (
    <div
    className='root'
    style={{"backgroundColor": "gray"}} 
    >
        <Chat/>
    </div>
    )
  }


