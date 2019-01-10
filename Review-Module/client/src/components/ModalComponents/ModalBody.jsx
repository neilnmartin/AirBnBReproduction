import React, { Component } from "react";
import ReviewHead from "./ModalReviewComponents/ReviewHead.jsx";
import ReviewBody from "./ModalReviewComponents/ReviewBody.jsx";
import style from "../../styles/ModalComponents/ModalBody.css";

class ModalBody extends Component {
  render() {
    return (
      <section>
        <div className={style.allReviewsWrapper}>
          <div className={style.xWrapper}>X</div>
          <header>
            <h1>Reviews</h1>
          </header>

          {this.props.data.map(review => (
            <div className={style.itemWrapper}>
              <ReviewHead review={review} />
              <ReviewBody review={review} toggle={this.props.toggle} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default ModalBody;
