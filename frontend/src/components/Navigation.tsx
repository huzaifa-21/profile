"use client";
import { links } from "@/assets/assets";
import { Link } from "@/types/links";
import { useState } from "react";

const Navigation = () => {
  const [active, setActive] = useState<string>(links[0].label || "");
  const handleClick = (label: string) => {
    setActive(label);
  };
  return (
    <div className="links ">
      {links.map((link: Link, index: number) => {
        const isActive = link.label === active;
        return (
          <a
            onClick={() => handleClick(link.label)}
            href={link.href}
            id={link.label}
            key={index}
            className={`duration-300 mx-3 ${
              isActive
                ? "text-secondaryColor"
                : "text-white hover:text-secondaryColor"
            }`}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
};
export default Navigation;
