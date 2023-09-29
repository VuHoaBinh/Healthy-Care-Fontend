import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import "./UserManage.scss";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  toggle = () => {
    this.props.toggleUserModal();
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
              <label for="name">Email:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="input-container">
              <label for="name">Password:</label>
              <input type="password" className="form-control" />
            </div>
            <div className="input-container">
              <label for="name">FirstName:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="input-container">
              <label for="name">LastName:</label>
              <input type="password" className="form-control" />
            </div>
            <div className="input-container max-width-input">
              <label for="name">Address:</label>
              <input type="password" className="form-control" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            className="px-3"
            onClick={() => {
              this.toggle();
            }}
          >
            Save
          </Button>
          <Button
            color="primary"
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
