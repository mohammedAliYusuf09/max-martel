"use client";

import React, { useRef, useState, MouseEvent } from "react";

interface BlackButtonProps {
  children: React.ReactNode;
}

const BlackButton: React.FC<BlackButtonProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Type-safe ref for the button

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;

    if (button) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left; // X coordinate relative to the button
      const y = e.clientY - rect.top;  // Y coordinate relative to the button

      button.style.setProperty("--x", `${x}px`);
      button.style.setProperty("--y", `${y}px`);
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-black px-3 py-2 rounded-md border border-gray-400 text-white relative overflow-hidden cursor-pointer"
    >
      {children}
      {isHovered && (
        <span
          className="pointer-events-none absolute inset-0 rounded-md"
          style={{
            background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(112, 103, 103, 0.6) 0%, transparent 50%)`,
          }}
        />
      )}
    </button>
  );
};

export default BlackButton;