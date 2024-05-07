import React from 'react'
import accounts from '../../assets/profile.svg'
import style from './Settingitem.module.css'


const Settingitem = (props) => {
  return (
    <div className={style.settingitem}>
      <div className={style.border}>
        <img className={style.img} src={props.image}alt="" />
        
      </div>
      <p>{props.label}</p>
      
    </div>
  )
}

export default Settingitem
