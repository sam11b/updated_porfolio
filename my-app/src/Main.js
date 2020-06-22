import React from 'react';
import './index.css';
import Intro from './Intro';
import Cartoon from './Cartoon.js';
import Waves from './Waves.js';
import Menu from './Menu.js';
import Socials from './Socials.js'
import * as serviceWorker from './serviceWorker';


class Main extends React.Component {
    render() {
        return (
        <div>
            <Menu />
            <Intro />
            <Waves />
            <Socials />
        </div>
        );
    }
}

export default Main;