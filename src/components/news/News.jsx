import SectionHeader from "../../ui/SectionHeader";
import newsData from "./../../data/newsData";
import NewCard from "./NewCard";
function News() {
  const allNews = newsData.map((n, i) => {
    return <NewCard key={i} data={n} />;
  });

  return (
    <div className="container mt-40 mobile:mt-20 mb-20" id="blogs" name="blogs">
      <SectionHeader title={"Recent News"} slogan={"Explore Our Blogs"} />
      <div className="news flex gap-10 flex-wrap justify-center mt-10">
        {allNews}
      </div>
    </div>
  );
}

export default News;
