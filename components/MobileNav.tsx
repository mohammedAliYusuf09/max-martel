// components/MobileNav.js
"use client"; // For Next.js 13+ with App Router

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const openMenu = () => {
    setIsOpen(true);
    gsap.to(navRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
  };

  const closeMenu = () => {
    setIsOpen(false);
    gsap.to(navRef.current, { x: "-100%", duration: 0.5, ease: "power3.in" });
  };

  // Close the menu when clicking outside
  // useEffect(() => {
  //   const handleOutsideClick = (e) => {
  //     if (navRef.current && !navRef.current.contains(e.target)) {
  //       closeMenu();
  //     }
  //   };
    useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(e.target as Node)) {
          closeMenu();
        }
      };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      {/* Menu button */}
      <button onClick={openMenu} className="menu-button md:hidden">
        ☰
      </button>

      {/* Mobile navigation menu */}
      <nav
        ref={navRef}
        className="mobile-nav"
        style={{ transform: "translateX(-100%)" }}
      >
        <ul>
          <li>
          
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link href={"/about"} onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link href={"/services"} onClick={closeMenu}>Services</Link>
          </li>
          <li>
            <Link href={"/gallery"} onClick={closeMenu}>Gallery</Link>
          </li>
          <li>
            <Link href={"/contact"} onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Overlay when the menu is open */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      <style jsx>{`
        .menu-button {
          font-size: 1.5rem;
          color: #fff;
          padding: 0.5rem 1rem;
          border: none;
          cursor: pointer;
        }

        .mobile-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 250px;
          height: 100%;
          background: #222;
          padding: 2rem 1rem;
          z-index: 1000;
          color: #fff;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
        }

        .mobile-nav ul {
          list-style: none;
          padding: 0;
        }

        .mobile-nav li {
          margin-bottom: 1.5rem;
        }

        .mobile-nav a {
          color: #fff;
          text-decoration: none;
          font-size: 1.2rem;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 500;
        }

        @media (min-width: 768px) {
          .menu-button {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default MobileNav;
