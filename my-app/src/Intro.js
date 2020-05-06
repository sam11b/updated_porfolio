import React from 'react';
import Cartoon from './Cartoon.js';
import './Intro.css';

class Intro extends React.Component {
    render() {
        return (
            <div>
                <div className="name"> Hello. I am Samantha Banchik. </div>
                <Cartoon />
            </div>
        );
    }
}

export default Intro;