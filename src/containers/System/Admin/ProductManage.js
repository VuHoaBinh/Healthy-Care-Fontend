import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllCodeService } from "../../../services/userServices";
import { LANGUAGE } from "../../../utils";
class ProductManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArray: [],
    };
  }

  async componentDidMount() {
    try {
      let res = await getAllCodeService("gender");
      if (res && res.errCode === 0) {
        this.setState({
          genderArray: res.data,
        });
      }
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    let gender = this.state.genderArray;
    let langRedux = this.props.lang;
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
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
