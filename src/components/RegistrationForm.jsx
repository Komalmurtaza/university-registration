import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm({ students, setStudents }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [department, setDepartment] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !roll || !department || !image) {
      alert("Please fill in all fields");
      return;
    }

    const newStudent = { name, roll, department, image };
    setStudents([...students, newStudent]);

    navigate("/students");
  };

  return (
    <div className="form-container">
      <h2>Register New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Roll Number</label>
          <input
            type="text"
            placeholder="Enter roll number"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            placeholder="Enter department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>

        <button type="submit" className="splash-btn">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
