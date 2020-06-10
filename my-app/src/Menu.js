import React from 'react';
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Menu.css';

class Menu extends React.Component {
    render() {
        return (
            <div className = 'anchor'>
                <FontAwesomeIcon icon={faAnchor} width='50px' height='50px' />
            </div>
        );
    }
}

export default Menu;