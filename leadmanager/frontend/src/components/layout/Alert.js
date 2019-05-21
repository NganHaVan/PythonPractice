import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

class Alert extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { errors, alert, message } = this.props;
    if (errors !== prevProps.errors) {
      if (errors.status !== null) {
        for (let key of Object.keys(errors.msg)) {
          if (errors.msg[key]) {
            alert.error(`${key}: ${errors.msg[key].join()}`);
          }
        }
      }
    }
    if (message !== prevProps.message) {
      for (let key of Object.keys(message)) {
        if (message[key]) {
          alert.success(`${message[key]}`);
        }
      }
    }
  }

  render() {
    return <Fragment />;
  }
}

export default connect(state => ({
  errors: state.errors,
  message: state.message
}))(withAlert()(Alert));
