import React, { Component } from "react";
import { connect } from "react-redux";
import "./About.scss";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-About">
        <div className="header">Truyền thông nói về Healthy Care</div>
        <div className="content">
          <div className="video">
            <iframe
              width="100%"
              height="420"
              src="https://www.youtube.com/embed/XuEsaMHUsuY"
              title="Listening Road to IELTS | Test 9"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="describe">
            #bc #britishcouncilieltslistening #britishcouncil #cambridge #ielts
            #roadtoietls #englishbook #listening #book #test9 -
            Materials/References: Road to IELTS book with answers - Script and
            file: https://bom.so/PqTsiZ Thanks. 🥰
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
