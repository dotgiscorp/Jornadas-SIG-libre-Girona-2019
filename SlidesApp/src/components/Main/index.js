 
import React from 'react';
import Button from '../Button';
import Indicator from '../Indicator';
import Background from '../Background';
import slide from '../../slides/slides-containers';
import './style.scss';

class Main extends React.Component {

    state = {
        slides: null,
        currentSlide: 0,
        indicators: null
    }

    componentWillMount() {
        this.setState({
            slides: slide[0]
        });
    }

    prev = () => {
        const { currentSlide } = this.state;

        if(currentSlide === 0){
          this.setState({
            slides: slide[slide.length - 1],
            currentSlide: slide.length - 1
          });
          return;
        }

        this.setState({
            slides: slide[currentSlide - 1],
            currentSlide: currentSlide - 1
        });
    }

    next = () => {
        const { currentSlide } = this.state;

        if(currentSlide === slide.length - 1){
          this.setState({
            slides: slide[0],
            currentSlide: 0
          });
          return;
        }

        this.setState({
            slides: slide[currentSlide + 1],
            currentSlide: currentSlide + 1
        });
    }

    manageResponse = response => {
        this.setState({
            slides: slide[response],
            currentSlide: response
        });
    }

    render() {
        const { slides, currentSlide } = this.state;

        return (
            <div className="container">
              <Background />
              {slides && slides}
              <Button handleSwitch={this.prev} position={'left'} />
              <Button handleSwitch={this.next} position={'right'} />
              <Indicator indicators={slide.length - 1} 
                         selectedSlide={currentSlide} 
                         setSlide={this.manageResponse} />
             
            </div>
        );
    }
}
  
=======
import React from 'react';
import Button from '../Button';
import Indicator from '../Indicator';
import Background from '../Background';
import slide from '../../slides/slides-containers';
import './style.scss';

class Main extends React.Component {

    state = {
        slides: null,
        currentSlide: 0,
        indicators: null
    }

    componentWillMount() {
        this.setState({
            slides: slide[0]
        });
    }

    prev = () => {
        const { currentSlide } = this.state;

        if(currentSlide === 0){
          this.setState({
            slides: slide[slide.length - 1],
            currentSlide: slide.length - 1
          });
          return;
        }

        this.setState({
            slides: slide[currentSlide - 1],
            currentSlide: currentSlide - 1
        });
    }

    next = () => {
        const { currentSlide } = this.state;

        if(currentSlide === slide.length - 1){
          this.setState({
            slides: slide[0],
            currentSlide: 0
          });
          return;
        }

        this.setState({
            slides: slide[currentSlide + 1],
            currentSlide: currentSlide + 1
        });
    }

    manageResponse = response => {
        this.setState({
            slides: slide[response],
            currentSlide: response
        });
    }

    render() {
        const { slides, currentSlide } = this.state;

        return (
            <div className="container">
              <Background />
              {slides && slides}
              <Button handleSwitch={this.prev} position={'left'} />
              <Button handleSwitch={this.next} position={'right'} />
              <Indicator indicators={slide.length - 1} 
                         selectedSlide={currentSlide} 
                         setSlide={this.manageResponse} />
             
            </div>
        );
    }
}
  
>>>>>>> 4210225201de47e348b8171f1e55e35746374438
export default Main;