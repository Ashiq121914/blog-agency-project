import { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1706264337427-fbd7405c3483?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen">
      {/* Slider Images */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out slider-image"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 "></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-center mb-4">
          Unleash Your Creativity
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-center max-w-lg">
          Transform your ideas into reality with innovative solutions designed
          to empower your vision and make an impact.
        </p>
        <a
          href="#"
          className="inline-block bg-yellow-300 text-gray-800 py-2 px-6 rounded-lg text-lg font-semibold transition duration-300 hover:bg-yellow-400"
        >
          Start Your Journey
        </a>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full"
        onClick={() =>
          setCurrentImage(
            (prevImage) => (prevImage - 1 + images.length) % images.length
          )
        }
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full"
        onClick={() =>
          setCurrentImage((prevImage) => (prevImage + 1) % images.length)
        }
      >
        &#8594;
      </button>
    </section>
  );
};

export default Slider;
