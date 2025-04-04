import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

export default function Cart() {
  // const cartItem = useSelector((state) => state.cart)
  const quantity = useSelector((state) => state.quantity);

  const [totalCart, setTotalCart] = useState(0);
 

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(
      cart.reduce((acc, curr) => acc + curr.price * (quantity[curr.id] || 1), 0) // ✅ Multiply price by quantity
    );
  }, [cart, quantity]);

  console.log(cart, totalCart);

  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} />
              ))} 
            </div>
          </div>
          <div className="w-[300px] mr-[100px] pr-[50px]">
    <div className="flex flex-col items-end p-5 space-y-5 mt-14 justify-around">
      <h1 className="font-bold text-lg text-red-800">
                Your Cart Summary
              </h1>
              {cart.length > 0 ? (
  <div>
    {cart.map((item) => (
      <p key={item.id} className="mt-10">
        <span className="text-gray-800 font-bold">{item.title}</span> <span className="text-gray-800 font-bold"> X {quantity[item.id]||1} = </span>
        <span className="text-green-800 font-bold">: ${item.price * (quantity[item.id] || 1)}</span>

      </p>
    ))}
  </div>
) : (
  <p className="text-gray-600">Your cart is empty</p>
)}
              <p>
                <span className="text-gray-800 font-bold text-4xl">Total Amount</span>
                <span className="text-4xl text-green-400">: {totalCart}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
