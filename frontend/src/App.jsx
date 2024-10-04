import { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Students from "./pages/Students/Students"
import AddStudent from "./pages/AddStudent/AddStudent";
import EditStudent from "./pages/EditStudent/EditStudent";
import Teachers from "./pages/Teachers/Teachers";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="home" element={<Home />} />
            <Route path="add-student" element={<AddStudent />} />
            <Route path="students" element={<Students />} />
            <Route path="editStudent" element={<EditStudent />} />
            <Route path="teachers" element={<Teachers />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
