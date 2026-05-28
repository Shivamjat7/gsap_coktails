import { socials } from "@/constants/constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function contact() {
    useGSAP(()=>{
    const titleSplit = SplitText.create('#contact h2',{type:'char words'});
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:'#contact',
            start:'top 40%',
            scrub:true
            
        },
        ease:'power1.inOut'
    })
    .from(titleSplit.words,{
        opacity:0,
        yPercent:100,
        stagger:0.03,
    })
    .from('#contact h3',{
        opacity:0,
        yPercent:100,
        stagger:0.03,
    })
    .to('#f-right-leaf',{
        y:100,duration:1,ease:'power1.inOut'
    })
    .to('#f-left-leaf',{
        y:100,duration:1,ease:'power1.inOut'
    })


    },[])
    

  return (
    <footer id="contact">

      <Image
        src={"/images/footer-right-leaf.png"}
        alt="leaf-right"
        id="f-right-leaf"
        width={200}
        height={200}
        className="w-auto h-auto"
      />
      <Image
        src={"/images/footer-drinks.png"}
        alt="footer drink"
        
        width={400}
        height={400}
        className="drink-img w-auto h-auto "
      />
      <Image
        src={"/images/footer-left-leaf.png"}
        alt="leaf-right"
        id="f-left-leaf"
        width={200}
        height={200}
        className="w-auto h-auto"
      />
      <div className="content">
        <h2>Where to find Us</h2>
      
      <div>
        <h3>
            Visit Our Bar
        </h3>
        <p>Behind PMC ,MNIT Jaipur, 302017 Rajasthan</p>
      </div>
      <div>
        <h3>Contact Us</h3>
        <p>7974161807</p>
        <p>shivamjat531@gmail.com</p>
      </div>
      <div className="flex items-center justify-center"><h3>Open Every Day <span className="text-amber-300 text-3xl">24x7</span></h3></div>
      <div>
        <h3>
            Socials
        </h3>
        <div className="flex-center scale-150 gap-5">
            {socials.map((social,index)=>(
                <Link href={social.url} key={index} aria-label={social.name}>
                    <Image src={social.icon} className="w-auto h-auto" alt="social img" width={200} height={200}/>
                    
                </Link>
            ))}
        </div>
      </div>
      </div>
    </footer>
  );
}
