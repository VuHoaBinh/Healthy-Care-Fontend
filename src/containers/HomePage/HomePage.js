import React, { Component } from "react";
import { connect } from "react-redux";
import HomeBody from "./HomeBody";
import HomeHeader from "./HomeHeader";
import Specialty from "./Section/Specialty";
import Facility from "./Section/Facility";
import HighLightBranches from "./Section/HighLightBranches";
import Doctor from "./Section/Doctor";
import About from "./Section/About";
import HomeFooter from "./HomeFooter";
import "./HomePage.scss";
class HomePage extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      // nextArrow: <NextArrow />,
      // prevArrow: <PreArrow />,
    };
    return (
      <div>
        <HomeHeader />
        <Specialty settings={settings} />
        <Facility settings={settings} />
        <HighLightBranches settings={settings} />
        <Doctor settings={settings} />
        <About />
        <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
