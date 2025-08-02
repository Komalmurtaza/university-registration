import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import RegistrationForm from "./components/RegistrationForm";
import StudentList from "./components/StudentList";
import StudentProfile from "./components/StudentProfile";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/register" element={<RegistrationForm students={students} setStudents={setStudents} />} />
        <Route path="/students" element={<StudentList students={students} setStudents={setStudents} />} />
        <Route path="/profile/:id" element={<StudentProfile students={students} setStudents={setStudents} />} />
      </Routes>
    </Router>
  );
}

export default App;
