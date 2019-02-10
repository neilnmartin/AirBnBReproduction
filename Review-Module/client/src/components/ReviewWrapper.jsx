import React, { Component } from "react";
import ItemWrapper from "./Reviews/ItemWrapper.jsx";
import style from "../styles/ReviewWrapper.css";

class ReviewWrapper extends Component {
  render() {
    return (
      <div className={style.reviewWrapper}>
        <div className={style.titleWrapper}>
          <h1 className={style.review}>Reviews</h1>
        </div>

        {this.props.data.map(review => {
          return <ItemWrapper review={review} toggle={this.props.toggle} />;
        })}
      </div>
    );
  }
}

export default ReviewWrapper;
