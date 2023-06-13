import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Power3 } from 'gsap';
import './about.css';

gsap.registerPlugin(ScrollTrigger)
export default function About() {
    useEffect(() => {

        gsap.fromTo('.heading', { opacity: 0 }, { opacity: 1, duration: 1 })

        const anim1 = gsap.fromTo('.abouttheme', {autoAlpha:0, y: '50%'}, {autoAlpha:1, y: '0%'})
        const anim2 = gsap.fromTo('.aboutted', {autoAlpha:0, y: '50%'}, {autoAlpha:1, y: '0%'})
        const anim3 = gsap.fromTo('.abouttedxdavv', {autoAlpha:0, y: '50%'}, {autoAlpha:1, y: '0%'})
        
        // ScrollTrigger.create({
        //     trigger: '.abouttheme',
        //     start: '70% 70%',
        //     
        //     // animation: anim1,
        //     // toggleActions: 'play none none none'
        //     onEnter: () => {
        //          gsap.fromTo('.abouttheme', {autoAlpha:0, y: '50%'}, {autoAlpha:1, y: '0%'})
        
        //     }
        // })
        // ScrollTrigger.create({
        //     trigger: '.aboutted',
        //     start: 'center 80%',
        //     
        //     // animation: anim1,
        //     // toggleActions: 'play none none none'
        //     onEnter: () => {
        //         gsap.fromTo('.aboutted', {autoAlpha:0, y: '50%'}, {autoAlpha:1, y: '0%'})
                
        //     }
        // })
        // ScrollTrigger.create({
        //     trigger: '.abouttedxdavv',
        //     start: '70% 70%',
        //     
        //     // animation: anim1,
        //     // toggleActions: 'play none none none'
        //     onEnter: () => {
        //         gsap.fromTo('.abouttedxdavv', {autoAlpha:0, y: '50%'}, {autoAlpha:1, y: '0%'})
        
        //     }
        // })
        // ScrollTrigger.create({
        //     trigger: '.aboutted',
        //     animation: anim2,
        //     start: 'top 70%',
        //     toggleActions: 'play none none none'
        // })
        // ScrollTrigger.create({
        //     trigger: '.abouttedxdavv',
        //     animation: anim3,
        //     start: 'top 70%',
        //     toggleActions: 'play none none none'
        // })
        
    }, [])

    const style = {
        backgroundImage: `url('./images/starrybg.jpg')`,
        backgroundRepear: 'no-repeat',
        backgroundSize: 'cover',
    }
    return (
        <>
           <div className='aboutus' style={style} >
                <div className='aboutcontent'>
                <h2 className='heading whitetext text'> ABOUT THEME </h2>
                <p className='whitetext abouttheme'>
                The theme  "Evolve" for TEDxDAVV 2023 is all about embracing change and growth. Whether it's the evolution of technology, ecology, or culture, even in the face of uncertainty and adversity. It's about recognizing that evolution is not always a smooth or predictable process, but that it can lead to new opportunities and insights if we approach it with an open mind and a willingness to learn.
                </p>

                <h2 className='whitetext heading text'> ABOUT TEDx DAVV</h2>
                <p className='whitetext abouttedxdavv'>
                The theme  "Evolve" for TEDxDAVV 2023 is all about embracing change and growth. Whether it's the evolution of technology, ecology, or culture, even in the face of uncertainty and adversity. It's about recognizing that evolution is not always a smooth or predictable process, but that it can lead to new opportunities and insights if we approach it with an open mind and a willingness to learn.
                </p>

                <h2 className='whitetext heading text'> ABOUT TED</h2>
                <p className='whitetext aboutted'>
                The theme  "Evolve" for TEDxDAVV 2023 is all about embracing change and growth. Whether it's the evolution of technology, ecology, or culture, even in the face of uncertainty and adversity. It's about recognizing that evolution is not always a smooth or predictable process, but that it can lead to new opportunities and insights if we approach it with an open mind and a willingness to learn.
                </p>

                </div>
                <img src='./images/aboutusbg.png' alt='thoughts flow' className='flow'/>
           </div>
                
        </>
    )
}