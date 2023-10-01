import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUser } from "../../services/userServices";
import { getCreateUserService } from "../../services/userServices";
import ModalUser from "./ModalUser";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpen: false,
    };
  }
  // get data in backend
  async componentDidMount() {
    await this.getAllUser();
  }

  getAllUser = async () => {
    let response = await getAllUser("ALL");
    // console.log("check response: ", response);
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
    console.log("check render: ", this.state);
    let arrayUsers = this.state.arrUsers;
    return (
      <div className="text-center">
        <ModalUser
          isOpen={this.state.isOpen}
          toggleUserModal={this.toggleUserModal}
          getCreateUserModal={this.getCreateUserModal}
        />
        <h1 className="title text-center">Manage information users</h1>
        <div className="mx-1 text-left m-3">
          <button
            className="btn btn-primary px-3"
            onClick={() => this.handleOnClickNewUsers()}
          >
            <i className="fas fa-plus-square"></i> Add new users
          </button>
          {/* <ModalUser /> */}
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
                      <button className="btn-edit">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn-delete">
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
