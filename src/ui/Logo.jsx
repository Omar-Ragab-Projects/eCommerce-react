import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to={"/"}
      className="logo text-2xl text-primary tracking-[0.1em] font-bold cursor-pointer select-none"
    >
      OSHOP
    </Link>
  );
}

export default Logo;
