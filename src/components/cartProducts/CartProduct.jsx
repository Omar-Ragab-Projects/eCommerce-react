import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../app/features/cart/cartItems";

function CartProduct({ data }) {
  const cartItems = useSelector((state) => state.cartItems.value);
  const dispatch = useDispatch();
  return (
    <div className="cart-produc-card w-[200px] dark:text-brandWhite relative text-center">
      <div className="image relative">
        <img className="rounded" src={data.img} />
      </div>
      <h3 className="font-bold">{data.title}</h3>
      <p>${data.price}</p>
      <button
        onClick={() => dispatch(increment(data.id))}
        className="px-2 py-1 bg-blue-500 text-brandWhite "
      >
        +
      </button>
      <span className="m-1 border px-2 py-1">{data.ammount}</span>
      <button
        onClick={() => dispatch(decrement(data.id))}
        className="px-2 py-1 bg-red-500 text-brandWhite "
      >
        -
      </button>
    </div>
  );
}

export default CartProduct;
