import React from "react";
import { icons } from "../../utils/icons";
import NavBar from "../../components/NavBar";
import "../../assets/styles/admin/VaccineManagement.scss";

const VaccineManagement = () => {
  const { IoMdAdd, CiEdit, MdDeleteForever, FaSearch } = icons;

  return (
    <div className="vaccine-management">
      <div className="header">
        <NavBar />
      </div>
      <div className="container">
        <div className="header-container">
          <button className="btn-add">
            <IoMdAdd title="Add" size={25} />
          </button>
          <div className="search">
            <input type="text" placeholder="Nhập tên hoặc mã vaccine..." />
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
                <th>Tên Vaccine</th>
                <th>Hạn Sử Dụng</th>
                <th>Số Lượng</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GCV</td>
                <td>Vaccine Gam-COVID-Vac</td>
                <td>12/09/2024</td>
                <td>2000</td>
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

export default VaccineManagement;
