'use client'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import React from "react";

export default function About() {
    useGSAP(()=>{
        const titleSplit = SplitText.create('.about-title',{type:'words char'});
        const subcontentSplit = SplitText.create('.sub-content',{type:'words char lines'});
        const aboutScrollTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#about',
                start:'top center',

            }
        })
        .from (titleSplit.words,{
            opacity:0,
            duration:1,
            yPercent:100,
            ease:'expo.out',
            stagger:0.05,
        })
        .from('.top-grid div, .bottom-grid div',{
            opacity:0,
            duration:1,
            ease:'power1.inOut',
            stagger:0.04,

        },'-=0.5')
        .from(subcontentSplit.lines,{
            xPercent:20,
            opacity:0,
            ease:'back.out',
            stagger:0.05,
            duration:1

        })
    },[])
  return (
    <>
      <div id="about">
        <div className="content">
          <div className="md:col-span-8 md:p-4">
            <div className="badge  hover:bg-black hover:text-white hover:border border active:scale-95 ">
              Best Cocktails
            </div>
            <h2 className="about-title">Where every detail matters -from muddle to garnish</h2>
          </div>
          <div className="sub-content ">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio fugiat magni, fugit officiis amet qui deleniti omnis
              ipsum quidem aspernatur iste eos quibusdam assumenda harum nemo ex
              voluptatum enim rem.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +10000 customers
              </p>
            </div>
          </div>
        </div>
        <div className="top-grid">
          <div className="md:col-span-3">
            <div className="noisy" />
            <Image
              src={"/images/abt1.png"}
              alt="grid-image-1"
              width={200}
              height={200}
            />
          </div>
          <div className="md:col-span-6">
            <div className="noisy" />
            <Image
              src={"/images/abt2.png"}
              alt="grid-image-1"
              width={200}
              height={200}
            />
          </div>
          <div className="md:col-span-3">
            <div className="noisy" />
            <Image
              src={"/images/abt5.png"}
              alt="grid-image-1"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="bottom-grid">
          <div className="md:col-span-8">
            <div className="noisy" />
            <Image
              src={"/images/abt3.png"}
              alt="grid-image-1"
              width={200}
              height={200}
            />
          </div>
          <div className="md:col-span-4">
            <div className="noisy" />
            <Image
              src={"/images/abt4.png"}
              alt="grid-image-1"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
}
