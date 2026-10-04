"use client";
import { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaDumbbell,
} from "react-icons/fa";

const slides = [
  {
    image: "/gyma.jpeg",
    subtitle: "FITNESS • STRENGTH • DISCIPLINE",
    title: "Build Your Strongest Self",
    description:
      "Train harder, become stronger and achieve your fitness goals with Fitness4U Club.",
  },
  {
    image: "/gymb.jpg",
    subtitle: "PREMIUM FITNESS EXPERIENCE",
    title: "Train Hard. Stay Strong.",
    description:
      "Modern equipment, powerful workouts and a motivating environment for everyone.",
  },
  {
    image: "/gymc.jpg",
    subtitle: "YOUR FITNESS JOURNEY STARTS HERE",
    title: "Stronger Every Single Day",
    description:
      "Start your transformation today and take your fitness to the next level.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Next Slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-black sm:h-[650px] lg:h-[720px]">
      
      {/* ================= SLIDES ================= */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current
              ? "z-10 translate-x-0 opacity-100"
              : "z-0 translate-x-4 opacity-0"
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Left Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

          {/* ================= CONTENT ================= */}
          <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10 lg:px-16">
            <div className="max-w-3xl text-white">

              {/* Subtitle */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-red-600" />

                <span className="text-xs font-bold tracking-[0.25em] text-red-500 sm:text-sm">
                  {slide.subtitle}
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
                {slide.description}
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">

                {/* Join Button */}
                <button className="group flex items-center gap-3 rounded-md bg-red-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:bg-red-700 hover:shadow-red-600/40">
                  Join Us

                  <FaArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    size={16}
                  />
                </button>

                {/* Explore Button */}
                <button className="group flex items-center gap-3 rounded-md border border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-red-500 hover:bg-red-600">
                  <FaDumbbell
                    size={17}
                    className="transition-transform duration-300 group-hover:rotate-12"
                  />

                  Explore Gym
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ================= PREVIOUS ================= */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:border-red-500 hover:bg-red-600 sm:left-6"
      >
        <FaChevronLeft size={17} />
      </button>

      {/* ================= NEXT ================= */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:border-red-500 hover:bg-red-600 sm:right-6"
      >
        <FaChevronRight size={17} />
      </button>

      {/* ================= DOTS ================= */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              current === index
                ? "w-10 bg-red-600"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* ================= SLIDE NUMBER ================= */}
      <div className="absolute bottom-8 right-6 z-30 hidden items-center gap-3 text-white sm:flex">
        <span className="text-sm font-bold">
          0{current + 1}
        </span>

        <span className="h-px w-10 bg-white/40" />

        <span className="text-sm text-white/50">
          0{slides.length}
        </span>
      </div>
    </section>
  );
}