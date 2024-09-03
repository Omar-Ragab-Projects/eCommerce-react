import { FiSearch } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import "./header.css";
import Logo from "../../ui/Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiMenuBurger } from "react-icons/ci";
import { useEffect, useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const cartItems = useSelector((state) => state.cartItems.value);
  useEffect(() => {}, [cartItems]);
  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Shop",
      path: "/shop",
    },
    {
      id: 3,
      name: "About",
      path: "#about",
    },
    {
      id: 4,
      name: "Blogs",
      path: "#blogs",
    },
  ];
  // Map Links In List Items
  const mapLinks = navLinks.map((link) => {
    return (
      <li
        key={link.id}
        className="maxlg:px-10 maxlg:py-2 lg:hover:border-b transition lg:opacity-75 lg:hover:opacity-100"
      >
        <Link to={link.path} href={link.path}>
          {link.name}
        </Link>
      </li>
    );
  });

  function handleDarkMode() {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", document.documentElement.className);
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    // Site Header
    <div className="header sticky top-0 z-20 transition-colors text-lg mb-2 py-4 bg-white dark:bg-bgDark dark:text-brandWhite">
      <div className="container flex justify-between  items-center">
        {/* Site Logo */}
        <div className="flex items-center gap-4">
          <Logo />
          <CiMenuBurger
            onClick={toggleMenu}
            className="block lg:hidden cursor-pointer "
          />
        </div>
        {/* Nav Links */}

        <ul
          style={showMenu ? { display: "block" } : null}
          className="nav-links gap-8 flex-1 ml-8 text-[16px] lg:!flex maxlg:hidden maxlg:absolute maxlg:-left-5 maxlg:top-16 maxlg:bg-primary maxlg:text-white maxlg:rounded maxlg:shadow "
        >
          {mapLinks}
        </ul>
        {/* Icons */}
        <div className="head-right flex items-center">
          {/* Search Bar */}
          <div className="search flex items-center">
            <input
              type="text"
              className="dark:text-bgDark "
              placeholder="Search..."
            />
            <FiSearch />
          </div>
          {/* Cart */}
          <Link to="/cart">
            <div
              className="cart mr-4 cursor-pointer relative "
              data-notifies={
                JSON.parse(localStorage.getItem("items")).filter(
                  (i) => i.ammount > 0
                ).length
              }
            >
              <FaCartShopping />
            </div>
          </Link>
          {/* Dark-Light Mode */}
          <div
            className="dark-light-mode cursor-pointer "
            onClick={() => handleDarkMode()}
          >
            <MdOutlineLightMode />
          </div>
        </div>
      </div>
    </div>
  );
}
