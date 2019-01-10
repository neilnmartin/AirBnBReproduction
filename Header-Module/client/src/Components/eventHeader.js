import React from 'react';
import styles from './style.css';
import EventHeaderRequirementsButton from './eventHeaderRequirementsButton';
import EventHeaderRequirements from './eventHeaderRequirements';


const EventHeader = (props) => {
    // console.log(props.artifacts);

    return (

        <div className={styles.eventHeaderNegativeMargin} >
            <div className={styles.eventHeaderPadding} >
                <div className={styles.eventHeaderMargin}>
                    <div className={styles.eventHeaderTableView}>
                        <div className={styles.eventHeaderHalfPadding} >
                            <div className={styles.eventHeaderHostAndExperienceType} >
                                <div>
                                    <img width='5px' src='http://icon-park.com/imagefiles/ribbon_sticker_icon_black.png'/> {props.experienceType}
                                </div>
                                <div>
                                    Hosted by 
                                    <button className={styles.transparentBackgroundNameButton} >
                                        {props.name}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.eventHeaderAvatarImage} >
                            <img className={styles.eventHeaderAvatarImageStyles} src='https://openclipart.org/image/300px/svg_to_png/215819/Linux-Avatar.png' />
                        </div>
                    </div>
                </div>
                <div className={styles.eventHeaderRequirementsPadding} >
                    <div className={styles.eventHeaderRequirementsNegativeMargin} >
                        <EventHeaderRequirementsButton />
                        {props.artifacts.map((artifact, index) => 
                            <EventHeaderRequirements key={index} artifacts={artifact} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EventHeader

// border bottom solid line, gray between each component or module... maybe a little opaque.