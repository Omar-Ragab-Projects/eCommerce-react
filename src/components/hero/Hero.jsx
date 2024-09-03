import Slider from "react-slick";
import HeroCard from "./HeroCard";
import headphone from "./../../assets/headphone.png";
import vr from "./../../assets/vr.png";
import macbook from "./../../assets/macbook.png";
import "./Hero.css";
const heroData = [
  {
    titleOne: "Beats Solo",
    titleTwo: "Wireless",
    titleThree: "HEADPHONE",
    imageSrc: headphone,
  },
  {
    titleOne: "Beats Solo",
    titleTwo: "Wireless",
    titleThree: "VIRTUAL",
    imageSrc: vr,
  },
  {
    titleOne: "Beats Solo",
    titleTwo: "Wireless",
    titleThree: "LAPTOPS",
    imageSrc: macbook,
  },
];

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="hero container rounded-2xl ">
      <Slider {...settings}>
        {heroData.map((item, i) => {
          return (
            <HeroCard
              key={i}
              t1={item.titleOne}
              t2={item.titleTwo}
              t3={item.titleThree}
              img={item.imageSrc}
            />
          );
        })}
      </Slider>
    </div>
  );
}
