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
import AddTeacher from "./pages/AddTeacher/AddTeacher";
import EditTeacher from "./pages/EditTeacher/EditTeacher";
import Batches from "./pages/Batches/Batches";
import AddBatch from "./pages/AddBatch/AddBatch";
import EditBatch from "./pages/EditBatch/EditBatch";
import Enrollments from "./pages/Enrollments/Enrollments";
import Enroll from "./pages/Enroll/Enroll";
import EditEnrollment from "./pages/EditEnrollment/EditEnrollment";

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
            <Route path="add-teacher" element={<AddTeacher />} />
            <Route path="editTeacher" element={<EditTeacher />} />
            <Route path="batches" element={<Batches />} />
            <Route path="add-batch" element={<AddBatch />} />
            <Route path="editBatch" element={<EditBatch />} />
            <Route path="enrollments" element={<Enrollments />} />
            <Route path="enroll" element={<Enroll />} />
            <Route path="editEnrollment" element={<EditEnrollment />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
