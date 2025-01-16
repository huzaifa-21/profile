import { links } from "@/assets/assets";
import { Link } from "@/types/links";

const Navigation = () => {
  return (
    <div className="links ">
      {links.map((link: Link, index: number) => {
        return (
          <a
            href={link.href}
            id={link.label}
            key={index}
            className="duration-300 mx-3 hover:text-secondaryColor "
            
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
};
export default Navigation;
