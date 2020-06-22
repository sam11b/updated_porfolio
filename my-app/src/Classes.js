import React, { Fragment } from 'react';
import './Classes.css';
import CS188 from './img/cs188_bot.png';
import CS160 from './img/cs160-banner.jpg';
import CS170 from './img/cs170-penguin.png';
import CS162 from './img/cs162bean.png';
import CS100 from './img/pandas-python.jpeg';
import COGSCI from './img/pavlov.jpg';
import GEOG from './img/geogc188.jpg';

class Classes extends React.Component {
    render() {
        return (
        <div className="container">
            <div className="card"> 
                COMPSCI 188: Introduction to Artificial Intelligence 
                <div className="logo" style={{backgroundImage: 'url(' + CS188 + ')'}}></div>
            </div>
            <div className="card"> 
                COMPSCI 160: User Interface Design and Development
                <div className="logo" style={{backgroundImage: 'url(' + CS160 + ')'}}></div>
            </div>
            <div className="card"> 
                COMPSCI 170: Efficient Algorithms and Intractable Problems
                <div className="logo" style={{backgroundImage: 'url(' + CS170 + ')'}}></div>
            </div>
            <div className="card"> 
                COMPSCI 162: Operating Systems and System Programming
                <div className="logo" style={{backgroundImage: 'url(' + CS162 + ')'}}></div>
            </div>
            <div className="card"> 
                COMPSI C100: Principles & Techniques of Data Science
                <div className="logo" style={{backgroundImage: 'url(' + CS100 + ')'}}></div>
            </div>
            <div className="card"> 
                COGSCI 131: Computational Models of Cognition 
                <div className="logo" style={{backgroundImage: 'url(' + COGSCI + ')'}}></div>
            </div>
            <div className="card"> 
                GEOG C188: Geographic Information Systems 
                <div className="logo" style={{backgroundImage: 'url(' + GEOG + ')'}}></div>
            </div>
            {/* Maybe include other list later, this is getting too long */}
        </div>
        );
    }
}

export default Classes;