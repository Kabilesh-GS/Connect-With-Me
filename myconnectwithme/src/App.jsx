import { useState } from 'react'
import './App.css'
import Bgimage from '../src/assets/milky-way-2695569.jpg'
import Linkedin from '../src/assets/linkedin.svg'
import GitHub from '../src/assets/github.svg'
import Medium from '../src/assets/Medium.svg'
import Dribbble from '../src/assets/Dribbble.svg'
import Instagram from '../src/assets/instagram.svg'
import Twitter from '../src/assets/twitter.svg'
import Mail from '../src/assets/Mail.svg'
import Profilereact from './Components/Profilereact'
import Button from './Components/Button'

function App() {
    return(
      <div> 
        <img src={Bgimage} className='bgimage'/>
        <div className='Body'>
          <Profilereact /> 

          <p className='font color1'>@KabileshGS</p>
          <p className='font color2'>Frontend Developer  |  Intern @ Spotknack  |  Active Learner </p>

          <div>
            <div className='subcontainer01'>
              <Button btnlogo={Linkedin} btntext='Linked In'/>
              <Button btnlogo={GitHub} btntext='GitHub'/>
            </div>
            <div className='subcontainer01'>
              <Button btnlogo={Medium} btntext='Medium'/>
              <Button btnlogo={Dribbble} btntext='Dribbble'/>
            </div>
          </div>

          <div className='subcontain02'>
            <img className='hover' src={Instagram} />
            <img className='hover' src={Twitter}/>
            <img className='hover' src={Mail} />
          </div>
        </div>

      </div>
    )
}

export default App
