import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { Modal } from "reactstrap";

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
        show={this.state.isOpen}
        onHide={this.toggle}
        className="asd"
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a new user</Modal.Title>
        </Modal.Header>

        <Modal.Body></Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.toggle}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleSubmit}>
            Save changes
          </Button>
        </Modal.Footer>
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
