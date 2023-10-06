import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/logo.jpg";
import { FormattedMessage } from "react-intl";

class HomeHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="home-header-left">
              <i className="fa-solid fa-bars-progress"></i>
              <img src={logo} alt="MyPhoto" className="logo"></img>
            </div>
            <div className="home-header-center">
              <div className="center-child">
                <div>
                  <b>
                    <FormattedMessage id="HomeHeader.Specialist" />
                  </b>
                </div>
                <div className="subChild">
                  <FormattedMessage id="HomeHeader.FindDoctorsBySpecialty" />
                </div>
              </div>
              <div className="center-child">
                <div>
                  <b>
                    <FormattedMessage id="HomeHeader.HealthFacilities" />
                  </b>
                </div>
                <div className="subChild">
                  <FormattedMessage id="HomeHeader.ChooseAHospitalOrClinic" />
                </div>
              </div>
              <div className="center-child">
                <div>
                  <b>
                    <FormattedMessage id="HomeHeader.Doctor" />
                  </b>
                </div>
                <div className="subChild">
                  <FormattedMessage id="HomeHeader.ChooseAGoodDoctor" />
                </div>
              </div>
              <div className="center-child">
                <div>
                  <b>
                    <FormattedMessage id="HomeHeader.MedicalExaminationPackage" />
                  </b>
                </div>
                <div className="subChild">
                  <FormattedMessage id="HomeHeader.GeneralHealthExamination" />
                </div>
              </div>
            </div>
            <div className="home-header-right">
              <div className="support">
                <i className="fa-solid fa-clipboard-question"></i>{" "}
                <FormattedMessage id="HomeHeader.Support" />
              </div>
              <div className="flagLanguageVN active">VN</div>
              <div className="flagLanguageEN active">EN</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-north">
            <div className="title1">
              <FormattedMessage id="Banner.medicalPlatform" />
            </div>
            <div className="title2">
              <FormattedMessage id="Banner.ComprehensiveHealthCare" />
            </div>
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
                <div className="text-child">
                  <FormattedMessage id="Banner.SpecializedExamination" />
                </div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fa-solid fa-mobile"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="Banner.RemoteExamination" />
                </div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fa-solid fa-stethoscope"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="Banner.GeneralExamination" />
                </div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i class="fa-solid fa-microscope"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="Banner.MedicalTests" />
                </div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i class="fa-solid fa-notes-medical"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="Banner.mentalHealth" />
                </div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i class="fa-solid fa-tooth"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="Banner.dentalExamination" />
                </div>
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
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
