import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function CartCheckOut() {
  const cartItems = useSelector((state) => state.cartItems.value);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let rezult = 0;
    if (cartItems.length > 0) {
      cartItems.forEach((item) => {
        rezult += +item.price * +item.ammount;
        setTotal(rezult);
      });
    }
  });

  return (
    <>
      <h3 className="dark:text-brandWhite">Total:</h3>
      <p className="my-2 font-bold dark:text-brandWhite">${total}</p>
      <button className="px-2 py-1 bg-primary text-brandWhite font-bold rounded  active:text-brandYellow ">
        Check Out
      </button>
    </>
  );
}

export default CartCheckOut;
