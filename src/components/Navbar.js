import './navbar.css'
import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Power3 } from 'gsap';
gsap.registerPlugin(ScrollTrigger)
export default function Navbar() {
    return (
        <div className='navbar'>
            {/* <ul class="ul1">
                <li><img src="./images/brush.png" alt="Home"/></li>
                <li><img src="./images/brush.png" alt="About"/></li>
                <li><img src="./images/brush.png" alt="Contact"/></li>
                <li><img src="./images/brush.png" alt="Contact"/></li>
            </ul> */}
            <ul class="ul2">
                <li><a href="/">  HOME</a></li>
                <li><a href="/aboutus">  ABOUT</a></li>
                <li><a href="/gallery">  GALLERY</a></li>
                <li><a href="/contact">  CONTACT</a></li>
            </ul>
        </div>
    )
}