import { FaCarSide, FaWallet } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import FeatureCard from "./FeatureCard";
import "./features.css";

const features = [
  {
    icon: <FaCarSide />,
    title: "Free Shipping",
    content: "Free Shipping On All Order",
  },
  {
    icon: <FaCheckCircle />,
    title: "Safe Money",
    content: "30 Days Money Back",
  },
  {
    icon: <FaWallet />,
    title: "Secure Payment",
    content: "All Payment Secure",
  },
  {
    icon: <BiSolidPhoneCall />,
    title: "Online Supoort 24/7",
    content: "Technical Support 24/7",
  },
];

function Features() {
  const featureCard = features.map((f, i) => {
    return (
      <FeatureCard key={i} icon={f.icon} title={f.title} content={f.content} />
    );
  });
  return (
    <div className="features">
      <div className="container flex gap-6 justify-between mt-20 flex-wrap ">
        {featureCard}
      </div>
    </div>
  );
}

export default Features;
