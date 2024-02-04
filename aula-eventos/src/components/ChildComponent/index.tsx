import { useState } from "react";
import "./style.css";


type Props = {
  onNewValue : Function;
}

export default function ChildComponent({onNewValue} : Props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    const newCount = count + 1;
    setCount(newCount);
    onNewValue(newCount);
  }

  return (
    <>
      <div className="child-container">
        <p>ChildComponent</p>
        {count}
        <button onClick={handleClick}>Incrementar</button>
      </div>
    </>
  );
}

