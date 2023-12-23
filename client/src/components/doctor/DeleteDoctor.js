import React from "react";
import "../../assets/styles/admin/doctors/DeleteDoctor.scss";

const DeleteDoctor = () => {
  return (
    <div className="delete-doctor">
      <header>Xóa nhân viên y tế</header>
      <div className="content">Bạn có chắc chắn muốn xóa không?</div>
      <footer>
        <button className="btn-close">Đóng</button>
        <button className="btn-delete">Xóa</button>
      </footer>
    </div>
  );
};

export default DeleteDoctor;
