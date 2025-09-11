import React from 'react';
import Logo from '@/public/images/logo.webp';
import Image from 'next/image';
import PSLogo from '@/public/images/ps-logo.svg';
import XLogo from '@/public/images/x-logo.svg';

const ComingSoon = () => {
    return (
        <section className=" entrance-wrapper">
            <div className=" h-full col-center gap-10">
                <Image
                    src={Logo}
                    alt="logo"
                    className="entrance-logo"
                    placeholder="blur"
                    blurDataURL={Logo.blurDataURL}
                />

                <div className=" text-wrapper">
                    <h3 className=" gradiant-title">
                        Coming <br /> May 26th <br /> 2026
                    </h3>
                </div>

                <div className="flex-center gap-10">
                    <img src={PSLogo} alt="logo" className="md:w-32 w-20" />
                    <img src={XLogo} alt="logo" className="md:w-52 w-40" />
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;
