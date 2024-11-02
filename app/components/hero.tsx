export default function Hero(){
    return (
        <div
        className="hero min-h-1/2 h-[50vh]"
        style={{
            backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there and welcome to my website</h1>
                    <p className="mb-5">
                        Welcome to my portfolio! I’m a full-stack developer with a passion for creating dynamic and responsive web applications. Explore my work and projects here.
                    </p>
                </div>
            </div>
        </div>
    )}
