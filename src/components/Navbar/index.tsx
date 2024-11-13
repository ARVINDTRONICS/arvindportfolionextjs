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
    <nav className="flex  top-0 justify-between bg-gradient-to-r from-orange-200 to-purple-300 ">
      <h1
        onClick={() => {
          window.location.reload();
        }}
        className="text-black text-2xl uppercase font-medium ml-32 my-6 hover:cursor-pointer"
      >
        Arvind Kumar Thoppe
      </h1>
      <div className="mx-6 my-6 text-black flex justify-evenly w-1/2">
        {NAV_LINKS.map((eachLink) => {
          return (
            <Link key={eachLink.linkText} href={eachLink.href} className="">
              <p className="hidden tracking-widest md:block text-sm  font-bold uppercase">{eachLink.linkText}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
