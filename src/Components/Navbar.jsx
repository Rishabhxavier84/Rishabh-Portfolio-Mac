import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="images/logo.svg" alt="logo" />
        <p className="font-bold text-sm">Rishabh's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} className="icon" />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd D MMM h:mmA")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
