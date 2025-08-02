import { useParams, useNavigate } from "react-router-dom";
import SubjectsSection from "./SubjectsSection";

function StudentProfile({ students }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((_, index) => index === parseInt(id));

  if (!student) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Student not found ❌</h2>
        <button
          onClick={() => navigate("/students")}
          style={{
            background: "#3b82f6",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Back to Students
        </button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Student Profile</h2>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {student.image && (
          <img
            src={student.image}
            alt={student.name}
            style={{ width: "120px", height: "120px", borderRadius: "50%" }}
          />
        )}
        <h3>{student.name}</h3>
        <p>Roll Number: {student.rollNumber}</p>
        <p>Department: {student.department}</p>
      </div>

      {/* Subjects & CGPA Section */}
      <SubjectsSection />
    </div>
  );
}

export default StudentProfile;
