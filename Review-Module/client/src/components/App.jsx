import React, { Component } from "react";
import axios from "axios";
import ReviewWrapper from "./ReviewWrapper.jsx";
import ModalReviews from "./ModalReviews.jsx";
import style from "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      allReviews: [],
      show: false
    };
    this.handleLoadTop5 = this.handleLoadTop5.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleLoadAll = this.handleLoadAll.bind(this);
  }

  componentDidMount() {
    this.handleLoadTop5();
  }

  handleLoadTop5() {
    axios.get("/api/data").then(response => {
      this.setState({ data: response.data });
    });
  }

  handleLoadAll() {
    axios.get("/api/data/all").then(response => {
      this.setState({ allReviews: response.data });
      console.log(this.state.allReviews);
    });
  }
  //This function will toggle the display of longer reviews
  handleModal() {
    axios.get("/api/data/all").then(response => {
      this.setState({ allReviews: response.data });
      console.log(this.state.allReviews);
    });
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div className={style.daddyWrapper}>
        <section className={style.leftSideWrapper}>
          <ReviewWrapper data={this.state.data} toggle={this.toggleMore} />
          <ModalReviews
            modal={this.handleModal}
            show={this.state.show}
            data={this.state.allReviews}
          />
        </section>
      </div>
    );
  }
}

export default App;
