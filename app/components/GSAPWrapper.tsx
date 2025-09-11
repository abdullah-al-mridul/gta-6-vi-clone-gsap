"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const GSAPWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default GSAPWrapper;
