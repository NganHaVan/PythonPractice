import React, { Component } from "react";
import { connect } from "react-redux";
import { getLeads, deleteLead } from "../../actions/leadActions";

class Lead extends Component {
  componentDidMount() {
    this.props.getLeads();
  }
  render() {
    return (
      <div>
        <h1>Lead List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Message</td>
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => {
              return (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.props.deleteLead(lead.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  leads: state.leads.leads
});

const mapDispatchToProps = { getLeads, deleteLead };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lead);
