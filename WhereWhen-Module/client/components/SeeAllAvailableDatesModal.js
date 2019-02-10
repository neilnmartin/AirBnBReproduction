import React from 'react';

const SeeAllAvailableDatesModal = (props) => {
  return(
    <div id="seeAlAvailableDatesModal">
      <div id="">
        <button>X</button>
      </div>
      <div>
        <div>When do you want to go?</div>
      </div>
      <div>

      { props.dates.map((time, index) =>
        <div key={ index } className="dateTimePaddingAndBottomLine">
          <div className="buttonPosition">
            <div style={{marginBottom: 8+'px'}}>
            {/* <div className="u11bwvo6"> */}
              <div className="openingsTextBox">
                <small className="openingsTextBolding">
                  <span className="openingsUppercase">
                    <span>{ time.openings } spots left</span>
                  </span>
                </small>
              </div>
            {/* </div> */}
            </div>
            <div>
              <div className="dateStyle">{ moment(props.month).format("ddd, MMM D") }</div>
              <div style={{marginTop: 8+'px'}}>
                <div className="timeStyle">{ index + 1 }:00PM - { index + 2 }:00PM · ${ props.price } per person</div>
              </div>
            </div>
            <div className="buttonPlacement">
              <button onClick={() => props.handleChoose()} type="button" className="buttonStyle" aria-busy="false">
                <span>Choose</span>
              </button>
            </div>
          </div>
        </div>
      ) }
        
      </div>
    </div>
  )
}

export default SeeAllAvailableDatesModal;