import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);

  return (
    <div className="sub-page">
      <h2>Settings</h2>

      <div className="toggle-row">
        <div>
          <div className="toggle-label">Push Notifications</div>
          <div className="toggle-desc">Get alerts for grades and announcements</div>
        </div>
        <button className={`toggle${notifications ? " on" : ""}`} onClick={() => setNotifications(!notifications)} />
      </div>

      <div className="toggle-row">
        <div>
          <div className="toggle-label">Dark Mode</div>
          <div className="toggle-desc">Toggle dark/light appearance</div>
        </div>
        <button className={`toggle${darkMode ? " on" : ""}`} onClick={() => setDarkMode(!darkMode)} />
      </div>

      <div className="toggle-row">
        <div>
          <div className="toggle-label">Email Updates</div>
          <div className="toggle-desc">Receive weekly performance summaries</div>
        </div>
        <button className={`toggle${emailUpdates ? " on" : ""}`} onClick={() => setEmailUpdates(!emailUpdates)} />
      </div>

      <button className="save-btn" style={{ marginTop: "24px" }}>Save Settings</button>
    </div>
  );
}