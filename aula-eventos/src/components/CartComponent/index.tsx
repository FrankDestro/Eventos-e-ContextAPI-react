import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductComponent from "../ProductComponent";
import { useState } from "react";

function CartComponent() {

  const [totalQtdeCart, setTotalQtdeCart] = useState(0);

  function handleTotalQtde(onNewTotal: number) {
    setTotalQtdeCart(onNewTotal);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginRight: "20px",
        }}
      >
        <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: "20px" }} />
        <h3 style={{ color: "red" }}>{totalQtdeCart}</h3>
      </div>
      <div>
        <ProductComponent handelNewValue={handleTotalQtde} />
      </div>
    </>
  );
}

export default CartComponent;
