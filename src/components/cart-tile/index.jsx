import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";
import { add, remove } from "../../store/slices/quantity-slice";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  // Use safe access for `state.quantity`
  const quantity = useSelector((state) => state.quantity?.[cartItem.id] || 1);

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem));
  }

  return (
    <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl mr-25">
      <div className="flex p-3">
        <img
          src={cartItem?.image}
          className="h-28 rounded-lg"
          alt={cartItem?.title}
        />
        <div className="ml-10 self-start space-y-5">
          <h1 className="text-xl text-white font-bold">{cartItem?.title}</h1>
          <p className="text-white font-extrabold">${cartItem?.price}</p>
        </div>
      </div>
      <div>
        <button
          onClick={handleRemoveFromCart}
          className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
        >
          Remove From Cart
        </button>

        {/* Quantity Control */}
        <div className="flex items-center space-x-4 border rounded-md px-3 py-1 bg-gray-100 shadow-md mt-5">
          <button
            onClick={() => dispatch(add(cartItem.id))}
            className="text-xl font-bold text-gray-700 hover:text-black px-3 py-1"
          >
            +
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={() => dispatch(remove(cartItem.id))}
            className="text-xl font-bold text-gray-700 hover:text-black px-3 py-1"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
