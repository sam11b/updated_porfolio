import React from 'react';
import Fade from 'react-reveal/Fade';
import UberPic from './img/uber-atg.png';
import Emission from './img/emission-app.png';
import Emission2 from './img/emission-2.PNG';
import BeachPoint from './img/beach-point.jpeg';
import AccountBalances from './img/account-balances.png';
import './JobSummaries.css';

class Jobs extends React.Component {
    render() {
        return (
        <div>
            <div className="work-title"> Work Experience </div>
            <Fade left cascade>
                <div className="work-card">
                    <img src={UberPic} width='400px' style={{objectFit: 'cover', position: 'static'}} />
                    <div className="work-summary">
                        <div className="work-place">
                            Uber Advanced Technologies Group
                        </div>
                        <div className="work-position">
                            Software Engineering Intern
                        </div>
                        <div className="work-date">
                            May 2020 - August 2020
                        </div>
                        <div className="work-description">
                            As a Software Engineering Intern at Uber ATG, I was exposed to a wide variety of technologies and teams within Uber as well as exposure to the self-driving industry as a whole. I was on the Self Driving Vehicle Platform Team focussed on making self-driving vehicles both within the organization and outside of the organization accessible via the Uber mobile application. While at Uber, I created a web application that allowed self driving fleet managers to track and locate the fleet of self driving cars and receive valuable live information. I also assisted my Product Manager in running a user demo with a couple fleet managers at the culmination of my internship. The product was moved to production and was being used by managers on test sites to this day. Reports given claimed that the product reduced latency by over 70%.  
                        </div>
                        <div className="work-skills">
                            Skills Learned: HTML, CSS, Javascript/React Native, WebGL, User Research
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade right cascade>
                <div className="work-card">
                    <div className="work-summary">
                        <div className="work-place">
                            UC Berkeley RISELab
                        </div>
                        <div className="work-position">
                            Undergraduate Research Apprentice, Frontend Team Lead
                        </div>
                        <div className="work-date">
                            February 2018 - August 2020
                        </div>
                        <div className="work-description">
                            The UC Berkeley RISE Lab is a lab focussed on low latency mobile applications with live data. My project was called E-mission, which was a mobile application (avaliable for both iOS and Android) that tracked individual travel patterns in an effort to make users more sustainable with their carbon emissions. Users would be given suggestions weekly on how they could travel more sustainably and we would monitor whether or not they actually were influenced enough to change their everyday behavior. This project was advised under K. Shankari, David Culler, and Randy Katz. I assisted in AWS server setup, frontend integration, and developing and running our website which placed people into control or experimental groups. 
                        </div>
                        <div className="work-skills">
                            Skills Learned: HTML, CSS, Angular/Javascript/Node, AWS Server Setup, cron, User Testing, User Demos, Research
                        </div>
                    </div>
                    <img src={Emission} height='459px' style={{marginRight: 10}} />
                    <img src={Emission2} height='459px' />
                </div>
            </Fade>
            <Fade left cascade>
                <div className="work-card">
                    <img src={AccountBalances} width='408px' height='459px' />
                    <div className="work-summary">
                        <div className="work-place">
                            Beach Point Capital Management
                        </div>
                        <div className="work-position">
                            Data Science/Operations Intern
                        </div>
                        <div className="work-date">
                            May 2018 - August 2018
                        </div>
                        <div className="work-description">
                            Interned at a high risk hedgefund in creating and compiling client queries for time sensitive and confidential client information. Information included cash returns, statements, trade export reviews, and others. This internship also gave a great introduction to the financial sector and fintech space, including seminars and an internship investment competition. Seminars covered a variety of topics including covenents, market structure, bankrupcy and many more. 
                        </div>
                        <div className="work-skills">
                            Skills Learned: Python, SQL, Microsoft SQL Report Builder, Microsoft Visual Basic, Financial Analysis
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
        );
    }
}

export default Jobs;