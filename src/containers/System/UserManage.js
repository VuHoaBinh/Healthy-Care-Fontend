import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUser } from "../../services/userServices";
import { getCreateUserService } from "../../services/userServices";
import { deleteUserService } from "../../services/userServices";
import ModalUser from "./ModalUser";
import {
  isConstructorDeclaration,
  isTemplateLiteralTypeNode,
} from "typescript";
import { emitter } from "../../utils/emitter";
import ModalEditUser from "./ModalEditUser";
import { editUserService } from "../../services/userServices";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpen: false,
      isOpenEditUser: false,
      userEdit: {}, // get info
    };
  }
  // get data in backend
  async componentDidMount() {
    await this.getAllUser();
  }

  getAllUser = async () => {
    let response = await getAllUser("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  };

  handleOnClickNewUsers = () => {
    this.setState({
      isOpen: true,
    });
  };

  toggleUserModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  getCreateUserModal = async (data) => {
    try {
      let response = await getCreateUserService(data);
      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await this.getAllUser();
        this.setState({
          isOpen: false,
        });
        emitter.emit("EVENT_CLEAR_USER_MODAL");
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleOnClickDelete = async (userID) => {
    console.log(userID);
    try {
      let response = await deleteUserService(userID.id);
      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await this.getAllUser();
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleOnClickEditUser = (userID) => {
    this.setState({
      isOpenEditUser: true,
      userEdit: userID,
    });
  };

  toggleEditUserModal = () => {
    this.setState({
      isOpenEditUser: !this.state.isOpenEditUser,
    });
  };

  handleOnClickEditUserInfo = async (userID) => {
    console.log("click save :", userID);
    try {
      let response = await editUserService(userID);
      console.log("response:", response);
      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        this.setState({
          isOpenEditUser: false,
        });
        await this.getAllUser();
      }
    } catch (e) {
      console.log(e);
    }
  };
  // //life cycle
  // 1: run contructors
  // 2: componentDidMount
  // 3:render

  render() {
    let arrayUsers = this.state.arrUsers;
    return (
      <div className="text-center">
        <ModalUser
          isOpen={this.state.isOpen}
          toggleUserModal={this.toggleUserModal}
          getCreateUserModal={this.getCreateUserModal}
        />
        {this.state.isOpenEditUser && (
          <ModalEditUser
            isOpenEditUser={this.state.isOpenEditUser}
            toggleUserModal={this.toggleEditUserModal}
            getUserModal={this.state.userEdit}
            editUserModal={this.handleOnClickEditUserInfo}
          />
        )}
        <h1 className="title text-center">Manage information users</h1>
        <div className="mx-1 text-left m-3">
          <button
            className="btn btn-primary px-3"
            onClick={() => this.handleOnClickNewUsers()}
          >
            <i className="fas fa-plus-square"></i> Add new users
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
                    <td>{item.gender === true ? "Male" : "Female"}</td>

                    {/* <td>{item.image}</td> */}
                    <td>null</td>
                    <td>{item.roleID}</td>
                    <td>{item.position}</td>
                    <td>
                      <button
                        className="btn-edit"
                        onClick={() => this.handleOnClickEditUser(item)}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => this.handleOnClickDelete(item)}
                      >
                        <i className="fas fa-trash-alt"></i>
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
