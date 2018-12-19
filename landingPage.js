import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingTop from './landing-top'
import MiddleContent from './middle-content'
import BottomContent from './bottom-content'


export default class Landing extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <LandingTop />
                <MiddleContent />
                <BottomContent />
            </div>
        );
    }
}
