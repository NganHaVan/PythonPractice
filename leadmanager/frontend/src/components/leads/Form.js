import React, { Component } from "react";
import { connect } from "react-redux";
import { addLead } from "../../actions/leadActions";

class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addLead(this.state);
    this.setState({ name: "", email: "", message: "" });
  };
  render() {
    return (
      <div className="card card-body mt-4 mb-4">
        <h1>Form</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.onChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <textarea
              name="message"
              id="message"
              value={this.state.message}
              onChange={this.onChange}
              rows="5"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addLead }
)(Form);
