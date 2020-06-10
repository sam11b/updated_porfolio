import React from 'react';
import './Intro.css';
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Intro extends React.Component {
    render() {
        return (
            <div>
                <div className="name"> Hello. I am Samantha Banchik. </div>
                <div className="about">
                    <div className="title"> 
                        <div> Computer Science and Media Studies New Graduate </div>
                        <div className="fish">
                            <FontAwesomeIcon icon={faFish} color="#052939" />
                            <FontAwesomeIcon icon={faFish} color="#017e7f" />
                            <FontAwesomeIcon icon={faFish} color="#46b59b" />
                        </div>
                    </div>
                    <div className="description"> Recently graduated from the <a href=""> University of California, Berkeley </a>. Work experience at <a href="">Uber ATG</a> and <a href="">UC Berkeley RISELab</a>. Passionate about women in tech, software engineering, and web development. </div>
                </div>
            </div>
        );
    }
}

export default Intro;