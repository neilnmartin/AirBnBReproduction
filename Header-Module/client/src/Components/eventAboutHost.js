import React from 'react';
import styles from './style.css';

const EventAboutHost = (props) => {


    return (
        <div className={styles.eventAboutHostPadding}>
            <div>
                <div className={styles.eventAboutHostTitle} >
                    <div>
                        About your host dave
                    </div>
                </div>
                <div>
                    <div className={styles.eventAboutHostDescription}>
                        <span>
                            I've been the director of Predators of the Heart for over 18 years. 
                            My passion is sharing & saving wildlife! We work in wolf conservation, 
                            wildlife education, and exotic rescue. Our refuge is home to wolves, cougars, reptiles, 
                            and birds of prey. Our traveling wildlife programs are the biggest in the northwest, 
                            and our wolves are featured in movies, music videos, and shows like Game of Thrones!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EventAboutHost;

// border bottom solid line, gray between each component or module... maybe a little opaque.