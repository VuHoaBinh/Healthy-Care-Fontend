import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { FormGroup, Label, Input } from "reactstrap";
import "./UserManage.scss";
import _ from "lodash";

class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      gender: "",
      roleID: "",
      position: "",
    };
  }

  handleGenderChange = (event) => {
    let confirmGender = event.target.value === "male" ? true : false;
    this.setState({
      gender: confirmGender,
    });
  };

  componentDidMount() {
    let user = this.props.getUserModal; // === let {getUserModal} = this.props;
    if (user && !_.isElement(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: "binhdeptrai",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        phone: user.phone,
        gender: user.gender,
        roleID: user.roleID,
        position: user.position,
      });
    }
    console.log(this.props.getUserModal);
  }
  toggle = () => {
    this.props.toggleUserModal();
  };

  handleOnChangeALLinput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  isCheckValid = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phone",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Please enter a valid" + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleOnClickSaveInfo = () => {
    let isValid = this.isCheckValid();

    if (isValid) {
      console.log("state: ", this.state);
      // call API
      this.props.editUserModal(this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpenEditUser}
        toggle={() => this.toggle()}
        className={"model-user-container"}
        size="lg"
        centered
      >
        <ModalHeader
          className="modal-user-header"
          toggle={() => {
            this.toggle();
          }}
        >
          Edit user information
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label htmlFor="Email">Email:</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  this.handleOnChangeALLinput(event, "email");
                }}
                value={this.state.email}
                placeholder="hoabinh.vippro63@gmail.com"
                disabled
              />
            </div>
            <div className="input-container">
              <label htmlFor="Password">Password:</label>
              <input
                type="password"
                className="form-control"
                onChange={(event) => {
                  this.handleOnChangeALLinput(event, "password");
                }}
                value={this.state.password}
                disabled
              />
            </div>
            <div className="input-container">
              <label htmlFor="FirstName">FirstName:</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  this.handleOnChangeALLinput(event, "firstName");
                }}
                value={this.state.firstName}
                placeholder="Vu"
              />
            </div>
            <div className="input-container">
              <label htmlFor="LastName">LastName:</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  this.handleOnChangeALLinput(event, "lastName");
                }}
                value={this.state.lastName}
                placeholder="Hoa Binh"
              />
            </div>
            <div className="input-container">
              <label htmlFor="Address">Address:</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  this.handleOnChangeALLinput(event, "address");
                }}
                value={this.state.address}
                placeholder="90 Khue My"
              />
            </div>
            <div className="input-container ">
              <label htmlFor="Phone">Phone:</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  this.handleOnChangeALLinput(event, "phone");
                }}
                value={this.state.phone}
                placeholder="12312312389"
              />
            </div>

            <div className="input-container max-width-input">
              <label htmlFor="gender">Sex:</label>
              <FormGroup check className="radioButtonSex">
                <Label check>
                  <Input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={this.handleGenderChange}
                  />
                  {"   "}
                  Male
                </Label>
                <Label check>
                  <Input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(event) => {
                      this.handleGenderChange(event);
                    }}
                  />{" "}
                  Female
                </Label>
              </FormGroup>
            </div>
            <div className="input-container">
              <FormGroup>
                <Label htmlFor="role">Role</Label>
                <Input
                  type="select"
                  name="roleID"
                  onChange={(event) => {
                    this.handleOnChangeALLinput(event, "roleID");
                  }}
                >
                  <option value="R1">R1</option>
                  <option value="R2">R2</option>
                  <option value="R3">R3</option>
                </Input>
              </FormGroup>
            </div>
            <div className="input-container ">
              <FormGroup>
                <Label htmlFor="position">Position</Label>
                <Input
                  type="select"
                  name="position"
                  onChange={(event) => {
                    this.handleOnChangeALLinput(event, "position");
                  }}
                >
                  <option value="Admin">Admin</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                </Input>
              </FormGroup>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => {
              this.handleOnClickSaveInfo();
            }}
          >
            Save
          </Button>
          <Button
            color="secondary"
            className="px-3"
            onClick={() => {
              this.toggle();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
