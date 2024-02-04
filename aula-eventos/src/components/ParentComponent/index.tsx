import { useState } from "react";
import ChildComponent from "../ChildComponent";

import './style.css';

export default function ParentComponent() {

  const [triple, setTriple] = useState(0);

  function handelNewValue (newValue : number) {
      setTriple(newValue * 3);
  }

  return (
    <div className="parent-container">
      <p>ParentComponent</p>
      {triple}
      <ChildComponent onNewValue={handelNewValue}/>
    </div>
  );
}
