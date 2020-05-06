import React from 'react';
import './Cartoon.css';

class Cartoon extends React.Component {
    render() {
        return (
            <div className="face"> 
                <div className="eye-container">
                    <div className="eyes" />
                    <div className="eyes" />
                </div>
                <div className="nose" />
                <div className="mouth">
                    <div className="tounge" />
                </div>
            </div>
        );
    }
}

export default Cartoon;