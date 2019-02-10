import React from 'react';
import axios from 'axios';
import TopBar from './topBar';
import EventHeader from './eventHeader.js';
import EventAboutHost from './eventAboutHost';
import EventViews from './eventViews';
import EventHeaderDescription from './eventHeaderDescription';
import { render } from 'react-dom';
import styles from './style.css'


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {value: {}};
        this.artifacts = ['http://simpleicon.com/wp-content/uploads/watch-2.png', 
                            'https://vignette.wikia.nocookie.net/spongebobfanon/images/c/cc/Paper-ripped_318-11313.jpg/revision/latest?cb=20140817181453',
                            'https://image.flaticon.com/icons/png/512/14/14558.png'] //little image icons for the artifacts
    }
    
    componentDidMount() {
        this.fetchEvents();
    }

    fetchEvents() {
        axios
        .get('/events')
        .then((result) => {this.setState({value: result.data[0]}, function () {
            console.log(this.state.value);
        })})
        .catch(err => console.error(err))

        console.log('this is the STATE: ', this.state)
    }

    render() {
        return (
            <div>
                <TopBar />
                <div className={styles.headerBody} >
                    <section>
                        <div className={styles.eventHeaderTitlePadding}>
                            <h1 className={styles.eventHeaderTitle}>
                                {this.state.value.eventName}
                            </h1>
                        </div>
                    </section>
                    <EventHeader artifacts={this.artifacts} name={this.state.value.hostName} 
                        experienceType={this.state.value.experienceType} 
                        avatarImage={this.state.value.hostImage} 
                        />
                    <EventViews views={this.state.value.eventViews} />
                    <EventAboutHost />
                    <EventHeaderDescription />
                </div>
            </div>
        )
    }
}

export default App