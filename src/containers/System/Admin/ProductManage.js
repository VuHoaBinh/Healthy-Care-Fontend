import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllCodeService } from "../../../services/userServices";
import { LANGUAGE } from "../../../utils";
import * as actions from "../../../store/actions";
import "./ProductManage.scss";
class ProductManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArray: [],
      positionArray: [],
      roleIDArray: [],
      imgURL: "",
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
    this.props.getPositionStart();
    this.props.getRoleStart();
    // or : this.props.dispatch(actions.getGenderStart());
  }

  // life cycle
  // Compare with componentDidMount: componentDidUpdate will update many time with genderRedux, but componentDidMount is only 1 time
  componentDidUpdate(prevProps, prevState, snapshot) {
    //update state of gender redux
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArray: this.props.genderRedux,
        positionArray: this.props.positionRedux,
        roleIDArray: this.props.roleIDRedux,
      });
    }
  }

  onChangeHandleImage = (file) => {
    let getFile = file[0];
    if (getFile) {
      let objectUrl = URL.createObjectURL(getFile);
      this.setState({
        imgURL: objectUrl,
      });
    }
  };
  render() {
    let gender = this.state.genderArray;
    let langRedux = this.props.lang;
    let isLoadingGender = this.props.isLoadingGender;
    let position = this.state.positionArray;
    let role = this.state.roleIDArray;

    return (
      <div>
        <div className="text-center">Manage products</div>
        <div>{isLoadingGender === true ? "Loading ........." : ""}</div>
        <div className="form-redux-user-body">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Password</label>
                <input type="password" className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="">First Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Last Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="">Address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Phone Number</label>
                <input type="number" className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label htmlFor="inputState">Gender</label>
                <select id="inputState" className="form-control">
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
              <div className="form-group col-md-3">
                <label htmlFor="inputState">Position</label>
                <select id="inputState" className="form-control">
                  {position &&
                    position.length > 0 &&
                    position.map((item, index) => {
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
              <div className="form-group col-md-3">
                <label htmlFor="inputState">Role</label>
                <select id="inputState" className="form-control">
                  {role &&
                    role.length > 0 &&
                    role.map((item, index) => {
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
              <div className="form-group col-md-3">
                <label htmlFor="">Image</label>
                <div>
                  <input
                    id="img"
                    type="file"
                    className="form-control"
                    hidden
                    onChange={(event) =>
                      this.onChangeHandleImage(event.target.files)
                    }
                  />
                  <label htmlFor="img">
                    {" "}
                    UpLoad
                    <i className="fa-solid fa-cloud-arrow-up"></i>
                  </label>
                  <div
                    style={{ backgroundImage: `url(${this.state.imgURL})` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
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
    isLoadingGender: state.admin.isLoadingGender,
    positionRedux: state.admin.positionArray,
    roleIDRedux: state.admin.roleIDArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),

    // processLogout: () => dispatch(actions.processLogout()),
    // changeLanguageReduxAction: (lang) =>
    //   dispatch(actions.changeLanguageApp(lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
