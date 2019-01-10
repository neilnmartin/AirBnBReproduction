import React, { Component } from "react";
import style from "../../../styles/ModalComponents/ModalReviewComponents/ReviewBody.css";

class ReviewBody extends Component {
  render() {
    return (
      <div className={style.messageWrapper}>
        <span className={style.message}>{this.props.review.review}</span>
      </div>
    );
  }
}

export default ReviewBody;
