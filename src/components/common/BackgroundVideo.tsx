"use client";

import React, { useRef, useEffect } from "react";

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
      className="fixed inset-0 z-0 w-full h-full object-cover object-center pointer-events-none"
    >
      <source src="/assets/background-60.mp4" type="video/mp4" />
      <source src="/background-60.mp4" type="video/mp4" />
    </video>
  );
};

