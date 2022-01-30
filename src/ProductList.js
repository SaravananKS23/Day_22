import React, { useState } from 'react';
import PrimaryButton from "./button"

/**
 * 1. product item, price added
 * 2. delete button
 */
const ProductItem = ({item, cart, price1, price2, deleteItem }) => {
const [disable, setDisable] = useState(true);
  return (
    <div className="border-b border-slate-600/25 p-4 flex justify-between items-start">
      <div className="flex flex-1">
        <div>
          <p className="text-lg">{item}</p>
          <p className="text-sm text-gray-500">{price1} {price2}</p>
        </div>

      </div>
        <div className="ml-4">
          <PrimaryButton disabled={disable} className="bg-red-300 text-red-800" onClick={() => deleteItem({ item },setDisable(false))}>
            Remove
          </PrimaryButton>
        </div>
      </div>
  )
}

export default ProductItem;