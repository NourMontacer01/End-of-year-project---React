
import left from './Left.module.css'
import AppLogo from '../../assets/fruit-shop.svg'
import './LoginPage.module.css'







 function Left(){





    return (
        <div>
              <div className={left.Onleft}>
                <div className={left.Logo}>    
                    <img src={AppLogo} alt="logo" />
                    <h1>RetailPro</h1>
                    <p>Where Every Transaction Sparks Joy!</p>
                </div>
            </div>
         
        </div>
    )
}
export default Left ;
