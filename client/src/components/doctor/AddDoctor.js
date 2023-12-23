import React, { useState } from "react";
import "../../assets/styles/admin/doctors/AddDoctor.scss";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedQualification, setSelectedQualification] = useState("");

  return (
    <div className="add-doctor">
      <header>Thêm nhân viên y tế</header>
      <form>
        <div>
          <label>Họ tên </label>
          <input
            type="text"
            placeholder="Họ tên "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Số điện thoại</label>
          <input
            type="text"
            placeholder="Số điện thoại "
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Cấp bậc</label>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}>
            <option value="">-- Chọn một tùy chọn --</option>
            <option value="Trưởng trạm">Trưởng trạm</option>
            <option value="Phó trạm">Phó trạm</option>
            <option value="Bác sỹ">Bác sỹ</option>
            <option value="Giám đốc bệnh viện">Giám đốc bệnh viện</option>
            <option value="Phó giám đốc bệnh viện">
              Phó giám đốc bệnh viện
            </option>
            <option value="Trưởng khoa">Trưởng khoa</option>
            <option value="Y tá">Y tá</option>
            <option value="Dược sỹ">Dược sỹ</option>
            <option value="Điều dưỡng">Điều dưỡng</option>
          </select>
        </div>
        <div>
          <label>Trình độ chuyên môn</label>
          <select
            value={selectedQualification}
            onChange={(e) => setSelectedQualification(e.target.value)}>
            <option value="">-- Chọn một tùy chọn --</option>
            <option value="Thực tập sinh">Thực tập sinh</option>
            <option value="Cử nhân">Cử nhân</option>
            <option value="Hộ lý">Hộ lý</option>
            <option value="Bác sỹ">Bác sỹ</option>
            <option value="Y sỹ">Y sỹ</option>
            <option value="Dược sỹ">Dược sỹ</option>
            <option value="Thạc sỹ">Thạc sỹ</option>
            <option value="Tiến sỹ">Tiến sỹ</option>
          </select>
        </div>
      </form>
      <footer>
        <button className="btn-close">Đóng</button>
        <button className="btn-add">Thêm mới</button>
      </footer>
    </div>
  );
};

export default AddDoctor;
