import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaCode } from "react-icons/fa";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        setOffset(window.innerHeight * 0.12); // Calculate 10vh in pixels
      };
  
      // Set initial offset
      handleResize();
  
      // Update offset on window resize
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        if(menuOpen === true) {
            setMenuOpen(false)
        } else {
            setMenuOpen(true)
        }
    }

    const linkClicked = () => {
        setMenuOpen(false)
    }

  const navLinks = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "SKILLS", link: "skills" },
    { name: "PROJECTS", link: "projects" },
    { name: "CONTACT", link: "contact" },
  ];
  return (
    <nav className="shadow h-[10vh] bg-background fixed w-full border-b-2 border-primary/20 z-[9999]">
      <div className="section flex justify-between my-auto place-items-center h-full">
        {/*===Logo===*/}
        <ScrollLink
          to={`home`}
          spy={true}
          smooth={true}
          offset={-offset}
          duration={500}
        >
            <FaCode className="text-4xl my-auto transition-transform duration-500 hover:rotate-360 text-primary cursor-pointer" />
        </ScrollLink>
        {/*===Nav Links===*/}
        <ul className={`grid md:flex gap-5 md:gap-10 bg-primary md:bg-transparent absolute md:static top-[10vh] left-0 w-[100%] md:w-auto p-10 md:p-0 transition-all ease-in-out duration-500 ${ menuOpen ? 'mt-0' : '-mt-[500px] md:mt-0' }`}>
            {navLinks.map((item, index) => (
                <ScrollLink 
                  key={index} 
                  to={item.link}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-offset}
                  duration={700}
                >
                    <li onClick={linkClicked} className="text-background md:text-primary cursor-pointer">{item.name}</li>
                </ScrollLink>
            ))} 
            <ModeToggle onClick={() => setMenuOpen(false)} className="hidden md:flex" />
        </ul>
        <div onClick={toggleMenu} className="rounded-md text-2xl p-2 border border-primary md:hidden text-primary ">
            { menuOpen ? <RiCloseLine /> : <RiMenu3Fill /> }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
