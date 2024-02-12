import { useState } from "react";

type Props = {
  handelNewValue: Function;
};

function ProductComponent({ handelNewValue }: Props) {

  const [add, setAdd] = useState(0);

  function handleClickAddProduct() {
    const value = add + 1;
    setAdd(value);
    handelNewValue(value);
  }

  return (
    <div>
      Adicionar Produto
      <button onClick={handleClickAddProduct}>Add</button>
    </div>
  );
}

export default ProductComponent;
