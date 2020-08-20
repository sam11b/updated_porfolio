import React, { useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { select } from "d3-selection";
import Menu from './Menu';
import './TechSkills.css';

class TechSkills extends React.Component {

    getCallback(callback) {
        return function (word, event) {
          const isActive = callback !== "onWordMouseOut";
          const element = event.target;
          const text = select(element);
          text
            .transition()
            .attr("background", "white")
            .attr("font-size", isActive ? "300%" : "100%")
            .attr("text-decoration", isActive ? "underline" : "none");
        };
    }

    render() {
        const words = [
            {
              text: 'Python',
              value: 5,
            },
            {
              text: 'Java',
              value: 4,
            },
            {
              text: 'HTML',
              value: 4,
            },
            {
              text: 'CSS',
              value: 4,
            },
            {
                text: 'Javascript',
                value: 4,
              },
            {
              text: 'Angular',
              value: 3,
            },
            {
              text: 'JQuery',
              value: 4,
            },
            {
              text: 'SQL',
              value: 5,
            },
            {
              text: 'C',
              value: 2,
            },
            {
              text: 'Pandas',
              value: 2,
            },
            {
              text: 'React',
              value: 4,
            },
            {
              text: 'Microsoft SQL Report Builder',
              value: 3,
            },
            {
              text: 'Microsoft Visual Basic',
              value: 2,
            },
            {
              text: 'ArcGIS',
              value: 2,
            },
            {
              text: 'Figma',
              value: 5,
            },
            {
              text: 'JIRA',
              value: 3,
            },
            {
              text: 'Trello',
              value: 2,
            },
            {
              text: 'API Design',
              value: 2,
            },
          ]
          const callbacks = {
            //getWordColor: (word) => (word.value > 50 ? "orange" : "purple"),
            getWordTooltip: (word) =>
              `The word "${word.text}" appears ${word.value} times.`,
            // onWordClick: this.getCallback("onWordClick"),
            onWordMouseOut: this.getCallback("onWordMouseOut"),
            onWordMouseOver: this.getCallback("onWordMouseOver")
          };
        return (
            <div>
            <Menu />
            <div className="work-title"> Technical Skills </div>
            <ReactWordcloud words={words} options={{
              rotations: 1,
              rotationAngles: [0, 0],
              colors: ['#eb452b', '#46b59b', '#017e7f', '#052939'],
              fontSizes: [50, 100, 150, 200],
              scale: 'log',
              spiral: 'archimedean',
              padding: 1,
              //spiral: 'rectangular',
            }}
            style={{backgroundColor: '#fcedd8'}}
            />
            </div>
        );
    }
}

export default TechSkills;