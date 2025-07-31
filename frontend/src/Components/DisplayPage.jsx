import { useEffect, useState } from "react";
import axios from "axios";

function DisplayPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="container">
      <h2 className="title">Registered Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="3">No users registered yet.</td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.department}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayPage;
