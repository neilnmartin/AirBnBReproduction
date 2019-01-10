import React, { Component } from "react";
import Modal from "./ModalComponents/Modal.jsx";
import style from "../styles/ModalReviews.css";

class ModalReviews extends Component {
  render() {
    return (
      <div>
        <button className={style.bigButton} onClick={() => this.props.modal()}>
          <div className={style.readReviewsWrapper}>
            <span className={style.readReviewLeft}>
              <span>Read all 100 reviews</span>
            </span>
            <span className={style.readReviewRight}>
              <span className={style.star}>
                <p className={style.Star}> &#x2605;</p>
              </span>
              <span className={style.star}>
                <p className={style.Star}> &#x2605;</p>
              </span>
              <span className={style.star}>
                <p className={style.Star}> &#x2605;</p>
              </span>
              <span className={style.star}>
                <p className={style.Star}> &#x2605;</p>
              </span>
              <span className={style.star}>
                <p className={style.Star}> &#x2605;</p>
              </span>
            </span>
          </div>
        </button>
        <Modal
          modal={this.props.modal}
          show={this.props.show}
          data={this.props.data}
        />
      </div>
    );
  }
}

export default ModalReviews;
