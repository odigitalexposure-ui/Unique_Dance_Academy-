import {
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Expand,
  Images,
  Play,
  Video,
  X,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { galleryMedia } from "../data/galleryMedia";

const filters = [
  { value: "all", label: "All moments", icon: Images },
  { value: "image", label: "Photos", icon: Images },
  { value: "video", label: "Videos", icon: Video },
];

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedId = Number(searchParams.get("item"));
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState(() =>
    galleryMedia.some((item) => item.id === requestedId) ? requestedId : null,
  );

  const visibleMedia = useMemo(
    () =>
      filter === "all"
        ? galleryMedia
        : galleryMedia.filter((item) => item.type === filter),
    [filter],
  );

  const activeIndex = visibleMedia.findIndex((item) => item.id === activeId);
  const activeItem = activeIndex >= 0 ? visibleMedia[activeIndex] : null;

  const closeModal = useCallback(() => {
    setActiveId(null);
    setSearchParams({}, { replace: true });
  }, [setSearchParams]);

  const showPrevious = useCallback(() => {
    if (!visibleMedia.length) return;
    const nextIndex =
      activeIndex <= 0 ? visibleMedia.length - 1 : activeIndex - 1;
    setActiveId(visibleMedia[nextIndex].id);
  }, [activeIndex, visibleMedia]);

  const showNext = useCallback(() => {
    if (!visibleMedia.length) return;
    const nextIndex =
      activeIndex === visibleMedia.length - 1 ? 0 : activeIndex + 1;
    setActiveId(visibleMedia[nextIndex].id);
  }, [activeIndex, visibleMedia]);

  useEffect(() => {
    if (!activeItem) return undefined;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem, closeModal, showNext, showPrevious]);

  const openItem = (id) => {
    setActiveId(id);
    setSearchParams({ item: String(id) }, { replace: true });
  };

  const changeFilter = (value) => {
    setFilter(value);
    closeModal();
  };

  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#181310]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7f0712] via-[#b20d1d] to-[#e12b34] px-5 pb-24 pt-36 text-white sm:px-8 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-[1380px]">
          <Link
            to="/#gallery"
            className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[.2em] text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_430px] lg:items-end">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[.28em] text-red-100">
                Unique Dance Academy
              </p>
              <h1 className="mt-4 text-[clamp(4rem,9vw,9rem)] font-black uppercase leading-[.78] tracking-[-.085em]">
                Our gallery
              </h1>
            </div>
            <p className="border-l border-white/40 pl-6 text-[15px] leading-7 text-white/80">
              Explore the performances, practice sessions and people that make
              our academy feel alive. Select any moment to view it full-screen.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1380px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-2">
            {filters.map(({ value, label, icon }) => (
              <button
                type="button"
                key={value}
                onClick={() => changeFilter(value)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-[10px] font-black uppercase tracking-[.12em] transition ${
                  filter === value
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                    : "border border-[#181310]/10 bg-white text-[#665b54] hover:border-red-600 hover:text-red-600"
                }`}
              >
                {createElement(icon, { size: 15 })}
                {label}
              </button>
            ))}
          </div>
          <span className="text-xs font-bold uppercase tracking-[.14em] text-[#8a7e75]">
            {visibleMedia.length} moments
          </span>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {visibleMedia.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => openItem(item.id)}
              className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] bg-[#ddd3c9] text-left shadow-[0_16px_50px_rgba(52,35,23,.09)]"
            >
              <div className={item.ratio}>
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <video
                    src={item.src}
                    poster={item.poster}
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#190b08]/85 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
              <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-red-600 opacity-100 shadow-lg transition sm:opacity-0 sm:group-hover:opacity-100">
                {item.type === "video" ? (
                  <Play size={15} fill="currentColor" />
                ) : (
                  <Expand size={16} />
                )}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <span className="text-[8px] font-black uppercase tracking-[.2em] text-red-300">
                  {item.category}
                </span>
                <h2 className="mt-1 text-xl font-black uppercase">
                  {item.title}
                </h2>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#120a08]/95 p-3 backdrop-blur-lg sm:p-7"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close gallery viewer"
            className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white text-[#181310] shadow-xl transition hover:bg-red-600 hover:text-white sm:right-7 sm:top-7"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous gallery item"
            className="absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#181310] shadow-xl transition hover:bg-red-600 hover:text-white sm:left-7 sm:h-13 sm:w-13"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next gallery item"
            className="absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#181310] shadow-xl transition hover:bg-red-600 hover:text-white sm:right-7 sm:h-13 sm:w-13"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex max-h-[92dvh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.4rem] bg-[#211512] shadow-2xl lg:grid lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="flex min-h-0 items-center justify-center bg-[#0e0908]">
              {activeItem.type === "image" ? (
                <img
                  key={activeItem.id}
                  src={activeItem.src}
                  alt={activeItem.title}
                  className="max-h-[70dvh] w-full object-contain lg:max-h-[92dvh]"
                />
              ) : (
                <video
                  key={activeItem.id}
                  src={activeItem.src}
                  poster={activeItem.poster}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[70dvh] w-full object-contain lg:max-h-[92dvh]"
                />
              )}
            </div>
            <div className="shrink-0 p-6 text-white sm:p-8 lg:flex lg:flex-col lg:justify-end">
              <span className="text-[9px] font-black uppercase tracking-[.22em] text-red-400">
                {activeItem.category}
              </span>
              <h2 className="mt-3 text-3xl font-black uppercase leading-none">
                {activeItem.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/60">
                {activeItem.description}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-[10px] font-bold uppercase tracking-[.14em] text-white/40">
                <span>
                  {activeIndex + 1} / {visibleMedia.length}
                </span>
                <span>{activeItem.type}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
