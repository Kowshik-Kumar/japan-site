"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-0 hidden h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(247,197,205,0.35),rgba(247,197,205,0))] blur-2xl md:block"
      style={{
        left: position.x - 128,
        top: position.y - 128,
        transition: "left 220ms ease-out, top 220ms ease-out",
      }}
    />
  );
}
