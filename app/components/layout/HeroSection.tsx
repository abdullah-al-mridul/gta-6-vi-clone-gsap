import Image from 'next/image';
import React from 'react';
import HeroBG from '@/public/images/hero-bg.webp';
import HeroText from '@/public/images/hero-text.webp';
import HeroWatchTrailer from '@/public/images/watch-trailer.png';
import HeroPlay from '@/public/images/play.png';
import ComingSoon from './ComingSoon';

const HeroSection = () => {
    return (
        <section className="hero-section">
            {/* <div className=" size-full mask-wrapper"> */}
            <Image src={HeroBG} alt="hero" placeholder="blur" blurDataURL={HeroBG.blurDataURL} className=" scale-out" />
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
            {/* </div> */}
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
