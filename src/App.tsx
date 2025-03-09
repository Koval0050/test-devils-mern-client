import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import DataTable from "./components/DataTable";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token: string) => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="authenticated-container">
          <header className="app-header">
            <h1>MERN Data Manager</h1>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </header>
          <DataTable />
        </div>
      )}
    </div>
  );
}

export default App;
