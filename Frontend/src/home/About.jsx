import { createElement } from "react";
import {
  ArrowUpRight,
  Award,
  Heart,
  Play,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: UsersRound,
    title: "Every age. Every level.",
    text: "Patient, structured training that helps beginners feel at home and experienced dancers push further.",
  },
  {
    icon: Sparkles,
    title: "Confidence through movement",
    text: "We build musicality, expression and stage presence—not just a collection of steps.",
  },
  {
    icon: Heart,
    title: "A community that moves",
    text: "A welcoming studio culture where students learn together, perform together and celebrate progress.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f5f0e8] py-20 text-[#171310] sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-red-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-0 text-[clamp(8rem,20vw,20rem)] font-black uppercase leading-none tracking-[-.12em] text-[#171310]/[.025]">
        Move
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[640px] pb-14 sm:pr-14 lg:mx-0">
            <div className="relative h-[470px] overflow-hidden rounded-[2rem] bg-[#d8d0c5] sm:h-[620px]">
              <img
                src="/g2.jpeg"
                alt="Unique Dance Academy training moment"
                className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#27110e]/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 flex items-center gap-4 p-6 text-white sm:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-red-600">
                  <Play size={18} fill="currentColor" />
                </span>
                <span>
                  <strong className="block text-sm uppercase tracking-[.14em]">
                    Learn. Perform. Shine.
                  </strong>
                  <span className="mt-1 block text-xs text-white/70">
                    The UDA experience
                  </span>
                </span>
              </div>
            </div>

            <div className="absolute -bottom-2 right-0 w-[44%] overflow-hidden rounded-[1.4rem] border-[7px] border-[#f5f0e8] bg-white shadow-2xl">
              <img
                src="/g1.jpeg"
                alt="Unique Dance Academy with guest artists"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>

            <div className="absolute -left-3 -top-10 rounded-2xl bg-red-600 px-5 py-4 text-white shadow-xl sm:-left-8">
              <strong className="block text-3xl font-black">2021</strong>
              <span className="text-[9px] font-bold uppercase tracking-[.2em] text-white/75">
                Our journey began
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[.25em] text-red-600">
              <span className="h-px w-10 bg-red-600" />
              About Unique Dance Academy
            </div>

            <h2 className="mt-6 max-w-[680px] text-[clamp(2.5rem,4.8vw,4.8rem)] font-black uppercase leading-[1.08] tracking-[-.035em] [word-spacing:.1em]">
              More than
              <span className="block text-red-600">dance steps.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg font-medium leading-8 text-[#372f2a]">
              Unique Dance Academy is a place to find your rhythm, your
              confidence and your own way of moving.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#6d625b]">
              Since 2021, we&apos;ve helped children, teens and adults grow
              through focused training, expressive choreography and real
              performance opportunities.
            </p>

            <div className="mt-9 divide-y divide-[#171310]/10 border-y border-[#171310]/10">
              {values.map(({ icon, title, text }, index) => (
                <div
                  key={title}
                  className="group grid gap-4 py-5 sm:grid-cols-[46px_1fr_auto] sm:items-center"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-red-600 shadow-sm">
                    {createElement(icon, { size: 19 })}
                  </span>
                  <span>
                    <strong className="block text-sm font-black uppercase tracking-[.04em]">
                      {title}
                    </strong>
                    <span className="mt-1 block text-sm leading-6 text-[#756a62]">
                      {text}
                    </span>
                  </span>
                  <span className="hidden text-3xl font-black text-[#171310]/10 sm:block">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                to="/classes"
                className="inline-flex items-center gap-5 rounded-full bg-[#1b1714] px-7 py-4 text-xs font-black uppercase tracking-[.08em] text-white transition hover:bg-red-600"
              >
                Explore classes <ArrowUpRight size={17} />
              </Link>
              <div className="flex items-center gap-3">
                <Award className="text-red-600" size={29} />
                <span className="text-xs font-bold uppercase leading-5 tracking-[.08em] text-[#655b54]">
                  Performance-focused
                  <br />
                  professional training
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
