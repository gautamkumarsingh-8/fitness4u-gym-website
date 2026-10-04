"use client";
import {
    FaDumbbell,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope,
    FaInstagram,
    FaFacebookF,
    FaWhatsapp,
    FaArrowRight,
    FaClock,
} from "react-icons/fa";

export default function Footer() {
    const links = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Gallery", href: "#gallery" },
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    const services = [
        "Weight Training",
        "Cardio Training",
        "HIIT Workout",
        "Personal Training",
        "Fitness Programs",
    ];

    const socials = [
        { label: "Instagram", icon: FaInstagram, href: "#", bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" },
        { label: "Facebook", icon: FaFacebookF, href: "#", bg: "bg-[#1877F2]" },
        { label: "WhatsApp", icon: FaWhatsapp, href: "#", bg: "bg-[#25D366]" },
    ];

    const contacts = [
        {
            label: "Call Us",
            value: "+91 98765 43210",
            href: "tel:+919876543210",
            icon: FaPhoneAlt,
            tile: "bg-emerald-50 text-emerald-600 ring-emerald-100 group-hover:bg-emerald-600 group-hover:text-white",
        },
        {
            label: "Email Us",
            value: "fitness4u@example.com",
            href: "mailto:fitness4u@example.com",
            icon: FaEnvelope,
            tile: "bg-sky-50 text-sky-600 ring-sky-100 group-hover:bg-sky-600 group-hover:text-white",
        },
        {
            label: "Visit Us",
            value: "Main Road, Buxar, Bihar, India",
            href: "#contact",
            icon: FaMapMarkerAlt,
            tile: "bg-rose-50 text-rose-600 ring-rose-100 group-hover:bg-rose-600 group-hover:text-white",
        },
  
    ];

    return (
        <footer className="relative overflow-hidden bg-white ">
            {/* ================= TOP CTA (Simple & Clean) ================= */}
            <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-6 lg:px-8">
                <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-red-100 bg-red-50 px-7 py-9 sm:px-10 md:flex-row md:items-center">
                    <div className="max-w-xl">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                            Ready to start your fitness journey?
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                            Join Fitness4U Club Buxar and train with proper guidance,
                            discipline and a plan made for you.
                        </p>
                    </div>

                    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        <a
                            href="#contact"
                            className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-red-600 px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-red-200 transition duration-300 hover:bg-red-700"
                        >
                            Join Now
                            <FaArrowRight
                                size={13}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                        <a
                            href="tel:+919876543210"
                            className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 transition duration-300 hover:border-red-600 hover:text-red-600"
                        >
                            <FaPhoneAlt size={13} />
                            Call Now
                        </a>
                    </div>
                </div>
            </div>

            {/* ================= MAIN FOOTER ================= */}
            <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1.4fr]">
                    {/* ===== Brand ===== */}
                    <div>
                        <a href="#home" className="inline-flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-200">
                                <FaDumbbell size={22} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black tracking-tight text-gray-900">
                                    Fitness<span className="text-red-600">4U</span>
                                </h3>
                                <p className="text-[10px] font-semibold tracking-[0.3em] text-gray-400">
                                    CLUB BUXAR
                                </p>
                            </div>
                        </a>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-gray-500">
                            Your fitness journey starts here. Train with purpose, stay
                            consistent and become the strongest version of yourself.
                        </p>

                        <div className="mt-7 flex items-center gap-3">
                            {socials.map(({ label, icon: Icon, href, bg }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg ${bg}`}
                                >
                                    <Icon size={17} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ===== Quick Links ===== */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900">Quick Links</h3>
                        <div className="mt-2 h-0.5 w-8 rounded bg-red-600" />

                        <ul className="mt-6 space-y-3.5">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-500 transition duration-200 hover:text-red-600"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ===== Services ===== */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900">Our Services</h3>
                        <div className="mt-2 h-0.5 w-8 rounded bg-red-600" />

                        <ul className="mt-6 space-y-3.5">
                            {services.map((service) => (
                                <li key={service}>
                                    <a
                                        href="#services"
                                        className="text-sm text-gray-500 transition duration-200 hover:text-red-600"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ===== Contact ===== */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900">Get In Touch</h3>
                        <div className="mt-2 h-0.5 w-8 rounded bg-red-600" />

                        <div className="mt-6 space-y-3">
                            {contacts.map(({ label, value, href, icon: Icon, tile }) => {
                                const inner = (
                                    <>
                                        <div
                                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 transition duration-300 ${tile}`}
                                        >
                                            <Icon size={15} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-medium text-gray-400">{label}</p>
                                            <p className="mt-0.5 break-words text-sm font-semibold leading-5 text-gray-800">
                                                {value}
                                            </p>
                                        </div>
                                    </>
                                );

                                const cls =
                                    "group flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/60 p-3 transition duration-300 hover:border-gray-200 hover:bg-white hover:shadow-md hover:shadow-gray-200/60";

                                return href ? (
                                    <a key={label} href={href} className={cls}>
                                        {inner}
                                    </a>
                                ) : (
                                    <div key={label} className={cls}>
                                        {inner}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= BOTTOM BAR ================= */}
            <div className="border-t border-gray-100 bg-gray-50">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 sm:px-6 md:flex-row lg:px-8">
                    <p className="text-center text-xs text-gray-500 sm:text-sm md:text-left">
                        © 2026 <span className="font-bold text-gray-800">Fitness4U Club</span>. All
                        rights reserved.
                    </p>

                    <p className="text-center text-xs text-gray-500 sm:text-sm">
                        Crafted with <span className="mx-1 font-bold text-red-600">♥</span> by{" "}
                        <span className="font-extrabold text-gray-900">Gautam Singh</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}