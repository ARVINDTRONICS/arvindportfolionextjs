import { useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  backgroundColor?: string;
  textColor?: string;
  title?: string;
}

const NAV_LINKS = [
  {
    linkText: "skills",
    href: "#skills",
  },
  { linkText: "experience", href: "#experience" },
  { linkText: "projects", href: "#projects" },
  { linkText: "testimonials", href: "#testimonials" },
];

const Navbar: React.FC<NavbarProps> = ({ backgroundColor, textColor, title }) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <nav className="flex-col flex lg:flex-row top-0 justify-between bg-gradient-to-r from-orange-200 to-purple-300 ">
      <div className="w-full lg:w-1/2">
        <h1
          onClick={() => {
            window.location.reload();
          }}
          className=" text-black  text-md text-center lg:text-left my-2 lg:text-2xl lg:ml-24 lg:my-6 uppercase font-medium   hover:cursor-pointer "
        >
          Arvind Kumar Thoppe
        </h1>
      </div>
      <div className="text-black flex justify-evenly w-full lg:w-1/2 lg:mx-6 lg:my-6">
        {NAV_LINKS.map((eachLink) => {
          return (
            <div className="flex flex-col py-3 justify-center items-center">
              <Link key={eachLink.linkText} href={eachLink.href} className="">
                <span className="tracking-widest md:block text-xs lg:text-sm  font-bold uppercase">{eachLink.linkText}</span>
              </Link>

              {isMounted && window.location.hash === eachLink.href && <div className="w-1/2  border border-white"></div>}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
