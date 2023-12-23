import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { icons } from "../../utils/icons";
import "../../assets/styles/admin/DoctorManagement.scss";
import AddDoctor from "../../components/doctor/AddDoctor";
import EditDoctor from "../../components/doctor/EditDoctor";

const DoctorManagement = () => {
  const { IoMdAdd, CiEdit, MdDeleteForever, FaSearch } = icons;
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  return (
    <div className="doctor-management">
      <div className="header">
        <NavBar />
      </div>
      <div className="container">
        <div className="header-container">
          <button className="btn-add">
            <IoMdAdd size={25} title="Add" onClick={handleShowAdd} />
          </button>

          <div className="search">
            <input type="text" placeholder="Nhập tên cán bộ y tế..." />
            <button className="btn-search">
              <FaSearch size={25} />
            </button>
          </div>
        </div>

        {showAdd ? (
          <div className="add-form">
            <EditDoctor />
          </div>
        ) : (
          <div className="table">
            <table border="1" rules="all">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ Tên</th>
                  <th>Số Điện Thoại</th>
                  <th>Chức Vụ</th>
                  <th>Trình Độ Chuyên Môn</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Nguyễn Văn A</td>
                  <td>0982748172</td>
                  <td>Y tá</td>
                  <td>Y sĩ</td>
                  <td>
                    <div className="button">
                      <CiEdit
                        size={30}
                        title="Edit"
                        className="btn-edit"
                        onClick={() => setShowEdit(!showEdit)}
                      />
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
        )}
      </div>
    </div>
  );
};

export default DoctorManagement;
