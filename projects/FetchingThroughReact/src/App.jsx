import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Users</h2>

      <button onClick={loadUsers} style={styles.button}>
        Fetch Users
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={styles.listItem}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  button: {
    padding: "8px 12px",
    marginBottom: "10px",
    border: "none",
    background: "#333",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  listItem: {
    background: "#f4f4f4",
    margin: "5px 0",
    padding: "10px",
    borderRadius: "5px",
  },
};

export default App;