'use client';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react';
import HeroBG from '@/public/images/hero-bg.webp';
import HeroText from '@/public/images/hero-text.webp';
import HeroWatchTrailer from '@/public/images/watch-trailer.png';
import HeroPlay from '@/public/images/play.png';
import ComingSoon from './ComingSoon';
import { useMaskSettings } from '@/constants';

const HeroSection = () => {
    const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();

    useGSAP(() => {
        gsap.set('.mask-wrapper', {
            maskPosition: initialMaskPos,
            maskSize: initialMaskSize,
        });

        gsap.set('.mask-logo', {
            marginTop: '-100vh',
            opacity: 0,
        });

        gsap.set('.entrance-message', {
            marginTop: '0vh',
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                scrub: 2.5,
                end: '+=200%',
                pin: true,
            },
        });

        tl.to('.fade-out', {
            opacity: 0,
            ease: 'power1.inOut',
        })

            .to('.scale-out', {
                scale: 1,
                ease: 'power1.inOut',
            })

            .to(
                '.mask-wrapper',
                {
                    // maskPosition: maskPos,
                    maskSize: maskSize,
                    ease: 'power1.inOut',
                },
                '<'
            )

            .to('.mask-wrapper', {
                opacity: 0,
            })

            .to(
                '.overlay-logo',
                {
                    opacity: 1,
                },
                '<'
            )

            .to(
                '.entrance-message',
                {
                    duration: 1,
                    ease: 'power1.inOut',
                    maskImage: 'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)',
                },
                '<'
            );
    });

    return (
        <section className="hero-section">
            <div className=" size-full mask-wrapper">
                <Image
                    src={HeroBG}
                    alt="hero"
                    placeholder="blur"
                    blurDataURL={HeroBG.blurDataURL}
                    className=" scale-out"
                />

                <Image
                    src={HeroText}
                    alt="hero-text"
                    placeholder="blur"
                    blurDataURL={HeroText.blurDataURL}
                    className=" fade-out title-logo"
                />

                <Image
                    src={HeroWatchTrailer}
                    alt="hero-trailer"
                    placeholder="blur"
                    blurDataURL={HeroWatchTrailer.blurDataURL}
                    className=" fade-out trailer-logo"
                />

                <div className="play-img fade-out">
                    <Image
                        src={HeroPlay}
                        alt="hero-play"
                        placeholder="blur"
                        blurDataURL={HeroPlay.blurDataURL}
                        className="  w-7 ml-1"
                    />
                </div>
            </div>

            <div>
                <img src="/images/big-hero-text.svg" alt="logo" className="size-full object-cover mask-logo" />
            </div>

            <div className=" fake-logo-wrapper">
                <img src="/images/big-hero-text.svg" alt="logo" className="overlay-logo" />
            </div>

            <ComingSoon />
        </section>
    );
};

export default HeroSection;
