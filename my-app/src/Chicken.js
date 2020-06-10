import React from 'react';
import './Chicken.css';

class Chicken extends React.Component {
    render() {
        return (
            <div className="chicken">
                <div className="body-long" />
                <div className="body-fat" />
                <div className="tail" />
                <div className="feet">
                    <div className="foot" />
                    <div className="foot" />
                </div>
                <div className="legs">
                    <div className="leg" />
                    <div className="leg" />
                </div>
                <div className="toes" />
            </div>
        );
    }
}

export default Chicken;