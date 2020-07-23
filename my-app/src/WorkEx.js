import React from 'react';
import Menu from './Menu.js';
import Jobs from './JobSummaries';


class WorkEx extends React.Component {
    render() {
        return (
        <div>
            <Menu />
            <Jobs />
        </div>
        );
    }
}

export default WorkEx;