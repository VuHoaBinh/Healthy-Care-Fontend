import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
class ProductManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
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
                  <option selected>Choose...</option>
                  <option>...</option>
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
