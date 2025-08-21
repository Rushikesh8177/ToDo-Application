import React, { useContext, useState } from 'react'
import { ToDoContext } from '../Contaxt/ToDoContext'

const ToDoList = () => {
  const { state, dispatch } = useContext(ToDoContext);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredTodos = state.todos.filter(todo =>
    (todo.name.toLowerCase().includes(search.toLowerCase()) ||
      todo.description.toLowerCase().includes(search.toLowerCase())) &&
    (filter === 'all' ||
      (filter === 'completed' && todo.isCompleted) ||
      (filter === 'notCompleted' && !todo.isCompleted))
  );
  return (
    <div className="bg-light p-4 rounded shadow-sm">
      <div className="d-flex mb-3 align-items-center gap-2">
        <input
          type="text"
          placeholder="🔍 Search tasks..."
          onChange={(e) => setSearch(e.target.value)}
          className="form-control rounded-pill shadow-sm"
        />

        {/* 👇 Styled filter dropdown */}
        <select
          className="form-select rounded-pill shadow-sm text-primary fw-semibold"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">📋 All</option>
          <option value="completed">✅ Completed</option>
          <option value="notCompleted">⌛ Not Completed</option>
        </select>
      </div>

      <h2 className="text-center text-primary mb-4">📌 Your Tasks</h2>

      {filteredTodos.length === 0 ? (
        <div className="text-center text-muted">
          <p>No tasks yet. Start by adding one! 🚀</p>
        </div>
      ) : (
        <div className="container">
          <ul className="list-group">
            {filteredTodos.map((todo) => {
              const isExpanded = expanded[todo.id] || false;
              return (
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

                    {/* 👇 Description with inline truncation */}
                    <p
                      className="mb-1 text-secondary"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: isExpanded ? "unset" : "2", // limit to 2 lines when collapsed
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "500px",
                        lineHeight: "1.5",
                      }}
                    >
                      {todo.description}
                    </p>

                    {todo.description.length > 60 && (
                      <button
                        className="btn btn-sm btn-outline-primary rounded-pill px-3 py-1 mt-1"
                        onClick={() => toggleExpand(todo.id)}
                      >
                        {isExpanded ? "🔼 View Less" : "🔽 View More"}
                      </button>
                    )}
                  </div>

                  <div>
                    <button
                      className={`btn btn-sm me-2 ${todo.isCompleted ? "btn-warning" : "btn-success"
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
              )
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default ToDoList
