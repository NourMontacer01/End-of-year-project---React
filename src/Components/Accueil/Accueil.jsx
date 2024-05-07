import React from 'react';
import Left from "../Login/Left";
import Accountsvg from '../../assets/trace.svg';
import { IoSettings } from "react-icons/io5";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,ButtonDropdown
} from 'reactstrap';
import accueil from './Accueil.module.css'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './Button';

class  Accueil extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
    }
    
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    
    render(){

        return (
            <div className={accueil.accueilaccueil}>
                <div className={accueil.accueilcontainer}>
                    <div className={accueil.accueilOnleft}>
                        <div className={accueil.accueilAccount}>
                            <a href="#account ">
                            <img src={Accountsvg} alt="Account Logged In"  href="#"/>
                            <p className={accueil.accueilUserName}>UserName</p>
                            </a>
                        </div>
                        <Left />
                        <div className={accueil.accueilDropp}>
                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret color="dark">
                                    <IoSettings style={{ fontSize: '25px',justifyContent:'center', color: 'white' }} />
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem className={accueil.accueilaa} href='#1'>Settings</DropdownItem>
                                    <DropdownItem className={accueil.accueilaa} href='#2'>Accounts</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem className={accueil.accueilaa} href='#3'>Log Out</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </div>
                    </div>
                    <div className={accueil.accueilOnright}>
                        <div className={accueil.accueilbuttoncontainer}>
                            <a href='#4'><Buttons name="DashBoard" /></a>
                            <a href='#5'><Buttons name="Sales" /></a>
                            <a href='#6'><Buttons name="Stock" /></a>
                            <a href='#7'><Buttons name="Suppliers" /></a>
                            <a href='#8'><Buttons name="Clients" /></a>
                            <a href='#9'><Buttons name="History" /></a>
                            <a href='#10'><Buttons name="Statistics" /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Accueil;
