'use client'
import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger,SplitText);
export default function page() {
  
  useGSAP(()=>{
    gsap.to('.box',{
      x:200,
      duration:5,
      yoyo:true,
      ease:'bounce',
      rotate:90
    },[])
  })
  
  return (
    <div className="box flex  rounded-md bg-green-500 w-24 h-24"> hello gsap!</div>
  )
}
