import React from 'react'
import Buttonstyle from './Button.module.css'

export default function Button(props) {
  return (
    <div className={Buttonstyle.buttonbg}>
        <div className={`${Buttonstyle.btntxt} ${Buttonstyle.btnlogo}`}>
            <img src={props.btnlogo}/>
        </div>
        <div className={`${Buttonstyle.btntxt} ${Buttonstyle.btncol} ${Buttonstyle.textpad}`}>
            <p>{props.btntext}</p>
        </div>
    </div>
  )
}
