import "./Hero.css";
import propTypes from "prop-types";
export default function HeroCard(props) {
  return (
    <div className="hero-card">
      <div className="content">
        <div data-aos="fade-left" className="title-one dark:text-brandWhite">
          {props.t1}
        </div>
        <div data-aos="fade-left" className="title-two dark:text-brandWhite">
          {props.t2}
        </div>
        <div
          data-aos="fade-left"
          className="title-three text-white dark:text-gray-500"
        >
          {props.t3}
        </div>
        <button className=" bg-primary" data-aos="zoom-out">
          Shop By Category
        </button>
      </div>
      <div className="image" data-aos="zoom-in">
        <img src={props.img} />
      </div>
    </div>
  );
}
HeroCard.propTypes = {
  t1: propTypes.string,
  t2: propTypes.string,
  t3: propTypes.string,
  img: propTypes.string,
};
