import "./productCard.css";
import propTypes from "prop-types";
import products from "./products";
import { useSelector, useDispatch } from "react-redux";
import { addItems } from "../../app/features/cart/cartItems";
import { useEffect } from "react";

function ProductCard({ data }) {
  const cartItems = useSelector((state) => state.cartItems.value);
  const dispatch = useDispatch();

  function addToCart(productID) {
    let product = products.filter((p) => p.id == productID);
    dispatch(addItems(product[0]));
    // localStorage.setItem("items", JSON.stringify(cartItems));
    // console.log();
  }

  return (
    <div
      className="product-card w-[300px] dark:text-brandWhite cursor-pointer relative"
      data-aos="fade-up"
      data-aos-delay={50 * data.id}
    >
      <div className="image relative">
        <img className="rounded" src={data.img} />
        <div className="popup z-10 bg-primary text-brandWhite font-bold py-3 px-4 rounded-full">
          <button onClick={() => addToCart(data.id)}>Add To Cart</button>
        </div>
      </div>
      <h3 className="font-bold">{data.title}</h3>
      <p>${data.price}</p>
    </div>
  );
}

ProductCard.propTypes = {
  img: propTypes.string,
  id: propTypes.number,
  title: propTypes.string,
  price: propTypes.string,
};

export default ProductCard;
