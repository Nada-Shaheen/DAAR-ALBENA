"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  animation = "up",
  duration = 1000,
  delay = 0,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animations = {
    up: isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10",

    down: isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-10",

    left: isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-10",

    right: isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-10",

    fade: isVisible
      ? "opacity-100"
      : "opacity-0",

    zoom: isVisible
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={`
        ${className}
        ${animations[animation]}
        transition-opacity transition-transform
        ease-out
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}