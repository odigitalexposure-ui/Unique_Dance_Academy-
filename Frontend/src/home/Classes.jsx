import { ArrowRight, Clock3, Play, Sparkles, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";

const featuredClasses = [
  {
    number: "01",
    title: "",
    subtitle: "Groove · Foundation · Freestyle",
    description:
      "Build rhythm, confidence and powerful movement through foundations, combinations and performance drills.",
    video: "/v4.mp4",
    poster: "/g1.jpeg",
    level: "",
  },
  {
    number: "02",
    title: "",
    subtitle: "Expression · Energy · Performance",
    description:
      "A vibrant mix of cinematic expression, Indian movement vocabulary and high-energy stage choreography.",
    video: "/v9.mp4",
    poster: "/g2.jpeg",
    level: "",
  },
  {
    number: "03",
    title: "",
    subtitle: "Musicality · Technique · Stage",
    description:
      "Learn complete routines designed for showcases, events and competitions while sharpening stage presence.",
    video: "/v10.mp4",
    poster: "/g3.jpeg",
    level: "",
  },
];

const otherStyles = [
  "Contemporary",
  "Zumba Fitness",
  "Kids Batch",
  "Wedding Choreography",
  "Private Lessons",
  "Event Training",
];

export default function Classes() {
  return (
    <section
      id="classes"
      className="relative overflow-hidden bg-[#fffaf3] py-20 text-[#181310] sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-32 h-[430px] w-[430px] rounded-full bg-[#ef233c]/8 blur-[110px]" />

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_430px] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[.25em] text-red-600">
              <Sparkles size={16} />
              Find your movement
            </div>
            <h2 className="mt-5 max-w-[800px] text-[clamp(2.5rem,4.8vw,4.8rem)] font-black uppercase leading-[1.08] tracking-[-.035em] [word-spacing:.1em]">
              Classes with
              <span className="block text-red-600">real energy.</span>
            </h2>
          </div>
          <div className="border-l-2 border-red-600 pl-6">
            <p className="text-[15px] leading-7 text-[#70655e]">
              Choose your style, learn at your pace and train with instructors
              who care about technique, expression and progress.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[.12em] text-[#181310] transition hover:text-red-600"
            >
              Ask about batch timings <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {featuredClasses.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[1.8rem] border border-[#181310]/10 bg-white shadow-[0_20px_65px_rgba(55,35,20,.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(55,35,20,.15)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#d7cec4]">
                <video
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  src={item.video}
                  poster={item.poster}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#170d09]/85 via-transparent to-black/10" />

                <span className="absolute left-5 top-5 text-5xl font-black tracking-[-.08em] text-white/35">
                  {item.number}
                </span>
                <span className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-red-600 shadow-lg backdrop-blur">
                  <Play size={17} fill="currentColor" />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <p className="text-[9px] font-bold uppercase tracking-[.2em] text-red-300">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-2 text-3xl font-black uppercase tracking-[-.045em]">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <p className="min-h-[72px] text-sm leading-6 text-[#71665f]">
                  {item.description}
                </p>
                {/* <div className="mt-6 flex items-center justify-between border-t border-[#181310]/10 pt-5">
                  <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.12em] text-[#625850]">
                    <UsersRound size={15} className="text-red-600" />
                    {item.level}
                  </span>
                  <a
                    href="https://wa.me/916291553606"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Join ${item.title}`}
                    className="grid h-10 w-10 place-items-center rounded-full bg-[#181310] text-white transition group-hover:bg-red-600"
                  >
                    <ArrowRight size={16} />
                  </a>
                </div> */}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[1.8rem] bg-[#efe6db] p-6 sm:p-8 lg:flex lg:items-center lg:gap-10">
          <div className="flex shrink-0 items-center gap-4 lg:w-[270px]">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-red-600 text-white">
              <Clock3 size={21} />
            </span>
            <span>
              <strong className="block text-lg font-black uppercase">
                More ways to move
              </strong>
              <span className="text-xs text-[#756a62]">
                Flexible programs and batches
              </span>
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 lg:mt-0">
            {otherStyles.map((style) => (
              <span
                key={style}
                className="rounded-full border border-[#181310]/10 bg-[#fffaf3] px-4 py-2.5 text-[10px] font-black uppercase tracking-[.1em] text-[#554c46]"
              >
                {style}
              </span>
            ))}
          </div>

          <a
            href="https://wa.me/916291553606"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex shrink-0 items-center gap-4 rounded-full bg-red-600 px-6 py-4 text-[11px] font-black uppercase tracking-[.1em] text-white transition hover:bg-[#181310] lg:ml-auto lg:mt-0"
          >
            Book a trial <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
