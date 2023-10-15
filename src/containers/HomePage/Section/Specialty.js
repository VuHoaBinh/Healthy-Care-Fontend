import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { FormattedMessage } from "react-intl";
import logoSlider from "../../../assets/logo.jpg";
// import slick
import Slider from "react-slick";

function PreArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    ></div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    ></div>
  );
}
class Specialty extends Component {
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
      <div className="section-specialty">
        <div className="specialty-content">
          <div className="specialty-header">
            <span>Chuyen khoa pho bien</span>
            <button>Xem them</button>
          </div>
          <div className="specialty-body">
            <Slider {...settings}>
              <div className="img">
                <img src={logoSlider} />
                <div>Co xuong khop 1</div>
              </div>
              <div className="img">
                <img src={logoSlider} />
                <div>Co xuong khop 2</div>
              </div>
              <div className="img">
                <img src={logoSlider} />
                <div>Co xuong khop 3</div>
              </div>
              <div className="img">
                <img src={logoSlider} />
                <div>Co xuong khop 4</div>
              </div>
              <div className="img">
                <img src={logoSlider} />
                <div>Co xuong khop 5</div>
              </div>
              <div className="img">
                <img src={logoSlider} />
                <div>Co xuong khop 6</div>
              </div>
              <div className="img">
                <img src={logoSlider} />
                <div>Co xuong khop 7</div>
              </div>
            </Slider>
          </div>
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
