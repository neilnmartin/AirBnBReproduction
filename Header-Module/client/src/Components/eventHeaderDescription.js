import React from 'react';
import styles from './style.css';

const EventHeaderDescription = (props) => {


    return (
        <div className={styles.eventAboutHostPadding}>
            <div>
                <div className={styles.eventAboutHostTitle} >
                    <div>
                        What we'll do
                    </div>
                </div>
                <div>
                    <div className={styles.eventAboutHostDescription}>
                        <span>
                            Meet one of the largest wolf packs in the Pacific Northwest! 
                            Just 1.5 hours North of Seattle, our wildlife refuge is nestled 
                            in 10 forested acres. We will introduce you to our mission and 
                            history with wolves. Then, meet our wolf ambassadors, Max and 
                            Kakoa, who will escort us through sun-dappled trails. Old-growth 
                            trees tower overhead; the wolves lead us up a moderate hiking 
                            path while our guide ta…
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EventHeaderDescription;
