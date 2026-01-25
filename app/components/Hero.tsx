"use client";

import { useEffect, useState } from "react";

import backgroundImageUrl from "./background.jpg";

export default function Hero() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(backgroundImageUrl.src ?? backgroundImageUrl);
  }, []);

  return (
    <div
      data-testid="hero-container"
      className="hero min-h-1/3 bg-black bg-gradient-to-br from-slate-900 to-slate-700"
    >
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-l p-4 py-6 lg:py-12">
          <h1
            className="hero-text-mask-rotate mb-5 text-7xl font-black tracking-wider text-transparent bg-clip-text md:text-8xl lg:text-9xl hero-title"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Alex Sulea
          </h1>
          <p className="mb-5 text-2xl lg:text-3xl">
            I’m a full-stack developer with a passion for creating dynamic and
            responsive web applications.
          </p>
        </div>
      </div>
    </div>
  );
}
