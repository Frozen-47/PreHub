import { Link } from "react-router-dom";
import students from "../data/students.json";

export default function Students() {
  return (
    <div>
      <div className="page-header">
        <h1>All Students</h1>
        <p>{students.length} students enrolled — 22CT Batch</p>
      </div>
      <div className="students-grid">
        {students.map((s) => (
          <Link to={`/students/${s.id}`} key={s.id} className="student-card">
            <div className="student-card-top">
              <div className="avatar">
                {s.name.trim().split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <div className="student-name">{s.name}</div>
                <div className="student-id">{s.rollNo}</div>
              </div>
            </div>
            <div className="student-card-body">
              <div className="info-row">
                <span className="label">Group</span>
                <span className="value">{s.group}</span>
              </div>
              <div className="info-row">
                <span className="label">Medium</span>
                <span className="value">{s.medium}</span>
              </div>
              <div className="info-row">
                <span className="label">Blood Group</span>
                <span className="value">{s.bloodGroup}</span>
              </div>
              <div className="info-row">
                <span className="label">DOB</span>
                <span className="value">{s.dob}</span>
              </div>
            </div>
            <div className="view-link">View Details →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}