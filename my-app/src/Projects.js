import React, { useState } from 'react';
import Menu from './Menu.js';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import './Projects.css';
import sm from './img/SensoryMap.png';
import token from './img/token-app.png';
import token2 from './img/token-2.png';
import ReactPlayer from "react-player";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Projects extends React.Component {
    componentWillMount() {
        this.createChildren = this.createChildren.bind(this);
        this.images = [sm, token];
        this.titles = ['Sensory Map', 'Token'];
        this.technologies = ['Java, XML, Android App Development, Firebase', 'React, Node.js, Javascript, HTML, CSS, API Design'];
        this.descriptions = [
          'Sensory Map was an Android application aimed at assisting those with sensativities to external stimuli (such as those with autism) in deciding which public places they could go to with minimal discomfort. It allowed the user to see on the map nearby restaurants, and tags associated with each restaurant. These tags included characteristics about lighting, noise, smells, and other disability criteria. The user could also see what comments other people who had been to that restaurant had said previously. This project was demoed for investors in December of 2018.',
          'Token is an Android and iOS application focussing on personalizing the gift card/gift giving industry, particularly in the age of COVID. This applicationn allows users to create and share cards/gifts online. Users can pay both within the app and using Venmo. There are a variety of categories of gifts to choose from. Personally, I developed some of the card implementation as well as the production of the website (http://give.tokengifts.co/). This project was in collaboration with students from Brown, Columbia, and RISD.'
        ];
        this.horizontalImg = [null, token2];
        this.setState({
          children: [],
          activeItemIndex: 0,
        });
    
        setTimeout(() => {
          this.setState({
            children: this.createChildren(2),
          })
        }, 100);
    }

    createChildren = n => range(n).map(i => 
      <div key={i} className='project-card'>
        <img src={this.images[i]} className='project-img' />
        <div>
          <div className='project-title'> {this.titles[i]} </div>
          <div className='technologies'> Skills Used: {this.technologies[i]}</div>
          <div className='desc'> {this.descriptions[i]}</div>
          {i == 0 ? <ReactPlayer width={480} height={272} className='player' url="https://www.youtube.com/watch?list=PLbok9t2URfW0scBCNElaHVW_v0cS2AaGL&time_continue=1&v=2ABlQRzFW94"/> : <img className='long-img' src={this.horizontalImg[i]} />}
        </div>
      </div>
    );

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    render() {
        const {
            activeItemIndex,
            children,
          } = this.state;
        return (
        <div>
            <Menu />
            <div className='work-title'> Projects </div>
            <div class='carousel'>
                <ItemsCarousel

            // Carousel configurations
            numberOfCards={1}
            gutter={12}
            showSlither={true}
            firstAndLastGutter={true}
            freeScrolling={true}

            // Active item configurations
            requestToChangeActive={this.changeActiveItem}
            activeItemIndex={activeItemIndex}
            activePosition={'center'}

            chevronWidth={50}
            rightChevron={<FontAwesomeIcon style={{width: '50px', height: '50px', marginRight: '20px', marginLeft: '5px'}} icon={faArrowRight} />}
            leftChevron={<FontAwesomeIcon style={{width: '50px', height: '50px', marginLeft: '20px', marginRight: '5px'}} icon={faArrowLeft} />}
            outsideChevron={false}
          >
            {children}
          </ItemsCarousel>
          </div>
        </div>
        );
    }
}

export default Projects;