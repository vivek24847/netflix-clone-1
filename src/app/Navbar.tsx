import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
        window.removeEventListener("scroll");
    }
  }, []);
  return (
    <>
      <div className={show ? "navBlack" :"navbarWrapper"}>
        <img className="navLogo" src={"/logonetflix.png"} alt="logo" />
        <img className="navUser" src="/avatar.png" alt="avatar" />
      </div>
    </>
  );
};

export default Navbar;
