import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointments from "./pages/Appointments";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/doctors" element={<Doctor></Doctor>}></Route>
        <Route path="/doctors/:specialty" element={<Doctor></Doctor>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/my-profile" element={<MyProfile></MyProfile>}></Route>
        <Route path="/my-appointment" element={<MyAppointments></MyAppointments>}></Route>
        <Route path="/appointments/:docId" element={<Appointments></Appointments>}></Route>
      </Routes>
    </div>
  );
};

export default App;