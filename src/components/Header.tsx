import Link from "next/link";

const Header = () => {
  return (
    <div className="flex fixed w-full px-3 justify-between items-center p-2 bg-slate-800 text-white shadow-md">
      <Link className="font-bold text-xl" href={"/"}>ArrayIndexOutOfBound</Link>
      <div className="flex items-center justify-center w-[80rem] gap-3">
        <input type="text" placeholder="Enter your query..." className="py-1 w-3/4 px-3 font-light text-slate-800 rounded-md"/>
        <button className="py-0 ml-[-6rem] px-3 rounded-md bg-green-800">Search</button>
      </div>
      <ul className="flex items-center gap-3 justify-center ">
        <li className="py-1 px-3 rounded-md"><Link href={"/login"}>Home</Link></li>
        <li className="py-1 px-3 rounded-md"><Link href={"/login"}>About</Link></li>
        <li className="py-1 px-3 rounded-md"><Link href={"/login"}>Login</Link></li>
        <li className="py-1 px-3 rounded-md"><Link href={"/login"}>Register</Link></li>
        <li className="bg-green-800 py-1 px-3 rounded-md"><Link href={"https://github.com/Ntrv3390/ArrayIndexOutOfBound"}>Contribute</Link></li>
      </ul>
    </div>
  );
};

export default Header;
