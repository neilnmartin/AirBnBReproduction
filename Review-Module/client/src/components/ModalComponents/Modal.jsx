import React, { Component } from "react";
import ModalBody from "./ModalBody.jsx";
import style from "../../styles/ModalComponents/Modal.css";

class Modal extends Component {
  render() {
    const show = {
      display: this.props.show ? "block" : "none"
    };

    return (
      <div
        className={style.modalWrapper}
        style={show}
        onClick={() => this.props.modal()}
      >
        <div className={style.modalOverlay}>
          <div className={style.modal}>
            <div className={style.modalGuts}>
              <ModalBody data={this.props.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
