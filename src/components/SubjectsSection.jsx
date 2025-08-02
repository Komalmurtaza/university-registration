import { useState } from "react";

function SubjectsSection() {
  const [subjects, setSubjects] = useState([]);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [credit, setCredit] = useState("");
  const [instructor, setInstructor] = useState("");
  const [grade, setGrade] = useState("");

  // Grade to GPA scale
  const gradeScale = {
    A: 4.0,
    "B+": 3.5,
    B: 3.0,
    C: 2.0,
    D: 1.0,
    F: 0,
  };

  // Add subject
  const handleAddSubject = (e) => {
    e.preventDefault();
    if (!name || !code || !credit || !instructor || !grade) {
      alert("Please fill all fields");
      return;
    }

    const newSubject = {
      name,
      code,
      credit: parseFloat(credit),
      instructor,
      grade,
    };

    setSubjects([...subjects, newSubject]);
    setName("");
    setCode("");
    setCredit("");
    setInstructor("");
    setGrade("");
  };

  // Delete subject
  const handleDelete = (index) => {
    const updated = subjects.filter((_, i) => i !== index);
    setSubjects(updated);
  };

  // Calculate CGPA
  const calculateCGPA = () => {
    if (subjects.length === 0) return 0;

    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach((sub) => {
      totalCredits += sub.credit;
      totalPoints += sub.credit * gradeScale[sub.grade];
    });

    return (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div className="form-container">
      <h2>Subject & CGPA Management</h2>
      <form onSubmit={handleAddSubject}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Subject Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Subject Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Credit Hours"
            value={credit}
            onChange={(e) => setCredit(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Instructor Name"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <select value={grade} onChange={(e) => setGrade(e.target.value)}>
            <option value="">Select Grade</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>
        </div>
        <button type="submit" className="splash-btn">Add Subject</button>
      </form>

      <h3>Subjects List</h3>
      {subjects.length === 0 ? (
        <p>No subjects added yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {subjects.map((sub, index) => (
            <li
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <strong>{sub.name}</strong> ({sub.code}) - {sub.credit} Credit Hr
              <br />
              Instructor: {sub.instructor} | Grade: {sub.grade}
              <br />
              <button
                style={{
                  marginTop: "5px",
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3>CGPA: {calculateCGPA()}</h3>
    </div>
  );
}

export default SubjectsSection;
