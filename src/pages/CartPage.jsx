import Header from "../components/header/Header";
import { useSelector } from "react-redux";
import CartProduct from "../components/cartProducts/CartProduct";
import CartCheckOut from "../components/cartCheckOut/CartCheckOut";

function CartPage() {
  const cartItems = useSelector((state) => state.cartItems.value);

  const items = cartItems.map((item) => {
    return item.ammount >= 1 && <CartProduct key={item.id} data={item} />;
  });
  return (
    <>
      <Header />
      <div className="container">
        <div className="cart flex">
          <div className="products flex-[4]">
            {localStorage.getItem("items") &&
              JSON.parse(localStorage.getItem("items")).filter(
                (i) => i.ammount > 0
              ).length == 0 && (
                <h1 className="font-bold text-4xl text-gray-500 ">
                  No Items Yet...
                </h1>
              )}
            <ul className="flex gap-10 flex-wrap">
              {cartItems.length > 0 && items}
            </ul>
          </div>
          <div className="cart flex-[2]">
            <CartCheckOut />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
