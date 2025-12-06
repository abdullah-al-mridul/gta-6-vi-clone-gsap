'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface FullScreenMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
    const container = useRef<HTMLDivElement>(null);
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const rightPanelRef = useRef<HTMLDivElement>(null);
    const menuItemsRef = useRef<HTMLUListElement>(null);
    const navLinksRef = useRef<HTMLDivElement>(null);

    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useGSAP(
        () => {
            if (tlRef.current) {
                tlRef.current.kill();
            }

            if (isOpen) {
                tlRef.current = gsap.timeline();

                tlRef.current
                    .set(container.current, { display: 'flex' })
                    .to(leftPanelRef.current, { xPercent: 0, duration: 0.8, ease: 'power3.inOut' })
                    .to(rightPanelRef.current, { xPercent: 0, duration: 0.8, ease: 'power3.inOut' }, '<')
                    .fromTo(
                        navLinksRef.current?.children || [],
                        { y: -20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
                        '-=0.4'
                    )
                    .fromTo(
                        menuItemsRef.current?.children || [],
                        { y: 50, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' },
                        '-=0.2'
                    );
            } else {
                tlRef.current = gsap.timeline({
                    onComplete: () => {
                        gsap.set(container.current, { display: 'none' });
                    },
                });

                tlRef.current
                    .to(menuItemsRef.current?.children || [], {
                        y: 20,
                        opacity: 0,
                        duration: 0.3,
                        stagger: 0.05,
                        ease: 'power2.in',
                    })
                    .to(
                        navLinksRef.current?.children || [], // Animate children out
                        {
                            y: -20,
                            opacity: 0,
                            duration: 0.3,
                            stagger: 0.05,
                        },
                        '<'
                    )
                    .to(leftPanelRef.current, {
                        xPercent: -100,
                        duration: 0.6,
                        ease: 'power3.inOut',
                    })
                    .to(
                        rightPanelRef.current,
                        {
                            xPercent: 100,
                            duration: 0.6,
                            ease: 'power3.inOut',
                        },
                        '<'
                    );
            }
        },
        { dependencies: [isOpen], scope: container }
    );

    return (
        <div ref={container} className="fixed inset-0 z-50 hidden w-full h-full">
            {/* Left Panel */}
            <div
                ref={leftPanelRef}
                className="hidden md:flex md:w-1/2 h-full bg-gradient-to-br from-[#2b4162] to-[#12100e] items-center justify-center relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('/images/hero-bg.webp')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <img src="/images/hero-text.svg" alt="VI Logo" className="w-1/2 relative z-10 drop-shadow-2xl" />
            </div>

            {/* Right Panel */}
            <div
                ref={rightPanelRef}
                className="w-full md:w-1/2 h-full bg-[#0f1014] text-white flex flex-col p-6 md:p-12 relative"
            >
                {/* Top Nav */}
                <div className="hidden md:flex justify-between items-start mb-20">
                    <div ref={navLinksRef} className="flex gap-8 font-bold text-sm uppercase tracking-wide">
                        <button className="bg-white text-black px-6 py-2 rounded-full">People</button>
                        <button className="text-gray-400 hover:text-white transition-colors py-2">Places</button>
                        <button className="text-gray-400 hover:text-white transition-colors py-2">Trailers</button>
                        <button className="text-gray-400 hover:text-white transition-colors py-2">Downloads</button>
                    </div>
                </div>
                {/* Menu Items */}
                <div className="flex-1 flex items-center">
                    <ul
                        ref={menuItemsRef}
                        className="space-y-2 font-long text-4xl md:text-6xl uppercase tracking-tighter"
                    >
                        {[
                            'Jason Duval',
                            'Lucia Caminos',
                            'Cal Hampton',
                            'Boobie Ike',
                            "Dre'Quan Priest",
                            'Real Dimez',
                            'Raul Bautista',
                            'Brian Heder',
                        ].map((item) => (
                            <li key={item} className="overflow-hidden">
                                <a href="#" className="block hover:text-orange-200 transition-colors">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FullScreenMenu;
