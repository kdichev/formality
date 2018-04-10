import React from "react";
import { render } from "react-dom";
import Form, { Input } from "./Hello";

const App = () => {
  return (
    <Form onSubmit={data => console.log("data", data)}>
      <Input keyName="name" required />
      <Input keyName="lastName" />
      <Input keyName="lastName1" />
      <Input keyName="lastName5" />
    </Form>
  );
};

render(<App />, document.getElementById("root"));
