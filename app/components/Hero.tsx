"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    const [backgroundImage, setBackgroundImage] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            const response = await fetch(
                `https://api.unsplash.com/search/photos?query=chicago&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
            );
            const data = await response.json();
            const imageUrl = data.results[0]?.urls?.regular || "";
            setBackgroundImage(imageUrl);
        };

        fetchImage();
    }, []);

    return (
        <div
            data-testid="hero-container"
            className="hero min-h-1/2 h-[50vh]"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-l glass rounded-box p-4">
                    <h1 className="mb-5 text-5xl font-bold">Hello there and welcome to my website</h1>
                    <p className="mb-5">
                        Welcome to my portfolio! I’m a full-stack developer with a passion for creating dynamic and responsive web applications. Explore my work and projects here.
                    </p>
                </div>
            </div>
        </div>
    );
}
