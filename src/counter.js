import PrimaryButton from "./button"
import Counter from "./counter";

/**
 * 1. product image
 * 2. title & desc
 * 3. count
 * 4. delete button
 */
const ProductItem = ({ title, desc, image, count, deleteItem }) => {
  return (
    <div className="border-b border-slate-600/25 p-4 flex justify-between items-start">
      <div className="flex flex-1">
        <div>
          <p className="text-lg">{title}</p>
          <p className="text-sm text-gray-500">{desc}</p>
        </div>

      </div>
      <div className="flex items-top">
        <div>
          <Counter startValue={count}/>
        </div>
        <div className="ml-4">
          <PrimaryButton className="bg-red-300 text-red-800" onClick={() => deleteItem({ title })}>
            Remove
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;