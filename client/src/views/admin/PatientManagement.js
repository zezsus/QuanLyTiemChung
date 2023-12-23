import React from "react";
import "../../assets/styles/admin/PatinetMangement.scss";
import NavBar from "../../components/NavBar";
import { icons } from "../../utils/icons";

const PatientManagement = () => {
  const { IoMdAdd, CiEdit, MdDeleteForever, FaSearch } = icons;

  return (
    <div className="patient-management">
      <div className="header">
        <NavBar />
      </div>
      <div className="container">
        <div className="header-container">
          <button className="btn-add">
            <IoMdAdd title="Add" size={25} />
          </button>
          <div className="search">
            <input
              type="text"
              placeholder="Nhập tên hoặc mã của đối tượng tiêm..."
            />
            <button className="btn-search">
              <FaSearch size={25} />
            </button>
          </div>
        </div>

        <div className="table">
          <table border="1" rules="all">
            <thead>
              <tr>
                <th>Mã Số</th>
                <th>Họ Tên</th>
                <th>Ngày Sinh</th>
                <th>Giới Tính</th>
                <th>Số BHYT</th>
                <th>CMTND/CCCD</th>
                <th>Số Điện Thoại</th>
                <th>Địa Chỉ</th>
                <th>Vaccine Tiêm</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Nguyễn Tuấn Anh</td>
                <td>20/01/1999</td>
                <td>Nam</td>
                <td>8 10 1831471912</td>
                <td>035201003328</td>
                <td>0868174218</td>
                <td>Nghệ An</td>
                <td>Gam-COVID-Vac</td>
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

export default PatientManagement;
