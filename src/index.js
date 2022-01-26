import React from 'react';
import ReactDOM from "react-dom";
import { UserProvider } from "./UserContext";
import Name from "./NameComponent";
import Location from "./LocationComponent";
import UserForm from "./UserForm";
import "./styles.css";

// This component updates with data from context
function App() {
  return (
    <div className="App">
      <h2 className="is-size-4">
        We'll use the React Context API to pass and receive data in any
        component.
      </h2>
      <div className="container">
        <UserForm />

        <h2 className="is-size-4">Display User Info Here 👇</h2>
        <p>
          These two children components will receive data. These could be nested
          components.
        </p>
        <Name />
        <Location />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  rootElement
);

