import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllCodeService } from "../../../services/userServices";
import { LANGUAGE } from "../../../utils";
import * as actions from "../../../store/actions";

class ProductManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArray: [],
    };
  }

  async componentDidMount() {
    // try {
    //   let res = await getAllCodeService("gender");
    //   if (res && res.errCode === 0) {
    //     this.setState({
    //       genderArray: res.data,
    //     });
    //   }
    //   console.log(res);
    // } catch (e) {
    //   console.log(e);
    // }

    this.props.getGenderStart();
    // or : this.props.dispatch(actions.getGenderStart());
  }

  // life cycle
  // Compare with componentDidMount: componentDidUpdate will update many time with genderRedux, but componentDidMount is only 1 time
  componentDidUpdate(prevProps, prevState, snapshot) {
    //update state of gender redux
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArray: this.props.genderRedux,
      });
    }
  }

  render() {
    let gender = this.state.genderArray;
    let langRedux = this.props.lang;
    let genderRedux = this.props.genderRedux;

    return (
      <div>
        <div className="text-center">Manage products</div>
        <div className="form-redux-user-body">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="">Email</label>
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="form-group col-md-6">
                <label for="">Password</label>
                <input type="password" class="form-control" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="">First Name</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group col-md-6">
                <label for="">Last Name</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="">Address</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group col-md-6">
                <label for="">Phone Number</label>
                <input type="number" class="form-control" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="inputState">Gender</label>
                <select id="inputState" class="form-control">
                  {gender &&
                    gender.length > 0 &&
                    gender.map((item, index) => {
                      return (
                        <option key={index}>
                          {langRedux === LANGUAGE.VI
                            ? item.valueVI
                            : item.valueEN}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div class="form-group col-md-3">
                <label for="inputState">Position</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-3">
                <label for="inputState">Role</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-3">
                <label for="">Image</label>
                <input type="image" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language, // app in file rootReducer
    genderRedux: state.admin.genderArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    // processLogout: () => dispatch(actions.processLogout()),
    // changeLanguageReduxAction: (lang) =>
    //   dispatch(actions.changeLanguageApp(lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
