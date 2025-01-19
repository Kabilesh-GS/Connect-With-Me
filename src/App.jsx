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
          <p className='font color2 size'>Frontend Developer  |  Intern @ Spotknack  |  Active Learner </p>

          <div>
            <div className='subcontainer01'>
              <Button href='https://www.linkedin.com/in/kabileshgs/' btnlogo={Linkedin} btntext='Linked In'/>
              <Button href='https://github.com/Kabilesh-GS' btnlogo={GitHub} btntext='GitHub'/>
            </div>
            <div className='subcontainer01'>
              <Button href='https://medium.com/@kabileshgs' btnlogo={Medium} btntext='Medium'/>
              <Button href='https://dribbble.com/kabi07' btnlogo={Dribbble} btntext='Dribbble'/>
            </div>
          </div>

          <div className='subcontain02'>
            <a href='https://www.instagram.com/kabil.1507/' target='_blank'><img className='hover' src={Instagram} /></a>
            <a href='https://twitter.com/Kabi0704' target='_blank'><img className='hover' src={Twitter}/></a>
            <a href='mailto:kabileshgs@gmail.com' target='_blank'><img className='hover' src={Mail} /></a>
          </div>
        </div>

      </div>
    )
}

export default App
