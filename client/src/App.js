import { Fragment } from "react";
import "./App.css";

//components

import InputTodp from "./components/InputTodo";
import ListTodos from "./components/ListTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodp />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
