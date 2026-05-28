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

    const textTween= gsap.timeline();
    textTween.from('.nav-title',{
      yPercent:-50,
      duration:1,
      delay:1,
      opacity:0
    }).from('.nav-links',{
      yPercent:-30,
      duration:0.5,
      stagger:0.1,
      opacity:0,

    })

    
  },[]);
  return (
    <nav className="px-2">
      <div>
        <a href="#home" className=" nav-title flex items-center gap-2">
          <Image alt="logo" src={"/images/logo.png"} width={20} height={20} />
          <p className="">Minti Jamun</p>
        </a>
        <ul className="">
          {navLinks.map((link) => (
            <li  className=" nav-links hover:scale-105 hover:text-amber-200 active:scale-95 " key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
