import React, { Component } from "react";
import { connect } from "react-redux";

class HomeBody extends Component {
  render() {
    return (
      <div className="home-header-container">
        <div className="home-header"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeBody);
