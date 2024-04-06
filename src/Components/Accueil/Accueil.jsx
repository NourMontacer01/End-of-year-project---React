import React from 'react';
import Button from './Button'; 
import Left from "../Login/Left";
import Accountsvg from '../../assets/trace.svg';
import './Accueil.css'; 


class Accueil extends React.Component {

    

    render() {
        return (
            <div className="accueil">
                <div className="container">
                    <div className="Onleft">
                        <div className='Account'>
                            <img src={Accountsvg} alt="Account Logged In" />
                            <p className='UserName'>UserName</p>
                        </div>
                        <Left />
                        
       

                    </div>
                    <div className="Onright">
                        <div className="button-container">
                            <Button className="btn1" name="DashBoard" />
                            <Button className="btn1" name="Sales" />
                            <Button className="btn1" name="Stock" />
                            <Button className="btn1" name="Suppliers" />
                            <Button className="btn1" name="Clients" />
                            <Button className="btn1" name="DashBoard" />
                            <Button className="btn1" name="History" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Accueil;
