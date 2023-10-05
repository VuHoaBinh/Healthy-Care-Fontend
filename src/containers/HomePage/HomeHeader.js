import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
    return (
      <React.Fragment>
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
        <div className="home-header-banner">
          <div className="content-north">
            <div className="title1">Nen tang y te</div>
            <div className="title2">Cham soc suc khoe toan dien</div>
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Tim kiem" />
            </div>
          </div>
          <div className="content-south">
            <div className="options">
              <div className="options-child">
                <div className="icon-child">
                  <i className="fa-regular fa-hospital"></i>
                </div>
                <div className="text-child">Kham chuyen khoa</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fa-solid fa-mobile"></i>
                </div>
                <div className="text-child">Kham tu xa</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fa-solid fa-stethoscope"></i>
                </div>
                <div className="text-child">Kham tong quat</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i class="fa-solid fa-microscope"></i>
                </div>
                <div className="text-child">Xet nghiem y hoc</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i class="fa-solid fa-notes-medical"></i>
                </div>
                <div className="text-child">suc khoe & tinh than</div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i class="fa-solid fa-tooth"></i>
                </div>
                <div className="text-child">kham nha khoa</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
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
