import React from 'react';
import './Socials.css';
import { faFontAwesomeLogoFull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Socials extends React.Component {
    render() {
        return (
            <div className="links">
                <a href="https://www.linkedin.com/in/samantha-banchik-708960139/"> LinkedIn </a>
                <a href="https://github.com/sam11b"> Github </a>
            </div>
        );
    }
}

export default Socials;