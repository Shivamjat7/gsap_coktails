import { featureLists, goodLists } from '@/constants/constants';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Image from 'next/image';
import React from 'react'
import { useMediaQuery } from 'react-responsive';

export default function Art() {
    const isMobile = useMediaQuery({maxWidth:767});
    useGSAP(()=>{
        const start =isMobile?'top 20%':'top top';
        const maskScrollTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#art',
                start,
                end:'bottom bottom',
                scrub:1.5,
                pin:true,


            }
        })
        .to('.will-fade',{
            opacity:0,
            stagger:0.2,
            ease:'power1.inOut'
        })
        .to('.masked-img',{
            scale:1.3,
            maskPosition:'center',
            maskSize:'400%',
            duration:1,
            ease:'power1.inOut'
        })
        .to('#masked-content',{
            opacity:1,
            delay:0.5,
            duration:1,
            ease:'power1.inOut'
        })
    })

  return (
    <div id='art'>
        <div className="container mx-auto h-full pt-20">
            <h2 className="will-fade">
                The ART
            </h2>
            <div className="content">
                <ul className="space-y-4 will-fade">
                    {
                        goodLists.map((feature,index)=>(
                            <li key={index} className="flex items-center  justify-start gap-2">
                                <Image src={'/images/check.png'} height={10} width={10} alt='check'/>
                                <p>{feature}</p>

                            </li>
                        ))
                    }
                </ul>
                <div className="cocktail-img">
                    <Image className='abs-center masked-img size-full object-contain' src={'/images/under-img.jpg'} alt='cocktail' width={400} height={400}/>
                </div>
                <ul className=' space-y-4 will-fade'>
                    {
                        featureLists.map((feature,index)=>(
                            <li key ={index} className='flex items-center justify-start gap-2'> 
                            <Image src={'/images/check.png'} height={10} width={10} alt='check'/>
                                <p className='md:w-fit w-60'>{feature}</p>
                            </li>
                        ))
                    }
                </ul>
                
            </div>
            <div className="masked-container">
                <h2 className="will-fade space-y-0">Sip-Worthy Perfection</h2>
                <div id="masked-content">
                    <h3>Made with Craft , Poured with Passion</h3>
                    <p>This isn't just a  drink . It's a carefully crafted moment made just for  you.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
