"use client";
import style from "./Header.module.css";

import Link from "next/link";
import { useContext } from "react";
import { Context } from "../hooks/ContextFilm";

const NavItem = ({ label, id }) => {
  const { currentMenu, setCurrentMenu } = useContext(Context);

  const handleClickMenu = (e) => {
    setCurrentMenu(e.target.id);
  };
  return (
    <li
      className={`${style.menu} ${currentMenu === id ? style.currentMenu : ""}`}
      onClick={(e) => handleClickMenu(e)}
    >
      <Link href={`/film/${id}`} id={id}>
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
