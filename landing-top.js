import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Pulse from './pulse.png'
import TopInfo from './top-info'
import MiddleInfo from './middle-info'


export default class LandingTop extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <TopInfo />
                <MiddleInfo />
            </div>
        );
    }
}