import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import "./UserManage.scss";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
    };
  }
  // const [gender, setGender] = useState('male');

  // const handleGenderChange = (e) => {
  //   setGender(e.target.value);
  // };
  componentDidMount() {}
  toggle = () => {
    this.props.toggleUserModal();
  };

  handleOnChangeALLinput = (event, id) => {
    // this.state[id] = event.target.value;
    // this.setState({
    //   ...this.state,
    // });
    // console.log(this.state);

    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
    // console.log(event.target.value, id);
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
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[A-Za-z]+([-']?[A-Za-z]+)*$/;
    const addressPattern = /^[A-Za-z0-9\s.,#-]+$/;
    const phonePattern = /^\d{11}$/;
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Please enter a valid" + arrInput[i]);
        break;
      }
      // if (arrInput[i] === "email" && !emailPattern.test(this.state.email)) {
      //   isValid = false;
      //   alert("Please enter your Email");
      //   break;
      // }
      // if (
      //   (arrInput[i] === "firstName" || arrInput[i] === "lastName") &&
      //   (!namePattern.test(this.state.firstName) ||
      //     !namePattern.test(this.state.lastName))
      // ) {
      //   isValid = false;
      //   alert("Please enter your Name");
      //   break;
      // }
      // if (
      //   arrInput[i] === "address" &&
      //   !addressPattern.test(this.state.address)
      // ) {
      //   isValid = false;
      //   alert("Please enter your Address");
      //   break;
      // }
      // if (arrInput[i] === "phone" && !phonePattern.test(this.state.phone)) {
      //   isValid = false;
      //   alert("Please enter your Address");
      //   break;
      // }
    }
    return isValid;
  };
  handleOnClickAddNew = () => {
    let isValid = this.isCheckValid();
    if (isValid) {
      console.log("state: ", this.state);
      // call API
      this.props.getCreateUserModal(this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"model-user-container"}
        size="lg"
        centered
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Create new user
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
            <div className="input-container max-width-input">
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
            <div className="input-container max-width-input">
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
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => {
              this.handleOnClickAddNew();
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
