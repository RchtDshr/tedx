import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Power3 } from 'gsap';
gsap.registerPlugin(ScrollTrigger)

export default function SecondPg() {
    // let t1 = gsap.timeline({ defaults: { duration: 1 } })

    // const t1 = useRef(null); // create a ref for the root level element (for scoping)
    // const circle = useRef();

    // useEffect(() => {
        // const el = t1.current
        // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        // let ctx = gsap.context(() => {
            // t1.current = gsap.timeline()
            // const t1 = gsap.timeline({ defaults: { duration: 1.5 } })
            // t1.fromTo(".leftbg", { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 })
            // t1.fromTo(".rightbg", { y: "-130%" }, { y: "0%" })
            // t1.fromTo(".audience", { opacity: 0 }, { opacity: 1 })
    //         gsap.from(el, {
    //             x: 1000, duration: 2, ease: "easeInOut",
    //             scrollTrigger: {
    //                 trigger: ".second",
    //                 start: "top center",
    //                 end: "top 100px",
    //                 ease: 'ease-in',
    //                 markers: true,
    //             }
    //         })

    //     }); // <- IMPORTANT! Scopes selector text

    //     return () => ctx.revert(); // cleanup

    // }, []); // <- empty dependency Array so it doesn't re-run on every render

    // useEffect(() => {
    //     // gsap.set('.second', {opacity:0})
    //     ScrollTrigger.create({
    //         trigger: ".second",
    //         scrub: 1,
    //         start: "top 50%",
    //         end: "top 100px",
    //         ease: 'ease-in',
    //         markers: true,
    //         onEnter: () => {
    //             // const t = gsap.timeline({ defaults: { duration: 1 } })
    //             gsap.fromTo(".leftbg", {opacity:0 ,x: "-100%"}, {x: "0%",autoAlpha: 1, duration: 2 })
    //             gsap.fromTo(".rightbg", {autoAlpha:0, x: "100%"}, { x: "0%", autoAlpha: 1, duration: 2 })
    //             gsap.fromTo([".chimp", ".guy"], {autoAlpha:0, y: "100%"}, { y: "0%", autoAlpha: 1, duration: 2 })
    //             gsap.fromTo(".audience", {autoAlpha:0, x: "-100%"}, { x: "0%", autoAlpha: 1, duration: 1.5 })
    //             gsap.fromTo(".hands", {autoAlpha:0, x: "100%"}, { x: "0%", autoAlpha: 1, duration: 2 })
    //             gsap.fromTo(".choices", {autoAlpha:0, x: "1000%"}, { x: "0%", autoAlpha: 1, duration: 2 })
    //             gsap.fromTo(".voices", {autoAlpha:0, x: "-1000%"}, { x: "0%", autoAlpha: 1, duration: 2 })
    //             gsap.fromTo(".evolve", {autoAlpha:0, y: "-1000%"}, { y: "0%", autoAlpha: 1, duration: 2 })
    //             gsap.fromTo(['.laser', '.rainbow', '.butterflies'], {autoAlpha:0}, {autoAlpha: 1, duration: 2, delay:1 })
    //             gsap.fromTo(".moon", {autoAlpha:0, y: "-100%"}, { y: "0%", autoAlpha: 1, duration: 2,delay:1 })
    //             gsap.fromTo(".sun", {autoAlpha:0, y: "-100%"}, { y: "0%", autoAlpha: 1, duration: 2,delay:1 })
                
    //         }
                
    //     })

    // },[])

    return (
        <>
            <div className='first'></div>
            <div className='second'>
                <div className="background">
                    <img src="./images/darkleft.png" alt="left bg" className="leftbg" />
                    <img src="./images/lightbluebg.png" alt="rightbg" className="rightbg" />
                </div>


                <img src="./images/Audience.png" alt="Audience" className="audience" />


                <div className="sunmoon">
                    <img src="./images/sun.png" alt="sun" className="sun" />
                    <img src="./images/moon.png" alt="moon" className="moon" />
                </div>

                <div className="chimpbow">
                    <img src="./images/chimp.png" alt="chimp" className="chimp" />
                    <img src="./images/rainbow.png" alt="rainbow" className="rainbow" />
                </div>

                <img src="./images/choices.png" alt="choices" className="choices" />
                <img src="./images/voices.png" alt="voices" className="voices" />

                <div className="manlaser">
                    <img src="./images/guy.png" alt="guy" className="guy" />
                    <img src="./images/laser.png" alt="laser" className="laser" />
                </div>

                <div className='butterflies'>
                    <img src="./images/butterflyright.png" alt="butterflyright" className="butterflyright" />
                    <img src="./images/butterflyleft.png" alt="butterflyleft" className="butterflyleft" />
                </div>

                {/* <div className='theme'> */}
                <img src="./images/theme.png" alt="theme" className="evolve" />
                {/* </div> */}

                <div className='hands'>

                    <img src="./images/hands.png" alt="hands" className="hands" />
                </div>

            </div>
        </>
    )
}