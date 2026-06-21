import { useParams, useNavigate } from "react-router-dom";
import students from "../data/students.json";

export default function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const s = students.find((s) => s.id === parseInt(id));

  if (!s) return <div className="not-found">Student not found.</div>;

  const initials = s.name.trim().split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <div>
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-card">
        <div className="detail-header">
          <div className="detail-avatar">{initials}</div>
          <div>
            <div className="detail-name">{s.name}</div>
            <div className="detail-course">{s.rollNo} · {s.group}</div>
          </div>
        </div>
        <div className="detail-body">
          <div className="detail-row"><span className="d-label">DOB</span><span className="d-value">{s.dob}</span></div>
          <div className="detail-row"><span className="d-label">Blood Group</span><span className="d-value">{s.bloodGroup}</span></div>
          <div className="detail-row"><span className="d-label">Medium</span><span className="d-value">{s.medium}</span></div>
          <div className="detail-row"><span className="d-label">Phone</span><span className="d-value">{s.phone}</span></div>
          <div className="detail-row"><span className="d-label">Email</span><span className="d-value">{s.email}</span></div>
          <div className="detail-row">
            <span className="d-label">LinkedIn</span>
            <span className="d-value">{s.linkedin ? <a href={s.linkedin} target="_blank" rel="noreferrer" style={{color:"var(--accent)"}}>View Profile</a> : "—"}</span>
          </div>
          <div className="detail-row">
            <span className="d-label">GitHub</span>
            <span className="d-value">{s.github ? <a href={s.github} target="_blank" rel="noreferrer" style={{color:"var(--accent)"}}>View Profile</a> : "—"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}