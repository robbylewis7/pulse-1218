import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Pulse from './pulseLogo.png'
import './top-info.css'
import { Link } from 'react-router-dom'



export default class TopInfo extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id = "topInfo">

                <div id = "logo">
                    <img src={Pulse} id = "frontPageLogo"></img>
                    <Link to={'/'}>
                        <div className = "frontPageName">Pulse</div>
                    </Link>
                </div>


                 <Link to={'/signup'}>
                    <button className="loginButton">Sign Up</button>
                </Link>

            </div>
        );
    }
}