"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";


export default function Hero() {
      const videoRef = useRef<HTMLVideoElement|null>(null);

    
    const isMobile = useMediaQuery({maxWidth:767});

    useGSAP(()=>{
        const heroSplit = new SplitText('.title',{  type:'chars,words' });
        const paragraphSplit = new SplitText('.subtitle',{  type:'lines' });
        const linesSplit = new SplitText('.lines',{  type:'lines' });

        heroSplit.chars.forEach((char)=>char.classList.add('text-gradient'));
        const heroTimeline = gsap.timeline();
        heroTimeline.from(heroSplit.chars,{
            yPercent:100,
            duration:1,
            ease:'expo.out',
            stagger:0.06
        }).from('#shivam',{
          xPercent:-30,
          opacity:0,
          duration:1,
          ease:'bounce.out'
        })
        gsap.from(paragraphSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1.8,
            ease:'expo.out',
            stagger:0.3,
            delay:1,
        });
        gsap.from(linesSplit.lines,{
            opacity:0,
            xPercent:-50,
            duration:1.8,
            ease:'expo.out',
            stagger:0.06,
            delay:1.8,
        });

        gsap.timeline({
        scrollTrigger:{
            trigger:'#hero',
            start:'top top',
            end:'bottom top',
            scrub:true,

        }
    }).to('.right-leaf',{yPercent:100},0)
    .to('.left-leaf',{yPercent:-100},0)


    const startValue = isMobile?'top 50%':'center 60%';
    const endValue = isMobile?'165% top':'bottom top';

   //bg video animation
const video = videoRef.current;

if (!video) return;

video.pause();
video.currentTime = 0;

const createAnimation = () => {
  gsap.to(video, {
    currentTime: video.duration,

    ease: "none",

    scrollTrigger: {
      trigger: "video",
      start: startValue,
      end: endValue,
      scrub: true,
      pin: true,
    
    },
  });
};

if (video.readyState >= 1) {
  createAnimation();
} else {
  video.addEventListener(
    "loadedmetadata",
    createAnimation
  );
}





    },[]);

  return (
    <>
    <section id="hero" className="noisy ">
      <div className="flex-cente  absolute top-[18%] left-[32%] ">
       <div className="flex justify-start">
        <h2 id="shivam" className="font-modern-negra text-3xl text-gradient">Shivam's Special</h2>
       </div>
        
      </div>
      <h1 className="title uppercase"> Juice</h1>
      
      <Image
        className="w-auto md:w-[10%] h-auto left-leaf"
        src={"/images/hero-left-leaf.png"}
        alt="left leaf"
        height={200}
        width={200}
      />
      <Image
        className="w-auto md:w-[10%] h-auto right-leaf"
        src={"/images/hero-right-leaf.png"}
        alt="left right"
        height={200}
        width={200}
      />
      <div className="body">
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p className="lines">Cool. Crisp. Classic.</p>
            <p className="subtitle">
              Sip the Spirit <br /> of summer
            </p>
          </div>
          <div className="view-cocktails">
            <p className="subtitle">Ganne ka juice pilo bada glass 20 rupay jaldi yahan aayiye </p>
            <a href="#cocktails"  className="subtitle">View Cocktails</a>
          </div>
        </div>
      </div>
    </section>
    <div className="video  ">
    <video src="/videos/output.mp4" ref={videoRef} muted playsInline preload="auto"></video>
    </div>
    </>
  );
}
