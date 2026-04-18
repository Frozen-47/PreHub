import { Link } from "react-router-dom";
import students from "../data/students.json";

export default function Home() {
  const bloodGroups = [...new Set(students.map((s) => s.bloodGroup))].length;
  const mediums = [...new Set(students.map((s) => s.medium))].length;

  return (
    <div>
      <div className="home-hero">
        <h1>Welcome to <span>StudentHub</span></h1>
        <p>22CT Batch — Student Records & Profiles</p>
      </div>

      <div className="home-cards" style={{marginTop: "40px"}}>
        <Link to="/students" className="home-card">
          <h3>All Students</h3>
          <p>Browse all {students.length} student records with full profiles.</p>
        </Link>
        <Link to="/dashboard/profile" className="home-card">
          
          <h3>Profile</h3>
          <p>Update personal info and contact preferences.</p>
        </Link>
        <Link to="/dashboard/settings" className="home-card">
          
          <h3>Settings</h3>
          <p>Configure notifications and system preferences.</p>
        </Link>
      </div>
    </div>
  );
}