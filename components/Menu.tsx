"use client";
import { allCocktails } from "@/constants/constants";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Menu() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(()=>{
    gsap.from('#title',{opacity:0 ,yPercent:50,duration:1,ease:'power1.inOut'});
    gsap.from('.cocktail-img',{opacity:0,duration:1,xPercent:-100,ease:'power1.inOut'});
    gsap.from('.details h2',{yPercent:100,opacity:0,ease:'power1.inOut'})
    gsap.from('.details p',{yPercent:100,opacity:0,ease:'power1.inOut'})
    
    
  },[currentIndex])
  
  const totalCocktails = allCocktails.length;
  const goToSlide = (index: number) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
  

    setCurrentIndex(newIndex);
  };
  const getCocktailAt = (indexOffset:number) => {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };
  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <Image
        id="m-left-leaf"
        src={"/images/slider-left-leaf.png"}
        alt="left leaf"
        width={200}
        height={200}
        className="w-auto h-auto"
      />
      <Image
        id="m-right-leaf"
        src={"/images/slider-right-leaf.png"}
        alt="right leaf"
        width={200}
        height={200}
        className="w-auto h-auto"
      />
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              onClick={() => goToSlide(index)}
              key={cocktail.id}
              className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button
            className="text-right  "
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <span className="flex justify-end"><ArrowLeft /> </span>
          </button>
          <button
            className="text-left "
            onClick={() => goToSlide(currentIndex + 1)}
          >
            
            <span>{nextCocktail.name}</span> <ArrowRight />
          </button>
        </div>
        <div className="cocktail">
          <Image src={currentCocktail.image} alt="cocktail images" className="cocktail-img object-contain w-auto h-auto" width={600} height={600} />
        </div>
        <div className="recipe">
            <div className="info md:text-right" ref={contentRef}>
            <p className="text-center">Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
            </div>
        
        <div className="details">
            <h2 >{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
        </div>
        </div>
      </div>
    </section>
  );
}
