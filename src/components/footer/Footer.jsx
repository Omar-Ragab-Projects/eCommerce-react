import Logo from "../../ui/Logo";
import { FaLocationArrow } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer bg-[#030712] text-brandWhite pt-14 pb-20">
      <div className="container flex justify-between flex-wrap gap-10 mobile:text-center mobile:justify-center">
        <div className="brand-information min-w-[300px]">
          <Logo />
          <p className="w-[200px] mobile:w-full mt-2 leading-6 text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            alias cum
          </p>
          <p className="my-4 text-gray-400">Made With &#x2665; By Omar.</p>
        </div>
        <div className="quick-links1 min-w-[300px]">
          <QuickLinks title="Important Links" />
        </div>
        <div className="quick-links2 min-w-[300px]">
          <QuickLinks title="Quick Links" />
        </div>
        <div className="social-media min-w-[300px]">
          <h3 className="font-bold text-xl">Address</h3>
          <p className="flex items-center gap-2 mt-2 mobile:justify-center">
            <FaLocationArrow />
            <span>Cairo, Egypt</span>
          </p>
          <p className="flex items-center gap-2 my-4 mobile:justify-center">
            <FaMobile />
            <span>+2010203040</span>
          </p>
          <div className="social flex items-center gap-3 text-2xl mobile:justify-center">
            <FaLinkedin className="hover:text-primary transition-colors cursor-pointer" />
            <FaFacebook className="hover:text-primary transition-colors cursor-pointer" />
            <FaInstagram className="hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickLinks({ title }) {
  return (
    <div className="quick">
      <h3 className="font-bold text-xl">{title}</h3>
      <ul className="text-gray-400 ">
        <li className="my-2">
          <a href="#" className="hover:text-brandWhite transition ">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-brandWhite transition">
            About
          </a>
        </li>
        <li className="my-2">
          <a href="#" className="hover:text-brandWhite transition">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-brandWhite transition">
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
