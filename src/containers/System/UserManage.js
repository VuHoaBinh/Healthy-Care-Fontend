import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUser } from "../../services/userServices";
import ModalUser from "./ModalUser";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModal: false,
    };
  }
  // get data in backend
  async componentDidMount() {
    let response = await getAllUser("ALL");
    console.log("check response: ", response);
    if (response && response.errCode === 0) {
      this.setState(
        {
          arrUsers: response.users,
        },
        () => {
          //call back
          console.log("Check state from users", this.state.arrUsers);
        }
      );
    }
  }
  handleOnClickNewUsers = () => {
    this.setState({
      isOpenModal: true,
    });
  };

  toggleUserModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };
  // //life cycle
  // 1: run contructors
  // 2: componentDidMount
  // 3:render

  render() {
    console.log("check render: ", this.state);
    let arrayUsers = this.state.arrUsers;
    return (
      <div className="text-center">
        <ModalUser
          isOpen={this.state.isOpenModal}
          toggleUserModal={this.toggleUserModal}
        />
        <h1 className="title text-center">Manage information users</h1>
        <div className="mx-1 text-left m-3">
          <button
            className="btn btn-primary px-3"
            onClick={() => this.handleOnClickNewUsers()}
          >
            <i class="fas fa-plus-square"></i> Add new users
          </button>
        </div>
        <table className="table">
          <thead className="thead-dark header">
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Gender</th>
              <th scope="col">Image</th>
              <th scope="col">RoleID</th>
              <th scope="col">Position</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="bodyTable">
            {arrayUsers &&
              arrayUsers.map((item, index) => {
                // console.log("Check log: ", item, index);
                return (
                  <tr key={index} className="trTable">
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                    <td>{item.gender}</td>
                    <td>{item.image}</td>
                    <td>{item.roleID}</td>
                    <td>{item.position}</td>
                    <td>
                      {/* <button className="btn-edit">EDIT</button>
                      <button className="btn-delete">DELETE</button> */}

                      <button className="btn-edit">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button className="btn-delete">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
