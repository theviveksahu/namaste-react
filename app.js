import React from "react";
import ReactDOM from "react-dom/client";

const Child = () => <h1>Namaste React child component</h1>;

const Parent = () => {
  return (
    <>
      <Child />
      <h1>Namaste React parent component</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Parent />);
