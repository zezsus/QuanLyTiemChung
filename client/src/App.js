import SignIn from "./views/SignIn";
import "./assets/styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import PatientManagement from "./views/admin/PatientManagement";
import VaccineManagement from "./views/admin/VaccineManagement";
import DoctorManagement from "./views/admin/DoctorManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/patient" element={<PatientManagement />} />
        <Route path="/vaccine" element={<VaccineManagement />} />
        <Route path="/doctor" element={<DoctorManagement />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
