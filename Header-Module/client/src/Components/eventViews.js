import React from 'react';
import styles from './style.css';

const EventViews = (props) => {
    // console.log(props.artifacts);

    return (
        <div className={styles.eventViewsPadding} >
            <div className={styles.eventViewsTable} >
                <div className={styles.eventViewsTableRow} > 
                    <div className={styles.cellThree} >
                        <span>
                            <div>
                                People are eyeing this experience. Over {props.views} people have viewed it this week.
                            </div>
                        </span>
                    </div>
                    <div className={styles.cellFour} >
                        <img src='https://a0.muscache.com/airbnb/static/page2/icon-p2-competing-views-animated-1aa77ba0a52fd0d37a210a0f5176ddc6.gif' />
                    </div>
                </div>
            </div>
        </div>

    )


};

export default EventViews;