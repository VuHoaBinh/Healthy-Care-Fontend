import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { FormattedMessage } from "react-intl";

// import slick
import Slider from "react-slick";

class Specialty extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div class="section-specialty">
        <div className="specialty-content">
          <Slider {...settings}>
            <div className="img">
              <h3>1</h3>
            </div>
            <div className="img">
              <h3>2</h3>
            </div>
            <div className="img">
              <h3>3</h3>
            </div>
            <div className="img">
              <h3>4</h3>
            </div>
            <div className="img">
              <h3>5</h3>
            </div>
            <div className="img">
              <h3>6</h3>
            </div>
          </Slider>
        </div>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
