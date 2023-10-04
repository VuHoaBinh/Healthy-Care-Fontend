import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
    return (
      <div className="home-header-container">
        <div className="home-header-content">
          <div className="home-header-left">
            <i className="fa-solid fa-bars-progress"></i>
            <div className="logo"></div>
          </div>
          <div className="home-header-center">
            <div className="center-child">
              <div>
                <b>Chuyen Khoa</b>
              </div>
              <div className="subChild">Tim bac si theo chuyen khoa</div>
            </div>
            <div className="center-child">
              <div>
                <b>Co so y te</b>
              </div>
              <div className="subChild">Chon benh vien phong kham</div>
            </div>
            <div className="center-child">
              <div>
                <b>Bac si</b>
              </div>
              <div className="subChild">Chon bac si gioi</div>
            </div>
            <div className="center-child">
              <div>
                <b>Goi kham</b>
              </div>
              <div className="subChild">Kham suc khoe tong quat</div>
            </div>
          </div>
          <div className="home-header-right">
            <div className="support">
              <i className="fa-solid fa-clipboard-question"></i> Ho tro
            </div>
            <div className="flagLanguage"></div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
