// components/MouseMoveAnimation.js
"use client"; // For Next.js 13+ with App Router

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MouseMoveAnimation = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(circleRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <svg width="100px" height="100px" style={{ position: "absolute", top: 0, left: 0 }}>
      <circle ref={circleRef} cx="20" cy="20" r="10" fill="blue" z={100} />
    </svg>
  );
};

export default MouseMoveAnimation; 