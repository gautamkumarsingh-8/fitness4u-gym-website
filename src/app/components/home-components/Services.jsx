"use client";

import { useState } from "react";
import {
  FaDumbbell,
  FaHeartbeat,
  FaRunning,
  FaFire,
  FaUsers,
  FaAppleAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

/*
  IMAGE NOTE:
  Replace each `image` URL with your own gym photo (best for Google ranking),
  or any Google/Unsplash image address. Use real photos of Fitness4U Club Buxar
  when you have them. `alt` text should describe the photo + your gym name.
*/
const services = [
  {
    icon: FaDumbbell,
    title: "Weight Training",
    description:
      "Build strength, muscle and confidence with guided weight training on quality free weights and machines.",
    features: ["Strength Training", "Muscle Building", "Free Weights"],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=75",
    alt: "Weight training with dumbbells at Fitness4U Club Buxar gym",
  },
  {
    icon: FaHeartbeat,
    title: "Cardio Training",
    description:
      "Improve stamina and heart health with treadmills, cycling and cardio plans that suit your level.",
    features: ["Running", "Cycling", "Fat Burning"],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=75",
    alt: "Cardio training on treadmill at Fitness4U Club Buxar gym",
  },
  {
    icon: FaFire,
    title: "HIIT Workout",
    description:
      "Short, high-intensity sessions that burn calories fast and build endurance.",
    features: ["Fat Loss", "High Intensity", "Fast Results"],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=75",
    alt: "HIIT workout session at Fitness4U Club Buxar",
  },
  {
    icon: FaRunning,
    title: "Personal Training",
    description:
      "One-to-one coaching with a workout plan built around your body and your goal.",
    features: ["Personal Coach", "Custom Plan", "Goal Tracking"],
    image:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=75",
    alt: "Personal trainer coaching a member at Fitness4U Club Buxar",
  },
  {
    icon: FaUsers,
    title: "Group Fitness",
    description:
      "Train together in energetic group classes and stay motivated with our fitness community.",
    features: ["Group Classes", "Motivation", "Community"],
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=75",
    alt: "Group fitness class at Fitness4U Club Buxar",
  },
  {
    icon: FaAppleAlt,
    title: "Fitness & Nutrition",
    description:
      "Simple diet guidance that supports your training and a healthy lifestyle.",
    features: ["Diet Guidance", "Nutrition Tips", "Healthy Lifestyle"],
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=75",
    alt: "Healthy food and nutrition guidance at Fitness4U Club Buxar",
  },
];

/* Google understands this: tells search engines what services the gym offers */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Fitness4U Club Buxar Services",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      image: s.image,
      areaServed: "Buxar, Bihar, India",
      provider: {
        "@type": "HealthClub",
        name: "Fitness4U Club Buxar",
      },
    },
  })),
};

function ServiceImage({ src, alt, Icon }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // Fallback if the image address stops working
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full items-center justify-center bg-gray-900 text-red-500"
      >
        <Icon size={48} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={800}
      height={500}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  );
}

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-12"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-red-600" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Fitness4U Club Buxar
            </span>
            <span className="h-[2px] w-10 bg-red-600" />
          </div>

          <h2
            id="services-heading"
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            Gym Services in Buxar:{" "}
            <span className="text-red-600">Train, Burn, Grow</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Weight training, cardio, HIIT, personal training, group fitness and
            nutrition guidance. Everything you need to reach your fitness goal,
            under one roof at Fitness4U Club Buxar.
          </p>
        </header>

        {/* SERVICE CARDS */}
        <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <li key={service.title} className="flex">
                <article className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                    <ServiceImage
                      src={service.image}
                      alt={service.alt}
                      Icon={Icon}
                    />

                    {/* Dark gradient so the badge is readable */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Icon badge */}
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg">
                      <Icon size={22} />
                    </div>

                    {/* Top red line animation */}
                    <div className="absolute left-0 top-0 h-1 w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm font-medium text-gray-700"
                        >
                          <FaCheckCircle
                            className="shrink-0 text-red-600"
                            size={15}
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Link pushed to bottom so all cards align */}
                    <div className="mt-auto border-t border-gray-100 pt-5">
                      <a
                        href="#contact"
                        aria-label={`Learn more about ${service.title} at Fitness4U Club Buxar`}
                        className="group/link inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition-colors hover:text-red-600 focus-visible:outline  focus-visible:outline-red-600"
                      >
                        Learn More
                        <FaArrowRight
                          size={13}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        {/* BOTTOM CTA */}
        <div className="mt-14 rounded-2xl bg-black px-6 py-10 text-center sm:px-10">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Start Your{" "}
              <span className="text-red-500">Fitness Journey?</span>
            </h3>

            <p className="mt-3 text-gray-400">
              Join Fitness4U Club Buxar and take the first step towards a
              stronger and healthier you.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-3 rounded-md bg-red-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30"
            >
              Join Us
              <FaArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}