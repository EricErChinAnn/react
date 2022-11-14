import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./components/TaskList";
import UserAndEmail from "./components/UserAndEmail";

function App() {
  return (
    <React.Fragment>
      <TaskList/>
      <UserAndEmail/>
    </React.Fragment>
  );
}

export default App;
