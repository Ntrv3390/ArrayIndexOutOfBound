import Link from "next/link";
import { Search, ExternalLink } from "lucide-react";

const Header = () => {
  return (
    <div className="flex fixed w-full px-3 justify-between items-center p-2 bg-slate-800 text-white shadow-md">
      <Link className="font-bold text-xl text-center" href={"/"}>
        ArrayIndexOutOfBound
      </Link>
      <div className="flex items-center justify-center w-[80rem]">
        <input
          type="text"
          placeholder="java, python, c++, js, php and more..."
          className="py-1 w-3/4 px-3 font-light text-slate-800 rounded-sm"
        />
        <button className="py-0 ml-[-3rem] px-3">
          <Search className="text-slate-800 h-5 w-5" />
        </button>
      </div>
      <ul className="flex items-center gap-3 justify-center ">
        <li className="py-1 px-3 rounded-sm">
          <Link className="hover:text-green-600" href={"/login"}>Home</Link>
        </li>
        <li className="py-1 px-3 rounded-sm">
          <Link className="hover:text-green-600 " href={"/login"}>About</Link>
        </li>
        <li className="py-1 px-3 rounded-sm">
          <Link className="hover:text-green-600 " href={"/login"}>Login</Link>
        </li>
        <li className="py-1 px-3 rounded-sm">
          <Link className="hover:text-green-600 " href={"/register"}>Register</Link>
        </li>
        <li className="bg-green-800 hover:bg-green-600 flex py-1 px-3 rounded-sm">
          <Link className="flex gap-2" href={"https://github.com/Ntrv3390/ArrayIndexOutOfBound"}>
            Contribute
            <ExternalLink className="w=5 h-5 text-white" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
