import React, { useContext } from 'react'
import { useReducer, useState } from 'react'
import { ToDoContext } from '../Contaxt/ToDoContext'
import { useNavigate } from "react-router-dom";


const ToDoForm = () => {
   const [name,setName] = useState()
    const [description, setDescription] = useState()
    const {dispatch} = useContext(ToDoContext)
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        try{
        const payload = { name, description };
         dispatch({ type: 'ADD_TODO', payload: payload });
         navigate("/");

        }catch (error) {
           return error;
        }

    }

  return (
    <div className="container my-4">
  <h1 className="text-center text-success mb-4">
    ✅ <b>To Do Application</b>
  </h1>

  <div className="card shadow-lg border-0 rounded">
    <div className="card-body">
      <h3 className="card-title text-primary mb-3">📝 Create a New Task</h3>
      <p className="text-muted">
        Stay organized by adding tasks with a name and description.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold">Task Name</label>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter task name..."
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Description</label>
          <textarea
            className="form-control"
            rows={3}
            placeholder="Add some details (optional)..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-success btn-lg px-4">
            ➕ Add Task
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};

export default ToDoForm
