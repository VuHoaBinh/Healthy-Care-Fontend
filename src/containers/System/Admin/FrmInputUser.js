import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./FrmInputUser.scss";
import { getAllUser } from "../../../services/userServices";
import { deleteUserService } from "../../../services/userServices";
import { editUserService } from "../../../services/userServices";

class FrmInputUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      userEdit: {}, // get info
      isOpenEdit: true,
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

  // s

  handleOnClickEditUser = (userID) => {
    this.props.isOpenEdit(this.state.isOpenEdit);
    this.setState({
      userEdit: userID,
    });
    console.log("click edit :", userID);
    console.log("click edit :", this.props.editUser(userID));
  };

  render() {
    let arrayUsers = this.state.arrUsers;
    return (
      <div className="text-center">
        <table className="table">
          <thead className="thead-dark header">
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="bodyTable">
            {arrayUsers &&
              arrayUsers.map((item, index) => {
                return (
                  <tr key={index} className="trTable">
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(FrmInputUser);
