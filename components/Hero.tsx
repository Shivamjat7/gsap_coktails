"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import React from "react";


export default function Hero() {
    useGSAP(()=>{
        const heroSplit = new SplitText('.title',{  type:'chars,words' });
        const paragraphSplit = new SplitText('.subtitle',{  type:'lines' });

        heroSplit.chars.forEach((char)=>char.classList.add('text-gradient'));
        gsap.from(heroSplit.chars,{
            yPercent:100,
            duration:1,
            ease:'expo.out',
            stagger:0.06
        })
        gsap.from(paragraphSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1.8,
            ease:'expo.out',
            stagger:0.06,
            delay:1,
        })
    },[]);

  return (
    <section id="hero" className="noisy">
      <h1 className="title uppercase">Shivam Juice</h1>
      <Image
        className="w-auto h-auto left-leaf"
        src={"/images/hero-left-leaf.png"}
        alt="left leaf"
        height={200}
        width={200}
      />
      <Image
        className="w-auto h-auto right-leaf"
        src={"/images/hero-right-leaf.png"}
        alt="left right"
        height={200}
        width={200}
      />
      <div className="body">
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p>Cool. Crisp. Classic.</p>
            <p className="subtitle">
              Sip the Spirit <br /> of summer
            </p>
          </div>
          <div className="view-cocktails">
            <p className="subtitle">Ganne ka juice pilo bada glass 20 rupay jaldi yahan aayiye </p>
            <a href="#cocktails">View Cocktails</a>
          </div>
        </div>
      </div>
    </section>
  );
}
