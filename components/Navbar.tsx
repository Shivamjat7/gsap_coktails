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

    gsap.timeline({
        scrollTrigger:{
            trigger:'#hero',
            start:'top top',
            end:'bottom top',
            scrub:true,

        }
    }).to('.right-leaf',{y:200},0)
    .to('.left-leaf',{y:-200},0)
  },[]);
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <Image alt="logo" src={"/images/logo.png"} width={20} height={20} />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>{link.title}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
