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
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      gender: "",
      position: "",
      role: "",
      avatar: "",
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
        gender:
          this.props.genderRedux && this.props.genderRedux.length > 0
            ? this.props.genderRedux[0].key
            : "",
      });
    }

    if (prevProps.positionRedux !== this.props.positionRedux) {
      this.setState({
        positionArray: this.props.positionRedux,
        position:
          this.props.positionRedux && this.props.positionRedux.length > 0
            ? this.props.positionRedux[0].key
            : "",
      });
    }

    if (prevProps.roleIDRedux !== this.props.roleIDRedux) {
      this.setState({
        roleIDArray: this.props.roleIDRedux,
        role:
          this.props.roleIDRedux && this.props.roleIDRedux.length > 0
            ? this.props.roleIDRedux[0].key
            : "",
      });
    }
  }

  onChangeHandleImage = (files) => {
    let getFile = files[0];
    if (getFile) {
      let objectUrl = URL.createObjectURL(getFile);
      this.setState({
        imgURL: objectUrl,
        avatar: getFile,
      });
    }
  };

  handleSaveInfo = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  handleSaveUser = () => {
    this.checkValidValue();
    alert("success");
    this.props.createNewUser({
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      phone: this.state.phone,
      gender: this.state.gender,
      roleID: this.state.role,
      position: this.state.position,
    });
  };
  checkValidValue = () => {
    let isFlag = true;
    let arrCheck = [
      "email",
      "email",
      "password",
      "firstName",
      "lastName",
      "phone",
      "address",
    ];
    for (let i = 0; i < arrCheck.length; i++) {
      if (!this.state[arrCheck[i]]) {
        isFlag = false;
        alert("Please select enough the information: " + arrCheck[i]);
        break;
      }
    }
    return isFlag;
  };

  render() {
    let gender = this.state.genderArray;
    let langRedux = this.props.lang;
    let isLoadingGender = this.props.isLoadingGender;
    let position = this.state.positionArray;
    let role = this.state.roleIDArray;

    let {
      emailState,
      passwordState,
      firstNameState,
      lastNameState,
      phoneState,
      positionState,
      roleState,
      avatarState,
      addressState,
      genderdState,
    } = this.state;
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
                  value={emailState}
                  onChange={(event) => {
                    this.handleSaveInfo(event, "email");
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={passwordState}
                  onChange={(event) => {
                    this.handleSaveInfo(event, "password");
                  }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={firstNameState}
                  onChange={(event) => {
                    this.handleSaveInfo(event, "firstName");
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={lastNameState}
                  onChange={(event) => {
                    this.handleSaveInfo(event, "lastName");
                  }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={addressState}
                  onChange={(event) => {
                    this.handleSaveInfo(event, "address");
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  value={phoneState}
                  onChange={(event) => {
                    this.handleSaveInfo(event, "phone");
                  }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label htmlFor="inputState">Gender</label>
                <select
                  id="inputState"
                  className="form-control"
                  onChange={(event) => {
                    this.handleSaveInfo(event, "gender");
                  }}
                >
                  {gender &&
                    gender.length > 0 &&
                    gender.map((item, index) => {
                      return (
                        <option key={index} value={item.key}>
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
                <select
                  id="inputState"
                  className="form-control"
                  onChange={(event) => {
                    this.handleSaveInfo(event, "position");
                  }}
                >
                  {position &&
                    position.length > 0 &&
                    position.map((item, index) => {
                      return (
                        <option key={index} value={item.key}>
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
                <select
                  id="inputState"
                  className="form-control"
                  onChange={(event) => {
                    this.handleSaveInfo(event, "role");
                  }}
                >
                  {role &&
                    role.length > 0 &&
                    role.map((item, index) => {
                      return (
                        <option key={index} value={item.key}>
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
            <button
              type="submit"
              className="btn btn-primary "
              onClick={() => {
                this.handleSaveUser();
              }}
            >
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
    createNewUser: (data) => dispatch(actions.createUserStart(data)),

    // processLogout: () => dispatch(actions.processLogout()),
    // changeLanguageReduxAction: (lang) =>
    //   dispatch(actions.changeLanguageApp(lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
