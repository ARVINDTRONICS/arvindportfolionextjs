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
  return (
    <div className="flex justify-between    shadow-md  ">
      <h1 className="text-black text-2xl uppercase font-medium ml-32 my-6 ">Arvind Kumar Thoppe</h1>
      <nav className="mx-6 my-6 text-black flex justify-evenly w-1/2">
        {NAV_LINKS.map((eachLink) => {
          return (
            <Link key={eachLink.linkText} href={eachLink.href} className="">
              <p className="hidden md:block hover:text-yellow-400 font-bold capitalize">{eachLink.linkText}</p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
