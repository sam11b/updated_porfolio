import React from 'react';
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Menu.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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
            menuDisplay = <div className="popup">
                <FontAwesomeIcon icon={faTimes} onClick={this.handleClose}/>
                <div className="webpage"> ACADEMIC COURSEWORK <FontAwesomeIcon icon={faGraduationCap} /> </div>
                <div className="webpage"> WORK EXPERIENCE <FontAwesomeIcon icon={faBriefcase} /> </div>
                <div className="webpage"> PROJECTS <FontAwesomeIcon icon={faProjectDiagram} /> </div>
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