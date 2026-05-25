"use client";
import { navLinks } from "../constants/constants";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#00000030",
        backdropFilter: "blur(2px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );

    
  },[]);
  return (
    <nav className="px-2">
      <div>
        <a href="#home" className="flex items-center gap-2">
          <Image alt="logo" src={"/images/logo.png"} width={20} height={20} />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li className="hover:scale-105 hover:text-amber-200 active:scale-95 " key={link.id}>{link.title}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
