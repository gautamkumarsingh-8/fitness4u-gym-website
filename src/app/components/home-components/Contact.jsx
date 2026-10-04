"use client";

import {
  FaArrowRight,
  FaClock,
  FaDumbbell,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-red-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-red-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-red-600">
            <FaDumbbell />
            Get In Touch
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Ready to Start Your{" "}
            <span className="text-red-600">Fitness Journey?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Have questions about our gym, training programs or membership?
            Contact us today and take the first step toward a stronger you.
          </p>
        </div>

        {/* ================= CONTACT + FORM ================= */}
        <div className="grid gap-8 lg:grid-cols-5">

          {/* ================= CONTACT INFO ================= */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-3xl bg-black p-6 text-white shadow-xl sm:p-8">

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                Contact Us
              </span>

              <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                Let&apos;s Get Started
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Whether you&apos;re a beginner or an experienced fitness
                enthusiast, our team is ready to help you reach your goals.
              </p>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="group mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-red-600"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 group-hover:bg-white group-hover:text-red-600">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 group-hover:text-red-100">
                    Call Us
                  </p>
                  <p className="mt-1 font-semibold">
                    +91 98765 43210
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-green-500"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white group-hover:bg-white group-hover:text-green-500">
                  <FaWhatsapp size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 group-hover:text-white">
                    WhatsApp
                  </p>
                  <p className="mt-1 font-semibold">
                    Chat With Us
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:fitness4uclub@gmail.com"
                className="group mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-red-600"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 group-hover:bg-white group-hover:text-red-600">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 group-hover:text-red-100">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-semibold sm:text-base">
                    fitness4uclub@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <a
                href="https://maps.app.goo.gl/qAziJPph1A2srzqG8"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-red-600"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 group-hover:bg-white group-hover:text-red-600">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 group-hover:text-red-100">
                    Location
                  </p>
                  <p className="mt-1 font-semibold">
                    View Our Location
                  </p>
                </div>
              </a>

              {/* Opening Hours */}
              <div className="mt-8 border-t border-white/10 pt-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                    <FaClock />
                  </div>

                  <h4 className="font-bold">
                    Opening Hours
                  </h4>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-400">
                      Monday - Saturday
                    </span>

                    <span className="font-semibold">
                      5 AM - 10 PM
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Sunday
                    </span>

                    <span className="font-semibold text-red-400">
                      6 AM - 12 PM
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8 lg:p-10">

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Send Message
              </span>

              <h3 className="mt-3 text-2xl font-black text-gray-900 sm:text-3xl">
                Get Your Free Consultation
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Fill out the form and our team will get back to you shortly.
              </p>

              <form className="mt-8 space-y-5">

                {/* Name + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                    />
                  </div>

                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Interested In
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                  >
                    <option value="">Select a service</option>
                    <option value="weight-training">
                      Weight Training
                    </option>
                    <option value="cardio">
                      Cardio Training
                    </option>
                    <option value="hiit">
                      HIIT Workout
                    </option>
                    <option value="personal-training">
                      Personal Training
                    </option>
                    <option value="group-fitness">
                      Group Fitness
                    </option>
                    <option value="nutrition">
                      Fitness & Nutrition
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us how we can help you..."
                    required
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-4 font-bold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/20"
                >
                  Send Message

                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

              </form>
            </div>
          </div>
        </div>

        {/* ================= GOOGLE MAP ================= */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">

          {/* Map Header */}
          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <FaMapMarkerAlt size={20} />
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Find Us on Google Maps
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Click the button to view our exact location
                </p>
              </div>

            </div>

            <a
              href="https://maps.app.goo.gl/qAziJPph1A2srzqG8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
            >
              <FaMapMarkerAlt size={14} />
              Open in Google Maps
            </a>

          </div>

          {/* Map */}
          <div className="relative h-[350px] w-full overflow-hidden sm:h-[450px]">

            <iframe
              src="https://www.google.com/maps?q=qAziJPph1A2srzqG8&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Fitness4U Club Google Map"
            />

            {/* Map Overlay */}
            <div className="absolute bottom-5 left-5 rounded-xl bg-white/95 p-4 shadow-xl backdrop-blur-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="font-bold text-gray-900">
                    Fitness4U Club
                  </p>

                  <p className="text-xs text-gray-500">
                    View location on Google Maps
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-10 rounded-3xl bg-red-600 p-8 text-center text-white sm:p-10">

          <FaDumbbell className="mx-auto mb-4 text-3xl text-red-100" />

          <h3 className="text-2xl font-black sm:text-3xl">
            Your Stronger Version Starts Today
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-red-100">
            Don&apos;t wait for tomorrow. Join Fitness4U Club Buxar and start
            working toward your fitness goals today.
          </p>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 font-bold text-red-600 transition hover:bg-gray-100"
          >
            <FaWhatsapp size={20} />
            Join Us Today
            <FaArrowRight />
          </a>

        </div>

      </div>
    </section>
  );
}