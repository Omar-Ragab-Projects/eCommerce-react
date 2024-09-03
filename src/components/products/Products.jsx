import SectionHeader from "../../ui/SectionHeader";
import ProductCard from "./ProductCard";
import products from "./products";
function Products() {
  const eachProduct = products.map((p, i) => {
    return <ProductCard key={i} data={p} />;
  });
  return (
    <div className="container  mt-40 mobile:mt-20">
      <div className="products">
        <SectionHeader title={"Our Products"} slogan={"Explore Our Products"} />
        <div className="our-products flex flex-wrap justify-center mt-10 gap-[40px]">
          {eachProduct}
        </div>
      </div>
    </div>
  );
}

export default Products;
