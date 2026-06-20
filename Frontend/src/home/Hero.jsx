import { createElement } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  ChevronDown,
  Play,
  Star,
  Trophy,
  UsersRound,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import heroBackground from "../assets/dance-hero-bg.png";

const classes = [
  { name: "Hip Hop", position: "68% 52%" },
  { name: "Lyrical", position: "52% 58%" },
  { name: "Zumba", position: "83% 44%" },
  { name: "Choreography", position: "94% 50%" },
];

const stats = [
  { value: "10+", label: "Years experience", icon: Trophy },
  { value: "500+", label: "Happy students", icon: UsersRound },
  { value: "20+", label: "Expert instructors", icon: Star },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      <img
        src={heroBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] md:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.92)_25%,rgba(5,5,5,.34)_56%,rgba(5,5,5,.05)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#050505_0%,transparent_35%,rgba(0,0,0,.25)_100%)]" />
      <div className="absolute -left-24 top-[22%] h-80 w-64 rotate-[-18deg] bg-red-700/25 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1480px] flex-col px-5 pb-7 pt-[126px] sm:px-8 lg:px-10 lg:pt-[145px]">
        <div className="flex flex-1 items-center">
          <div className="w-full max-w-[640px] pb-10 lg:pb-0">
            <p className="mb-4 text-[12px] font-medium uppercase tracking-[.12em] text-white/90 sm:text-[15px]">
              Where <span className="font-bold text-red-600">passion</span> meets{" "}
              <span className="font-bold text-red-600">performance</span>
            </p>

            <div className="relative">
              <h1 className="font-sans text-[clamp(4.5rem,10vw,7.5rem)] font-black uppercase leading-[.72] tracking-[-.03em] drop-shadow-2xl">
                Dance
              </h1>
              <p className="ml-[33%] mt-3 text-[clamp(1.8rem,3.3vw,3.4rem)] font-black italic uppercase leading-none tracking-[-.05em]">
                Your way to
              </p>
              <p
                className="-ml-1 -mt-2 rotate-[-3deg] text-[clamp(4.7rem,8vw,7.2rem)] font-black italic sm:leading-[.99] tracking-[-.1em] text-red-600"
                style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
              >
                Greatness
              </p>
            </div>

            <p className="mt-8 max-w-[530px] text-[14px] leading-7 text-white/90 sm:text-[16px]">
              Unique Dance Academy is more than just a dance studio.
              <br className="hidden sm:block" /> It&apos;s a place to grow,
              express, and shine.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-6 rounded-full bg-red-600 px-7 py-4 text-[13px] font-black uppercase shadow-[0_14px_36px_rgba(220,0,20,.3)] transition hover:-translate-y-1 hover:bg-red-700"
              >
                Join a class <ArrowRight size={17} />
              </Link>
              <Link to="/gallery">
              <button
                type="button"
                className="flex items-center gap-4 rounded-full border border-white/35 bg-black/20 px-7 py-4 text-[13px] font-black uppercase backdrop-blur-sm transition hover:border-red-500 hover:text-red-500"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full border border-white">
                  <Play size={11} fill="currentColor" />
                </span>
                Watch showreel
              </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-auto grid gap-8 xl:grid-cols-[1fr_420px] xl:items-end">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {classes.map((item, index) => (
              <a
                href="/classes"
                key={item.name}
                className="group relative h-[105px] overflow-hidden rounded-lg border border-white/10 bg-[#181818] sm:h-[145px]"
              >
                <div
                  className="absolute inset-0 scale-110 bg-cover transition duration-500 group-hover:scale-125"
                  style={{
                    backgroundImage: `url(${heroBackground})`,
                    backgroundPosition: item.position,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <span className="absolute inset-x-0 bottom-4 text-center text-[11px] font-bold uppercase tracking-[.14em] sm:text-[13px]">
                  {item.name}
                </span>
                <span
                  className={`absolute bottom-0 left-3 h-[3px] bg-red-600 ${
                    index === 3 ? "w-12" : "w-[42%]"
                  }`}
                />
                <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-white/20" />
              </a>
            ))}
          </div>

          <div className="grid grid-cols-3 divide-x divide-white/15 border-white/15 xl:border-l">
            {stats.map(({ value, label, icon }) => (
              <div key={label} className="px-4 text-center sm:px-6">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-red-950/70 text-red-500">
                  {createElement(icon, { size: 23 })}
                </span>
                <strong className="mt-3 block text-[25px] leading-none sm:text-[29px]">
                  {value}
                </strong>
                <span className="mt-2 block text-[9px] font-semibold uppercase leading-4 tracking-[.15em] text-white/85 sm:text-[11px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 hidden items-center justify-center gap-3 text-[8px] uppercase tracking-[.55em] text-white/50 lg:flex">
          <ChevronDown size={15} /> Scroll down
        </div>
      </div>

      <div className="absolute left-7 top-[38%] z-20 hidden flex-col items-center gap-9 text-white/85 xl:flex">
        <a
          href="https://www.facebook.com/share/1EMzzoY7i9/?mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="transition hover:text-red-500"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://www.instagram.com/unique_dance_academy_india?igsh=M3g1aWFvcHF3ZG1y"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="transition hover:text-red-500"
        >
          <FaInstagram size={25} />
        </a>
        <a
          href="https://youtube.com/@uniquedanceacademyindia4650?feature=shared"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
          className="transition hover:text-red-500"
        >
          <FaYoutube size={25} />
        </a>
        <span className="mt-5 [writing-mode:vertical-rl] rotate-180 text-[13px] font-bold uppercase tracking-[.38em]">
          Follow us
        </span>
        <span className="h-32 w-[2px] bg-red-600" />
      </div>

      <div className="pointer-events-none absolute bottom-12 right-3 hidden opacity-60 2xl:block">
        <Award size={130} strokeWidth={0.35} className="text-red-600" />
      </div>
    </section>
  );
}
