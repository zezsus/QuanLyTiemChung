import React from "react";
import NavBar from "../../components/NavBar";
import { icons } from "../../utils/icons";
import "../../assets/styles/admin/AccountManagement.scss";

const AccountManagement = () => {
  const { IoMdAdd, CiEdit, MdDeleteForever, FaSearch } = icons;

  return (
    <div className="account-management">
      <div className="header">
        <NavBar />
      </div>

      <div className="container">
        <div className="header-container">
          <button className="btn-add">
            <IoMdAdd title="Add" size={25} />
          </button>

          <div className="search">
            <input type="text" placeholder="Nhập tên tài khoản" />
            <button className="btn-search">
              <FaSearch size={25} />
            </button>
          </div>
        </div>

        <div className="table">
          <table border="1" rules="all">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tài Khoản</th>
                <th>Mật Khẩu</th>
                <th>Quyền</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>demo</td>
                <td>123</td>
                <td>Login, logout, thêm, sửa, xóa</td>
                <td>
                  <div className="button">
                    <CiEdit size={30} title="Edit" className="btn-edit" />
                    <MdDeleteForever
                      size={30}
                      title="Delete"
                      className="btn-delete"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
