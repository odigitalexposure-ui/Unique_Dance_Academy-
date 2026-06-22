import { ArrowRight, Images, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { homeGalleryMedia } from "../data/galleryMedia";
import OptimizedVideo from "../common/OptimizedVideo";

export default function Gallerysection() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#f3ece3] py-20 text-[#181310] sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-red-500/10 blur-[110px]" />
      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-7 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[.24em] text-red-600">
              <Images size={16} />
              Inside our world
            </div>
            <h2 className="mt-5 text-[clamp(2.5rem,4.8vw,4.8rem)] font-black uppercase leading-[1.08] tracking-[-.035em] [word-spacing:.1em]">
              Moments that
              <span className="block text-red-600">move with us.</span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="border-l-2 border-red-600 pl-6 text-[15px] leading-7 text-[#70655e]">
              From everyday training to unforgettable performances—take a
              glimpse at the energy, community and stories inside our academy.
            </p>
          </div>
        </div>

        <div className="mt-14 grid auto-flow-dense auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4 lg:auto-rows-[220px]">
          {homeGalleryMedia.map((item, index) => (
            <Link
              to={`/gallery?item=${item.id}`}
              key={item.id}
              className={`group relative overflow-hidden rounded-[1.3rem] bg-[#d9d0c7] ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              ) : (
                <OptimizedVideo
                  src={item.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c0d09]/80 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />

              {item.type === "video" && (
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-red-600 shadow-lg">
                  <Play size={15} fill="currentColor" />
                </span>
              )}

              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-white transition group-hover:translate-y-0 sm:p-5">
                <span className="text-[8px] font-black uppercase tracking-[.18em] text-red-300">
                  {item.category}
                </span>
                <h3 className="mt-1 text-sm font-black uppercase sm:text-lg">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-[#181310]/10 pt-8 sm:flex-row">
          <p className="text-sm text-[#746961]">
            Photos, class videos, performances and academy memories.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-6 rounded-full bg-[#181310] px-7 py-4 text-[11px] font-black uppercase tracking-[.12em] text-white transition hover:bg-red-600"
          >
            See full gallery <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
