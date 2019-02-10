import React from 'react';
import styles from './style.css';

const TopBar = (props) => {


    return (
        <header>
            <div>
                <div className={styles.eventTopBarTable}>
                    <div className={styles.eventTopBarCellOne} >
                        <div>
                            <img className={styles.airbnbLogo} src='https://cdn.iconscout.com/public/images/icon/free/png-512/airbnb-logo-social-media-3cf7b6aa5ab8cfd5-512x512.png' />
                        </div>
                    </div>
                    <div className={styles.eventTopBarCellTwo} >
                        I am the search bar
                    </div>
                </div>
            </div>
        </header>
    );

}

export default TopBar;

// am i allowed to use the airbnb logo?