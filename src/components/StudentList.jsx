import { useNavigate } from "react-router-dom";

function StudentList({ students }) {
  const navigate = useNavigate();

  if (students.length === 0) {
    return (
      <div className="form-container">
        <h2>No students registered yet</h2>
        <button onClick={() => navigate("/register")}>Register Student</button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Registered Students</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((student, index) => (
          <li
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/profile/${index}`)}
            >
              <img
                src={student.image}
                alt="Student"
                style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "15px" }}
              />
              <strong>{student.name}</strong> - {student.roll}
            </div>
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() => {
                const updatedList = students.filter((_, i) => i !== index);
                navigate("/students", { replace: true });
                window.location.reload(); // refresh so updated list shows
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/register")}>Add New Student</button>
    </div>
  );
}

export default StudentList;
