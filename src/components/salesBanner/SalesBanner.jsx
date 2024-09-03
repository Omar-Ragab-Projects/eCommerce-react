function SalesBanner({ data }) {
  return (
    <div className="container">
      <div
        className={`sales-banner mt-40 relative px-8 py-16 gap-[40%] bg-primary text-brandWhite flex items-center justify-between rounded-[20px] mobile:text-center mobile:flex-col mobile:items-stretch mobile:py-4 mobile:mt-20`}
        style={{ backgroundColor: data.bgColor }}
      >
        <div className="discount w-1/3 mobile:w-full">
          <p className="">{data.discount}</p>
          <h2 className="font-bold text-7xl mobile:my-2 mobile:text-5xl">
            {data.title}
          </h2>
          <p>{data.date}</p>
        </div>
        <div className="photo absolute left-1/2 -translate-x-[55%] w-1/3 mobile:w-3/4 mobile:relative ">
          <img className="w-full mobile:m-auto" src={data.image} />
        </div>
        <div className="information w-1/3 mobile:w-full">
          <p className="font-bold text-2xl mb-2 mobile:text-xl">
            {data.productTitle1}
          </p>
          <p className="font-bold text-5xl mb-2 mobile:text-4xl">
            {data.productTitle2}
          </p>
          <p className="mb-6">{data.content}</p>
          <button
            className="rounded-full bg-brandWhite  py-3 px-4"
            style={{ color: data.bgColor }}
          >
            {data.btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SalesBanner;
