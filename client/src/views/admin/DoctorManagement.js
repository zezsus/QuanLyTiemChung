import React from "react";
import NavBar from "../../components/NavBar";
import { icons } from "../../utils/icons";
import "../../assets/styles/admin/DoctorManagement.scss";

const DoctorManagement = () => {
  const { IoMdAdd, CiEdit, MdDeleteForever } = icons;
  return (
    <div className="doctor-management">
      <div className="header">
        <NavBar />
      </div>
      <div className="container">
        <div className="button-add">
          <button className="btn-add">
            <IoMdAdd size={25} title="Add" />
          </button>
        </div>
        <div className="table">
          <table border="1" rules="all">
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ Tên</th>
                <th>Số điện thoại</th>
                <th>Vị trí</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Nguyễn Văn A</td>
                <td>0982748172</td>
                <td>Bs.Phẫu thuật</td>
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

export default DoctorManagement;
