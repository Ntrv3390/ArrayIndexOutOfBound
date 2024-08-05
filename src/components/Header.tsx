import Link from "next/link";

const Header = () => {
  return (
    <div className="flex fixed w-full  justify-center items-center font-bold p-2 bg-slate-800 text-white text-xl shadow-md">
      <Link href={"/"}>ArrayIndexOutOfBound</Link>
    </div>
  );
};

export default Header;
