import { useState } from "react";
import axios from "axios";

function FormPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.department) {
      alert("All fields are required");
      return;
    }
    await axios.post("http://localhost:5000/users", form);
    alert("User Registered");
    setForm({ name: "", email: "", password: "", department: "" });
  };

  return (
    <div className="container">
      <h2 className="title">Register User</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <select
          value={form.department}
          onChange={(e) => setForm({ ...form, department: e.target.value })}
        >
          <option value="">Select Department</option>
          <option>Developer</option>
          <option>Designing</option>
          <option>Sales & Marketing</option>
          <option>HR</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default FormPage;
