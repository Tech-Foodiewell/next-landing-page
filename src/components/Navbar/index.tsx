import Image from "next/image";
import FoodiewellLogo from "../../assets/img/logo-foodiewell.svg";
import WhatsAppIcon from "../../assets/img/icon-whatsapp.svg";
import { nabvarLinks } from "./links";
import Dropdown from "../Dropdown";
import { useEffect, useRef, useState } from "react";
import WhatsAppButton from "../Button/CTA";
import CTAButton from "../Button/CTA";
import Link from "next/link";

const Navbar = () => {
  useEffect(() => {
    // adjust the background color when navbar is not scrolled yet
    const doc = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
      if (window.scrollY == 0) {
        doc?.classList.add("bg-white");
        doc?.classList.add("border");

        doc?.classList.remove("bg-transparent");
      } else {
        doc?.classList.add("bg-transparent");

        doc?.classList.remove("bg-white");
        doc?.classList.remove("border");
      }
    });
  });

  return (
    <nav
      id="navbar"
      className="transition-colors bg-white navbar sticky top-0 flex justify-between items-center px-12 py-8 shadow-2 border rounded-b-[16px] backdrop-blur-md z-50 hover:bg-white"
    >
      <Link href="/">
        <Image style={{ width: 103 }} src={FoodiewellLogo} alt="" />
      </Link>
      <div className="">
        {/* to render navbar links */}
        <div className="flex gap-x-16">
          {nabvarLinks.map((link, i) => (
            <Dropdown key={i} items={link} />
          ))}
        </div>
      </div>
      <CTAButton isOutlined={false}>
        <p className="flex">
          <Image src={WhatsAppIcon} alt="" className="mr-1" /> WhatsApp Kami
        </p>
      </CTAButton>
    </nav>
  );
};

export default Navbar;
