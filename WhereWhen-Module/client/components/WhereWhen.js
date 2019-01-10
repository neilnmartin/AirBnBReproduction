import React, { Component } from 'react';
import axios from 'axios';
import SignUpModal from './SignUpModal';
import SeeAllAvailableDatesModal from './SeeAllAvailableDatesModal';
import MainThreeTimes from './MainThreeTimes';
import style from '../styles.css';

class WhereWhen extends Component {
  constructor() {
    super();

    this.state = {
      venues: [{}],
      mainThreeTimes: [{}],
      dates: [{}],

      chosen: false,
      allDates: false,
    };

    this.handleChoose = this.handleChoose.bind(this);
    this.handleSeeAllAvailableDates = this.handleSeeAllAvailableDates.bind(this);
    this.handleXClick = this.handleXClick.bind(this);

  }

  componentDidMount() {
    axios.get('/api/where')
      .then((res) => {
        this.setState({ venues: res.data });
        // console.log(this.state.venues);
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get('/api/when')
      .then((res) => {
        this.setState({ dates: res.data, mainThreeTimes: [res.data[0], res.data[1], res.data[2]] });
        // console.log(this.state.dates);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // ////////////////
  // Event Handlers ///////////////////////////////////////////////////////////
  // ///////////////

  handleChoose() {
    this.setState({ chosen: true });
  }

  handleSeeAllAvailableDates() {
    this.setState({ allDates: false });
  }

  handleXClick() {
    this.setState({ chosen: false, allDates: false });
  }

  // /////////////////////////////////////////////////////////////////////////

  render() {
    let randomi = Math.floor(Math.random() * this.state.venues.length);
    return(
      <div className={style.outermostContainer}>

        <div>
          <div className={style.whereWellBeDiv}>
            <div style={{marginBottom: 16+'px'}}>
              <div className={style.titleText}>Where we’ll be</div>
            </div>
            <div className={style.descriptionDiv}>
              <div className={style.description}>{ this.state.venues[randomi].description }</div>
            </div>
          </div>
        </div>

        <div className={style.imageDiv}>
          <img className={style.image} src={ this.state.venues[randomi].mapimageurl } />
        </div>
        
        <div>
          <div className={style.upcomingAvailailityDiv}>
            <div className={style.titleText}>Upcoming availability</div>

            <MainThreeTimes handleChoose={ this.handleChoose } 
                            price={ this.state.venues[randomi].price } 
                            mainThreeTimes={ this.state.mainThreeTimes } />

            <button type="button" className={style.u1uhl1m7p} aria-busy="false">
              <div className={style.u1t4anzn1}>
                  <span className={style.ufgdupie}>
                    <span className={style.u6joo1h}>
                      <span onClick={() => this.handleSeeAllAvailableDates()}>See all available dates</span>
                    </span>
                  </span>
              </div>
            </button>
          </div>

          {/* Modals to be implemented below: */}

          {/* { this.state.chosen ? 
            <SignUpModal className="sUModal" handleXClick={ this.handleXClick } />
          :
            <SignUpModal className="hidden" handleXClick={ this.handleXClick } />
          }

          { this.state.allDates ? 
            <SeeAllAvailableDatesModal className="sAADModal" handleXClick={ this.handleXClick } />
          :
            <SeeAllAvailableDatesModal className="hidden" handleXClick={ this.handleXClick } />
          } */}

        </div>

      </div>
    )
  }
}

export default WhereWhen;