import React from 'react'
import style from './Settings.module.css'
import Settingitem from './Settingitem'
import Personnel from '../../assets/open-an-account-svgrepo-com.svg'
import calendrier from '../../assets/check-in-svgrepo-com.svg'
import savings from '../../assets/deposit-svgrepo-com.svg'
import accounts from '../../assets/password-management-svgrepo-com.svg'
import stock from '../../assets/stock-movement-svgrepo-com.svg'

const Settings = () => {
  return (
    <div style={{marginLeft:'150px'}}>
        <h1 style={{textAlign:'center ' , marginTop:'50px' }}>Settings</h1>
        <div className={style.containerr}>
            <button>
            <Settingitem image={accounts} label='Accounts'/>
            </button>
            <button>
            <Settingitem image={Personnel} label='Staff'/>
            </button>
            <button>
            <Settingitem image={savings} label='Income'/>
            </button>
            <button>
            <Settingitem image={stock} label='Stock'/>
            </button>
            <button>
            <Settingitem image={calendrier} label='Calendar'/>
            </button>
            
      
            
        </div>
    </div>
  )
}

export default Settings
