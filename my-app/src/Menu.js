import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import {faCogs} from "@fortawesome/free-solid-svg-icons";
import {faPlane} from "@fortawesome/free-solid-svg-icons";
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Menu.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link } from "react-router-dom";
  


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menuOpen: false}
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
      }
      handleClick() {
        this.setState(state => ({
            menuOpen: true
          }));
      }

      handleClose() {
        this.setState(state => ({
            menuOpen: false
          }));
      }
    render() {
        let menuDisplay = '';
        if (this.state.menuOpen) {
            menuDisplay = 
                <div className="popup">
                    <FontAwesomeIcon icon={faTimes} onClick={this.handleClose}/>
                        <div className="webpage"> <Link to ="/academics"> ACADEMIC COURSEWORK </Link> <FontAwesomeIcon icon={faGraduationCap} /> </div>
                        <div className="webpage"> <Link to="/work-experience"> WORK EXPERIENCE </Link> <FontAwesomeIcon icon={faBriefcase} /> </div>
                        <div className="webpage"> PROJECTS <FontAwesomeIcon icon={faProjectDiagram} /> </div>
                        <div className="webpage"> TECHNICAL SKILLS <FontAwesomeIcon icon={faCogs} /> </div>
                        <div className="webpage"> TRAVEL <FontAwesomeIcon icon={faPlane} /> </div>
                        <div className="webpage"> CONTACT ME <FontAwesomeIcon icon={faAddressBook} /> </div>
                    <div className="bottom" />
                </div>;
        }
        return (
            <div>
                <div className = 'anchor' onClick={this.handleClick}>
                    <FontAwesomeIcon icon={faAnchor} width='50px' height='50px' />
                </div>
                <CSSTransitionGroup transitionName = "menu" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}> 
                    {menuDisplay} 
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default Menu;