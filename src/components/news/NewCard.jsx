function NewCard({ data }) {
  return (
    <div className="new-card flex-1   min-w-[300px]">
      <div className=" h-[170px] overflow-hidden rounded-xl">
        <img
          className="hover:blur-[1px] hover:scale-105 transition"
          src={data.img}
        />
      </div>
      <p className="text-sm text-gray-500 mt-1">{data.date}</p>
      <h3 className="font-bold text-lg my-1 dark:text-brandWhite">
        {data.title}
      </h3>
      <p className="text-gray-500 text-sm leading-5">{data.content}</p>
    </div>
  );
}

export default NewCard;
