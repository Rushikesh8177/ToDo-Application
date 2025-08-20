import React, { useContext } from 'react'
import { ToDoContext } from '../Contaxt/ToDoContext'

const ToDoList = () => {
  const {state, dispatch} = useContext(ToDoContext);
  return (
      <div className="bg-light p-4 rounded shadow-sm">
      <h2 className="text-center text-primary mb-4">📌 Your Tasks</h2>

      {state.todos.length === 0 ? (
        <div className="text-center text-muted">
          <p>No tasks yet. Start by adding one! 🚀</p>
        </div>
      ) : (
        <div className="container">
          <ul className="list-group">
            {state.todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center mb-2 shadow-sm rounded"
              >
                <div>
                  <h5
                    className="mb-1"
                    style={{
                      textDecoration: todo.isCompleted ? "line-through" : "none",
                      color: todo.isCompleted ? "gray" : "black",
                    }}
                  >
                    {todo.name}
                  </h5>
                  <p className="mb-0 text-muted">{todo.description}</p>
                </div>
                <div>
                  <button
                    className={`btn btn-sm me-2 ${
                      todo.isCompleted ? "btn-warning" : "btn-success"
                    }`}
                    onClick={() =>
                      dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                    }
                  >
                    {todo.isCompleted ? "⏪ Undo" : "✅ Complete"}
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() =>
                      dispatch({ type: "DELETE_TODO", payload: todo.id })
                    }
                  >
                    🗑️ Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default ToDoList
