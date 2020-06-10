import React from 'react';
import './Waves.css';
import { ReactComponent as RedWave } from './img/red-orange.svg';
import { ReactComponent as BlueWave } from './img/blue-wave.svg';

class Waves extends React.Component {
    render() {
        return (
            <div className="background-waves">
                <div className="blue-wave" />
                <div className="blue-wave" />
            </div>
        );
    }
}

export default Waves;