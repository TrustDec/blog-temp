import React, { Component } from 'react';
import React_logo from '../static/logo.svg';
import IM_logo from "../static/IM.png";
class Header extends Component{
    render(){
        return(
            <header className="App-header">
                <div className="Header-title">
                    <img src={React_logo} className="App-logo" alt="logo" />
                    <img src={IM_logo} className="IM-logo" alt="IM" />
                </div>
                <h1 className="App-title">Welcome to immutable</h1>
            </header>
        );
    }
}
export default Header;