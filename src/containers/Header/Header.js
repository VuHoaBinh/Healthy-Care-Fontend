import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import { LANGUAGE } from "../../utils";
import { FormattedMessage } from "react-intl";

class Header extends Component {
  handleLanguageChange = (lang) => {
    this.props.changeLanguageReduxAction(lang);
  };
  render() {
    const { processLogout, lang } = this.props;
    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-menu">
          <Navigator menus={adminMenu} />
        </div>
        <div className="header-language">
          <span className="welcome">
            <FormattedMessage id="HomeHeader.Welcome" />, admin!
          </span>
          <span></span>
          <span
            className={lang === LANGUAGE.VI ? "VN active" : "VN"}
            onClick={() => this.handleLanguageChange(LANGUAGE.VI)}
          >
            VN
          </span>
          <span
            className={lang === LANGUAGE.EN ? "EN active" : "EN"}
            onClick={() => this.handleLanguageChange(LANGUAGE.EN)}
          >
            EN
          </span>
          <div
            className="btn btn-logout"
            onClick={processLogout}
            title="Log out"
          >
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
        {/* nút logout */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageReduxAction: (lang) =>
      dispatch(actions.changeLanguageApp(lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
