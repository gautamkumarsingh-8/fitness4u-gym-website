"use client";

import { useState, useEffect, useCallback } from "react";
import {
    FaExpand,
    FaTimes,
    FaChevronLeft,
    FaChevronRight,
    FaDumbbell,
} from "react-icons/fa";

const galleryImages = [
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QS9XIC98brdTr5WVPaHxsrm1ZW9UeKNzKtHQfIIhvYGOiKGZVocCzhs_3FtdMmLsgstjE6Gnjxy6SvesuGyo3ZP3N6QcoLD9IM9VGy3C5MTrxnPKmHjf2eqAIqBVy9x7nWTkKEqg=s1360-w1360-h1020-rw",
        alt: "Strength training at Fitness4U Club Buxar",
    },
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q15gI7JhbMi8SZTSOFZz3xwQSpGM-FCiHIzR3jmegaKZ6uaMp0MWMwVtEcuoWNdCWRUwLAj4nhiOUkTvUQzcUYW-dDY7Zf-BPs7A-XiCBLtVnWeQ8bCqvslE85x3ssyhg20mXg=s1360-w1360-h1020-rw",
        alt: "Modern gym equipment at Fitness4U Club Buxar",
    },
   
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RI97yjeGsqQtxJ9H_kZsQtgQHS9cc9TgxkhjgLD91YcwsFoTCLVA8rsX_TrmnYa2NMGJV33Q3aHay6ntnDuXaWhpjFzj7e98pKu_lFLIs6FBvi_wzNPanqGnRve00De645C6jpVg=s1360-w1360-h1020-rw",
        alt: "Power workout zone at Fitness4U Club Buxar",
    },
    {
        src: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R07hdAvNh-xUgIgtiPjjrBCoUJpev4m6qecE2J8zU8uf8pKd1nGRqSW6NiwdGFDI4QrUDmWp9tgTu2FCGpbokY8by5KZ_bXWcWnpyjHkJgfMd5RGmyQEkgjpn3oDvgzAPpmVQk3-ZBJN2n=s1360-w1360-h1020-rw",
        alt: "Cardio zone at Fitness4U Club Buxar",
    },
];

export default function Gallery() {
    const [selected, setSelected] = useState(null);
    const total = galleryImages.length;

    const close = useCallback(() => setSelected(null), []);
    const next = useCallback(
        () => setSelected((p) => (p === null ? p : (p + 1) % total)),
        [total]
    );
    const prev = useCallback(
        () => setSelected((p) => (p === null ? p : (p - 1 + total) % total)),
        [total]
    );

    // Keyboard controls + lock page scroll while preview is open
    useEffect(() => {
        if (selected === null) return;

        const onKey = (e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };

        document.addEventListener("keydown", onKey);
        const oldOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = oldOverflow;
        };
    }, [selected, close, next, prev]);

    return (
        <>
            <section id="gallery" className="bg-white px-5 py-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    {/* Heading */}
                    <div className="mb-12 text-center">
                        <div className="mb-4 flex items-center justify-center gap-3">
                            <span className="h-[2px] w-10 bg-red-600" />
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                                Fitness4U Club Buxar
                            </span>
                            <span className="h-[2px] w-10 bg-red-600" />
                        </div>

                        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                            Our <span className="text-red-600">Gallery</span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                            Explore our gym, modern equipment and fitness environment.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {galleryImages.map((image, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setSelected(index)}
                                aria-label={`Open photo ${index + 1} of ${total}`}
                                className={`group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500/60 ${
                                    index === 0
                                        ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:aspect-auto"
                                        : ""
                                }`}
                            >
                                {/* Blurred backdrop: fills any spare space so nothing looks empty */}
                                <img
                                    src={image.src}
                                    alt=""
                                    aria-hidden="true"
                                    className="absolute inset-0 h-full w-full scale-110 object-cover object-[center_20%] blur-2xl brightness-75"
                                />

                                {/* Main photo: object-contain keeps every face and head fully visible */}
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    className="relative h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-110"
                                />

                                {/* Soft hover overlay */}
                                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />

                                {/* Expand icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-red-600 text-white opacity-0 shadow-lg shadow-black/30 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                                        <FaExpand size={16} />
                                    </span>
                                </div>

                                {/* Border on hover */}
                                <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-500 group-hover:border-red-500" />
                            </button>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-12 flex justify-center">
                        <a
                            href="#contact"
                            className="flex items-center gap-3 rounded-md bg-red-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30"
                        >
                            <FaDumbbell size={17} />
                            Join Fitness4U
                        </a>
                    </div>
                </div>
            </section>

            {/* Fullscreen Preview */}
            {selected !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Photo preview"
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 px-4"
                    onClick={close}
                >
                    {/* Counter */}
                    <span className="absolute left-5 top-6 z-50 text-sm font-semibold text-white/70">
                        {selected + 1} / {total}
                    </span>

                    {/* Close */}
                    <button
                        type="button"
                        aria-label="Close preview"
                        onClick={close}
                        className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-red-600"
                    >
                        <FaTimes size={20} />
                    </button>

                    {/* Previous */}
                    <button
                        type="button"
                        aria-label="Previous photo"
                        onClick={(e) => {
                            e.stopPropagation();
                            prev();
                        }}
                        className="absolute left-3 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-red-600 sm:left-8"
                    >
                        <FaChevronLeft size={20} />
                    </button>

                    {/* Image */}
                    <img
                        key={selected}
                        src={galleryImages[selected].src}
                        alt={galleryImages[selected].alt}
                        onClick={(e) => e.stopPropagation()}
                        className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl sm:max-w-[85vw]"
                    />

                    {/* Next */}
                    <button
                        type="button"
                        aria-label="Next photo"
                        onClick={(e) => {
                            e.stopPropagation();
                            next();
                        }}
                        className="absolute right-3 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-red-600 sm:right-8"
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>
            )}
        </>
    );
}