'use client'
import { cocktailLists, mockTailLists } from '@/constants/constants';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Image from 'next/image';



export default function Cocktails() {
    useGSAP(()=>{
        const parallaxTimeline = gsap.timeline({
            ScrollTrigger:{
                 trigger:"#cocktails",
                 start:'top 30%',
                 end:'bottom 80%',
                 scrub:true,
            }
        })
        .from('#c-left-leaf',{
            x:-100,y:100
        })
        .from('#c-right-leaf',{
            x:100,y:100
        })
        
    })
  return (
    <>
    <section id="cocktails" className='noisy'>
    <Image id='c-left-leaf' src={'/images/cocktail-left-leaf.png'} alt = 'l leaf' height={200} width={200}/>
    <Image id='c-right-leaf' src={'/images/cocktail-right-leaf.png'} alt = 'r leaf' height={200} width={200}/>

    <div className="list">
        <div className=" md:ml-4 popular">
            <h2 className='font-bold font-sans text-amber-300 capitalize italic'>Most popular Cocktails</h2>
            <ul>

                {cocktailLists.map((drink)=>(
                    <li key={drink.name}>
                        <div className="md:me-28">
                            <h3>{drink.name}</h3>
                            <p>{drink.country } | {drink.detail}</p>
                        </div>
                        <span>{drink.price}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="md:mr-4 loved">
            <h2 className='font-bold font-sans text-amber-300 capitalize italic'>Most Loved Mocktails</h2>
            <ul>

                {mockTailLists.map((drink)=>(
                    <li key={drink.name}>
                        <div className="md:me-28">
                            <h3>{drink.name}</h3>
                            <p>{drink.country } | {drink.detail}</p>
                        </div>
                        <span>{drink.price}</span>
                    </li>
                ))}
            </ul>
        </div>

    </div>
    </section>
    </>
  )
}
