import React, { Fragment } from 'react';
import './Classes.css';
import CS188 from './img/cs188_bot.png';
import CS160 from './img/cs160-banner.jpg';
import CS170 from './img/cs170-penguin.png';
import CS162 from './img/cs162bean.png';
import CS100 from './img/pandas-python.jpeg';
import COGSCI from './img/pavlov.jpg';
import GEOG from './img/geogc188.jpg';
import SOCIOL from './img/sociol-textbook.jpg';
import BJC from './img/bjc-icon-transparent.png';

class Classes extends React.Component {
    render() {
        return (
        <div>
            <div className="name-centered"> Academic Summary </div>
            <div className="container">
                <div className="card"> 
                    <div className="class-title"> COMPSCI 188: Introduction to Artificial Intelligence </div>
                    <div className="logo" style={{backgroundImage: 'url(' + CS188 + ')'}}></div>
                </div>
                <div className="card"> 
                    <div className="class-title"> COMPSCI 160: User Interface Design and Development </div>
                    <div className="logo" style={{backgroundImage: 'url(' + CS160 + ')'}}></div>
                </div>
                <div className="card"> 
                    <div className="class-title"> COMPSCI 170: Efficient Algorithms and Intractable Problems </div>
                    <div className="logo" style={{backgroundImage: 'url(' + CS170 + ')'}}></div>
                </div>
                <div className="card"> 
                    <div className="class-title"> COMPSCI 162: Operating Systems and System Programming </div>
                    <div className="logo" style={{backgroundImage: 'url(' + CS162 + ')'}}></div>
                </div>
                <div className="card"> 
                    <div className="class-title"> COMPSI C100: Principles & Techniques of Data Science </div>
                    <div className="logo" style={{backgroundImage: 'url(' + CS100 + ')'}}></div>
                </div>
                <div className="card"> 
                    <div className="class-title"> COGSCI 131: Computational Models of Cognition </div>
                    <div className="logo" style={{backgroundImage: 'url(' + COGSCI + ')'}}></div>
                </div>
                <div className="card"> 
                    <div className="class-title"> GEOG C188: Geographic Information Systems </div>
                    <div className="logo" style={{backgroundImage: 'url(' + GEOG + ')'}}></div>
                </div>
                <div className="card"> 
                    <div className="class-title"> SOCIOL 5: Evaluation of Evidence </div>
                    <div className="logo" style={{backgroundImage: 'url(' + SOCIOL + ')'}}></div>
                </div>
                <div className="card"> 
                    <div className="class-title"> COMPSCI 10: The Beauty and Joy of Computing </div>
                    <div className="logo" style={{backgroundImage: 'url(' + BJC + ')'}}></div>
                </div>
                {/* Maybe include other list later, this is getting too long */}
            </div>
        </div>
        );
    }
}

export default Classes;