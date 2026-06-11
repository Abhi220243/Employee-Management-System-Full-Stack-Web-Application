import { useEffect, useState } from "react"
import { createEmp, readEmp, updateEmp, deleteEmp } from "./Service/EmpService";



function App() {

  const [employee, setEmployee] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditID] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: ""
  })

  const loadData = async () => {
    const res = await readEmp();
    setEmployee(res.data);
  }

  useEffect(() => {
    loadData();
  }, [])

  const addEmp = async () => {
    await createEmp(form);
    setForm({ name: "", phone: "", email: "" });
    loadData();
  }

  const removeEmp = async (id) => {
    await deleteEmp(id);
    loadData();
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleEdit = (emp) => {
    setEditMode(true);
    setEditID(emp.id);
    setForm({
      name: emp.name,
      phone: emp.phone,
      email: emp.email
    })
  }

  const updateData = async () => {
    await updateEmp(editId, form);
    setEditMode(false);
    setEditID(null);
    setForm({ name: "", phone: "", email: "" });
    loadData();
  }

  const cancelEdit = () => {
    setEditMode(false);
    setEditID(null);
    setForm({ name: "", phone: "", email: "" });
    loadData();
  }

  return (
    <><div style={{
      backgroundColor: "#e8f4ff",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f4f6f9",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ color: "#2c3e50", textAlign: "center" }}>
          Employee Data
        </h1>
       <div style={{textAlign: "center" }}> 
        Name:
        <input
          name="name"
          onChange={handleChange}
          value={form.name}
          style={{
            margin: "5px",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        Phone:
        <input
          name="phone"
          onChange={handleChange}
          value={form.phone}
          style={{
            margin: "5px",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        Email:
        <input
          name="email"
          onChange={handleChange}
          value={form.email}
          style={{
            margin: "5px",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {!editMode ? (
          <button
            onClick={addEmp}
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "8px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          >
            Add
          </button>
        ) : (
          <>
            <button
              onClick={updateData}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "8px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              Update
            </button>

            <button
              onClick={cancelEdit}
              style={{
                backgroundColor: "#ffc107",
                color: "black",
                padding: "8px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "5px",
              }}
            >
              Cancel
            </button>
          </>
        )}
        </div>
      </div>

      <div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            backgroundColor: "white",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#343a40", color: "white" }}>
              <th style={{ padding: "10px" }}>Id</th>
              <th style={{ padding: "10px" }}>Name</th>
              <th style={{ padding: "10px" }}>Phone</th>
              <th style={{ padding: "10px" }}>Email</th>
              <th style={{ padding: "10px" }}>Edit</th>
              <th style={{ padding: "10px" }}>Delete</th>
            </tr>
          </thead>

          <tbody>
            {employee.map((emp) => (
              <tr key={emp.id} style={{ textAlign: "center" }}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {emp.id}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {emp.name}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {emp.phone}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {emp.email}
                </td>

                <td style={{ border: "1px solid #ddd" }}>
                  <button
                    onClick={() => handleEdit(emp)}
                    style={{
                      backgroundColor: "#17a2b8",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                </td>

                <td style={{ border: "1px solid #ddd" }}>
                  <button
                    onClick={() => removeEmp(emp.id)}
                    style={{
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

    </>
  )
}

export default App
