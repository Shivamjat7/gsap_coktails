"use client";
import { cocktailLists, mockTailLists } from "@/constants/constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function Cocktails() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const bottomLeafTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#cocktails",
          start: "bottom 110%",
          end: " top top",
          scrub: true,
        },
      })
      .from("#c-l-leaf", {
        xPercent: -100,
        yPercent: 100,
      })
      .from("#c-r-leaf", {
        xPercent: 100,
        yPercent: 100,
      })
      .to(".cocktail-leaf", {
        scale: 1.05,
      });

       const leftmiddleLeafTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".middle-leaf",
          start: "top 80%",
          end: " top center",
          scrub: true,
          
        
        },
      })
      .to('#l-leaf',{
        rotate:-90,
        transformOrigin:'left bottom'
        
      })
       const rightmiddleLeafTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".middle-leaf",
          start: "top 80%",
          end: " top center",
          scrub: true,
          
        },
      })
      
      .to('#r-leaf',{
        rotate:90,
        transformOrigin:'right bottom'
        
      })

    const listTextTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".list",
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    listTextTimeline
      .from(".c-heading", {
        yPercent: -10,
        opacity: 0,
      })
      .from(".cocktail-item", {
        xPercent: -20,
        opacity: 0,
        stagger: 0.5,
      })
      .from(".m-heading", {
        yPercent: -10,
        opacity: 0,
      })
      .from(".mocktail-item", {
        xPercent: 20,
        opacity: 0,
        stagger: 0.5,
      });
  });
  return (
    <>
      <section id="cocktails" className="noisy">
        <Image
          id="c-l-leaf"
          className="md:w-[20%] cocktail-leaf bottom-1 left-1 absolute"
          src={"/images/cocktail-left-leaf.png"}
          alt="l leaf"
          height={200}
          width={200}
        />
        <Image
          id="c-r-leaf"
          className=" md:w-[20%] cocktail-leaf right-1  bottom-1 absolute"
          src={"/images/cocktail-right-leaf.png"}
          alt="r leaf"
          height={200}
          width={200}
        />
        .
        <Image
          id="l-leaf"
          className=" middle-leaf w-100 md:w-[40%] top-28 -left-5 z-40 absolute"
          src={"/images/left-leaf.png"}
          alt="l leaf"
          height={200}
          width={200}
        />
        <Image
          id="r-leaf"
          className=" middle-leaf w-100 md:w-[40%] -right-1 z-10 top-28 absolute"
          src={"/images/right-leaf.png"}
          alt="r leaf"
          height={200}
          width={200}
        />

        <div className="list capitalize">
          <div className=" md:ml-4 popular">
            <h2 className="c-heading font-modern-negra text-amber-200 capitalize ">
              Most popular Cocktails
            </h2>
            <ul>
              {cocktailLists.map((drink) => (
                <li className="cocktail-item" key={drink.name}>
                  <div className="md:me-28">
                    <h3>{drink.name}</h3>
                    <p>
                      {drink.country} | {drink.detail}
                    </p>
                  </div>
                  <span>{drink.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:mr-4 loved">
            <h2 className="m-heading font-modern-negra text-amber-200 capitalize ">
              Most Loved Mocktails
            </h2>
            <ul>
              {mockTailLists.map((drink) => (
                <li className="mocktail-item" key={drink.name}>
                  <div className="md:me-28">
                    <h3>{drink.name}</h3>
                    <p>
                      {drink.country} | {drink.detail}
                    </p>
                  </div>
                  <span>{drink.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
