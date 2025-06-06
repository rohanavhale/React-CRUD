import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: "", mobile: "", age: "", skill: "" });
  const [editId, setEditId] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:1000/");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    if (editId) {
      await axios.put(`http://localhost:1000/${editId}`, formData);
      setEditId(null);
    } else {
      await axios.post("http://localhost:1000/", formData);
    }
    setFormData({ name: "", mobile: "", age: "", skill: "" });
    fetchStudents();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:1000/${id}`);
    fetchStudents();
  };

  const handleEdit = (student) => {
    setFormData(student);
    setEditId(student._id);
  };

  return (
    <>
      <div className="container mt-4 ">
        <h2 className="text-center mb-4">Student CRUD</h2>
        <form onSubmit={handleSubmit} className="p-3 border mb-4 bg-light rounded">

          <input type="text" name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleChange} required /> <br />
          <input type="text" name="mobile" className="form-control" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required /> <br />
          <input type="text" name="age" className="form-control" placeholder="Age" value={formData.age} onChange={handleChange} required /> <br />
          <input type="text" name="skill" className="form-control" placeholder="Skill" value={formData.skill} onChange={handleChange} required /> <br />
          <button className="btn btn-success w-100">{editId ? "Update" : "Save"}</button>

        </form>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Srno</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Age</th>
              <th>Skills</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={s._id}>
                <td>{i + 1}</td>
                <td>{s.name}</td>
                <td>{s.mobile}</td>
                <td>{s.age}</td>
                <td>{s.skill}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(s)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(s._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  );
}

export default App;
