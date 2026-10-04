"use client";

import {
  FaDumbbell,
  FaAward,
  FaUsers,
  FaBullseye,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const ownerImage =
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R07hdAvNh-xUgIgtiPjjrBCoUJpev4m6qecE2J8zU8uf8pKd1nGRqSW6NiwdGFDI4QrUDmWp9tgTu2FCGpbokY8by5KZ_bXWcWnpyjHkJgfMd5RGmyQEkgjpn3oDvgzAPpmVQk3-ZBJN2n=s1360-w1360-h1020-rw";

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-red-600" />

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              About Fitness4U
            </span>

            <span className="h-[2px] w-10 bg-red-600" />
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            More Than Just a{" "}
            <span className="text-red-600">Gym</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            We are building a stronger community through fitness, discipline
            and consistency.
          </p>
        </div>

        {/* ================= MAIN ABOUT ================= */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ================= OWNER IMAGE ================= */}
          <div className="relative mx-auto w-full max-w-lg">

            {/* Red Background Shape */}
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-3xl bg-red-600" />

            {/* Image Box */}
            <div className="group relative overflow-hidden rounded-3xl bg-gray-100">
              <img
                src={ownerImage}
                alt="Fitness4U Club Owner"
                className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[580px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Owner Label */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                  Founder & Owner
                </p>

                <h3 className="mt-2 text-3xl font-extrabold text-white">
                  Fitness4U Club
                </h3>

                <p className="mt-1 text-gray-300">
                  Passion • Discipline • Fitness
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-4 top-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-xl sm:-right-7">
              <FaDumbbell className="text-red-600" size={30} />
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div>

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Our Story
            </span>

            <h3 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              Helping You Become{" "}
              <span className="text-red-600">Stronger</span>
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              Fitness4U Club was created with a simple vision — to provide a
              motivating and professional environment where people can work on
              their strength, fitness and overall lifestyle.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Whether you are starting your fitness journey or looking to take
              your training to the next level, our goal is to help you stay
              consistent, focused and confident.
            </p>

            {/* Features */}
            <div className="mt-7 space-y-3">
              {[
                "Modern workout environment",
                "Professional fitness guidance",
                "Friendly and motivating community",
                "Workouts for different fitness goals",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <FaCheckCircle className="shrink-0 text-red-600" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-md bg-red-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30"
            >
              Join Our Gym

              <FaArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-20 grid overflow-hidden rounded-2xl bg-black sm:grid-cols-2 lg:grid-cols-4">

          {/* Stat 1 */}
          <div className="border-b border-white/10 p-8 text-center sm:border-r lg:border-b-0">
            <FaUsers className="mx-auto mb-4 text-3xl text-red-600" />

            <h4 className="text-3xl font-extrabold text-white">
              500+
            </h4>

            <p className="mt-2 text-sm text-gray-400">
              Happy Members
            </p>
          </div>

          {/* Stat 2 */}
          <div className="border-b border-white/10 p-8 text-center lg:border-r lg:border-b-0">
            <FaDumbbell className="mx-auto mb-4 text-3xl text-red-600" />

            <h4 className="text-3xl font-extrabold text-white">
              20+
            </h4>

            <p className="mt-2 text-sm text-gray-400">
              Training Programs
            </p>
          </div>

          {/* Stat 3 */}
          <div className="border-b border-white/10 p-8 text-center sm:border-r sm:border-b-0">
            <FaAward className="mx-auto mb-4 text-3xl text-red-600" />

            <h4 className="text-3xl font-extrabold text-white">
              5+
            </h4>

            <p className="mt-2 text-sm text-gray-400">
              Years Experience
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-8 text-center">
            <FaBullseye className="mx-auto mb-4 text-3xl text-red-600" />

            <h4 className="text-3xl font-extrabold text-white">
              100%
            </h4>

            <p className="mt-2 text-sm text-gray-400">
              Focus On You
            </p>
          </div>
        </div>

        {/* ================= OWNER MESSAGE ================= */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center sm:p-12">

          <FaDumbbell className="mx-auto mb-5 text-3xl text-red-600" />

          <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            “Your only competition is who you were yesterday.”
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            At Fitness4U Club, we believe that every workout is a step towards
            becoming a better version of yourself. Stay consistent, stay
            disciplined and keep moving forward.
          </p>

          <p className="mt-5 font-bold text-red-600">
            — Founder, Fitness4U Club
          </p>
        </div>
      </div>
    </section>
  );
}