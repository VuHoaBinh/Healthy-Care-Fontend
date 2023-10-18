import React, { Component } from "react";
import { connect } from "react-redux";
import "./HighLightBranches.scss";
import { FormattedMessage } from "react-intl";
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
class HighLightBranches extends Component {
  render() {
    let settings = this.props.settings;
    return (
      <div className="section-share section-Branches">
        <div className="specialty-content">
          <div className="specialty-header">
            <span className="title-section">Cơ sở y tế nổi bật</span>
            <button className="btn-section">Xem them</button>
          </div>
          <div className="specialty-body">
            <Slider {...settings}>
              <div className="img">
                <div className="bg"></div>
                <div className="items">Co xuong khop 1</div>
              </div>
              <div className="img">
                <div className="bg"></div>
                <div className="items">Co xuong khop 2</div>
              </div>
              <div className="img">
                <div className="bg"></div>
                <div className="items">Co xuong khop 3</div>
              </div>
              <div className="img">
                <div className="bg"></div>
                <div className="items">Co xuong khop 4</div>
              </div>
              <div className="img">
                <div className="bg"></div>
                <div className="items">Co xuong khop 5</div>
              </div>
              <div className="img">
                <div className="bg"></div>
                <div className="items">Co xuong khop 6</div>
              </div>
              <div className="img">
                <div className="bg"></div>
                <div className="items">Co xuong khop 7</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HighLightBranches);
