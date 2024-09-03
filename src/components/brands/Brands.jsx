import brandsData from "./../../data/brandsData";

function Brands() {
  const allBrands = brandsData.map((b, i) => {
    return <img className="opacity-60 " key={i} src={b.img} />;
  });
  return (
    <div className="brands bg-gray-200 dark:bg-gray-700 py-5">
      <div className="container flex justify-evenly items-center flex-wrap gap-10 mobile:justify-center  ">
        {allBrands}
      </div>
    </div>
  );
}

export default Brands;
