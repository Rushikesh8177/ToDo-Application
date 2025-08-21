import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-white" href="#">
            ✅ ToDo App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fw-semibold" aria-current="page" to="/">
                  🏠 Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/about">
                  ℹ️ About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/createTask" tabIndex="-1" aria-disabled="true">
                  ➕ Create Task
                </Link>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2 rounded-pill"
                type="search"
                placeholder="🔍 Search tasks..."
                aria-label="Search"
              />
              <button className="btn btn-light rounded-pill fw-bold" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
