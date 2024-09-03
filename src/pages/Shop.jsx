import Header from "../components/header/Header";
import Footer from "../components/footer/Footer.jsx";
import Products from "../components/products/Products.jsx";

function Shop() {
  return (
    <>
      <Header />
      <div className="products -mt-[100px] mobile:-mt-[40px] mb-40">
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default Shop;
