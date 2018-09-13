import React from "react";
import { render } from "react-dom";
import Input from "./Input";
import "./styles.scss";

const App = () => (
  <div>
    <Input />
  </div>
);

render(<App />, document.getElementById("app"));
