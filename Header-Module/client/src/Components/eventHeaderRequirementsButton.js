import React from 'react';
import styles from './style.css';

const EventHeaderRequirementsButton = (props) => {
    // console.log(props.artifacts);

    return (
        <div>
            <div className={styles.eventHeaderRequirementsMargin}> 
                <div className={styles.eventHeaderRequirementsTableRow}>
                    <div className={styles.cellOne} >
                        <div >
                            <span>
                                <span>
                                    <img width='13px' src='https://cdn4.iconfinder.com/data/icons/online-marketing-double-color-black-and-red-vol-3/52/location__pin__pinned__map__pointer__mark__gps-512.png' />
                                </span>
                            </span>
                        </div>
                    </div> 
                    <div className={styles.cellTwo} >
                        <div>
                            <button className={styles.transparentBackgroundButton} >
                                Anacortes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


};

export default EventHeaderRequirementsButton;