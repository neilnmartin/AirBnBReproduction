import React from 'react';
import moment from 'moment';
import style from '../styles.css';

const MainThreeTimes = (props) => {
  return(
    <div>
      { props.mainThreeTimes.map((time, index) =>
        <div key={ index } className={style.dateTimePaddingAndBottomLine}>
          <div className={style.buttonPosition}>
            <div style={{marginBottom: 8+'px'}}>
            {/* <div className="u11bwvo6"> */}
              <div className={style.openingsTextBox}>
                <small className={style.openingsTextBolding}>
                  <span className={style.openingsUppercase}>
                    <span>{ time.openings } spots left</span>
                  </span>
                </small>
              </div>
            {/* </div> */}
            </div>
            <div>
              <div className={style.dateStyle}>{ moment(props.month).format("ddd, MMM D") }</div>
              <div style={{marginTop: 8+'px'}}>
                <div className={style.timeStyle}>{ index + 1 }:00PM - { index + 2 }:00PM · ${ props.price } per person</div>
              </div>
            </div>
            <div className={style.buttonPlacement}>
              <button /*onClick={() => props.handleChoose()}*/ type="button" className={style.buttonStyle} aria-busy="false">
                <span>Choose</span>
              </button>
            </div>
          </div>
        </div>
      ) }
    </div>
  )
}

export default MainThreeTimes;