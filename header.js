import React from 'react';
import Pulse from './pulse.png'


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id = "header">
                <img src={Pulse} id="logo"></img>
            </div>
        );
    }
}

