import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './whyus.css'
gsap.registerPlugin(ScrollTrigger)


export default function Whyus() {
    useEffect(() => {

        gsap.fromTo('.heading', { opacity: 0 }, { opacity: 1, duration: 1 })

        const anim1 = gsap.fromTo('.one', { autoAlpha: 0, x: '-100%' }, { autoAlpha: 1, x: '0%', duration: 1 })
        const anim2 = gsap.fromTo('.two', { autoAlpha: 0, x: '100%' }, { autoAlpha: 1, x: '0%', duration: 1 })
        const anim3 = gsap.fromTo('.three', { autoAlpha: 0, x: '-100%' }, { autoAlpha: 1, x: '0%', duration: 1 })
        const anim4 = gsap.fromTo('.four', { autoAlpha: 0, x: '100%' }, { autoAlpha: 1, x: '0%', duration: 1 })
        const anim5 = gsap.fromTo('.five', { autoAlpha: 0, x: '-100%' }, { autoAlpha: 1, x: '0%', duration: 1 })
        const anim6 = gsap.fromTo('.six', { autoAlpha: 0, x: '100%' }, { autoAlpha: 1, x: '0%', duration: 1 })

        ScrollTrigger.create({
            trigger: '.one',
            start: 'top 70%',
            animation: anim1,
            toggleActions: 'play none none none'
        })
        ScrollTrigger.create({
            trigger: '.three',
            animation: anim3,
            start: 'top 70%',
            toggleActions: 'play none none none'
        })
        ScrollTrigger.create({
            trigger: '.two',
            animation: anim2,
            start: 'top 70%',
            toggleActions: 'play none none none'
        })
        ScrollTrigger.create({
            trigger: '.four',
            animation: anim4,
            start: 'top 70%',
            toggleActions: 'play none none none'
        })
        ScrollTrigger.create({
            trigger: '.five',
            animation: anim5,
            start: 'top 70%',
            toggleActions: 'play none none none'
        })
        ScrollTrigger.create({
            trigger: '.six',
            animation: anim6,
            start: 'top 70%',
            toggleActions: 'play none none none'
        })
    }, [])

    return (
        <div className='whyus black whitetext'>
            <h2 className='heading'>WHY US?</h2>
            {/* <ul class="Words">
                <li class="Words-line">
                    <p>&nbsp;</p>
                    <p>Reasons</p>
                </li>
                <li class="Words-line">
                    <p>Reasons</p>
                    <p>To </p>
                </li>
                <li class="Words-line">
                    <p> To </p>
                    <p>Partner</p>
                </li>
                <li class="Words-line">
                    <p>Partner</p>
                    <p>With us</p>
                </li>
                <li class="Words-line">
                    <p>With us</p>
                    <p>&nbsp;</p>
                </li>
            </ul> */}
            <ul className='whyuspoints'>
                <li className='one'>Highly engaged audience</li>
                <li className='two'>Support an important cause</li>
                <li className='three'>Increase brand visibility</li>
                <li className='four'>Customized sponsorship packages</li>
                <li className='five'>Brand association with TEDx</li>
                <li className='six'>Positive brand image</li>
            </ul>
            {/* <img src='./images/partner.png' alt='partnership' className='partner' /> */}
        </div>
    )
}