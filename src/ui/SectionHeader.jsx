function SectionHeader(props) {
  return (
    <div className="head text-center">
      <h2 className="font-bold text-4xl dark:text-brandWhite">{props.title}</h2>
      <p className="text-sm text-gray-500">{props.slogan}</p>
    </div>
  );
}

export default SectionHeader;
