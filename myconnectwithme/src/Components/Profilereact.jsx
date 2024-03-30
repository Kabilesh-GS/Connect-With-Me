import React from 'react'
import Profile from '../assets/meee12.jpg'
import Profilestyle from './Profilereact.module.css'

function Profilereact() {
  return (
    <div>
        <img src={Profile} className={`${Profilestyle.Image}`}/>
    </div>
  )
}

export default Profilereact