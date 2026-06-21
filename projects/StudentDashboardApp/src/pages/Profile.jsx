export default function Profile() {
  return (
    <div className="sub-page">
      <h2>My Profile</h2>

      <div className="form-group">
        <label className="form-label">Full Name</label>
        <input className="form-input" type="text" defaultValue="Priya Nair" />
      </div>

      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input className="form-input" type="email" defaultValue="priya@university.edu" />
      </div>

      <div className="form-group">
        <label className="form-label">Course</label>
        <input className="form-input" type="text" defaultValue="AI & ML" />
      </div>

      <div className="form-group">
        <label className="form-label">Age</label>
        <input className="form-input" type="number" defaultValue="20" />
      </div>

      <button className="save-btn">Save Changes</button>
    </div>
  );
}