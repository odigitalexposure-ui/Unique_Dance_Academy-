import { createElement } from "react";
import { ArrowRight, Heart, Sparkles, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  {
    icon: UsersRound,
    number: "01",
    title: "Welcoming by design",
    text: "Children, youth and adults can learn at a pace that feels challenging, supportive and enjoyable.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Growth beyond steps",
    text: "Our training develops rhythm and technique alongside confidence, expression and stage presence.",
  },
  {
    icon: Heart,
    number: "03",
    title: "A community that moves",
    text: "Students learn together, celebrate progress and build meaningful connections through dance.",
  },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-[#fffaf3] text-[#191410]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#790914] via-[#ae101f] to-[#df2934] pb-20 pt-[150px] text-white sm:pb-24 lg:pb-28 lg:pt-[180px]">
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:25px_25px]" />
        <div className="pointer-events-none absolute -right-20 top-10 text-[clamp(10rem,27vw,28rem)] font-black uppercase leading-none tracking-[-.12em] text-white/[.035]">
          UDA
        </div>

        <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
          <p className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[.28em] text-red-100">
            <span className="h-px w-10 bg-red-200" />
            About Unique Dance Academy
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_430px] lg:items-end">
            <h1 className="max-w-5xl text-[clamp(3rem,7vw,6.5rem)] font-black uppercase leading-[1.08] tracking-[-.035em]">
              Dance with
              <span className="block text-[#ffb9b8]">purpose.</span>
            </h1>
            <p className="border-l border-white/40 pl-6 text-base leading-8 text-white/80">
              A creative space where movement becomes confidence, discipline
              and self-expression.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute -left-40 top-24 h-[430px] w-[430px] rounded-full bg-red-500/8 blur-[110px]" />

        <div className="relative mx-auto grid max-w-[1380px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-10">
          <div className="relative mx-auto w-full max-w-[540px] lg:mx-0">
            <div className="overflow-hidden rounded-[2rem] bg-[#ded4ca] shadow-[0_30px_85px_rgba(62,38,22,.14)]">
              <img
                src="/g2.jpeg"
                alt="Unique Dance Academy training community"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-red-600 px-6 py-5 text-white shadow-xl sm:-right-8">
              <strong className="block text-3xl font-black">2021</strong>
              <span className="text-[9px] font-black uppercase tracking-[.18em] text-white/70">
                Our journey began
              </span>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[.25em] text-red-600">
              Our story
            </p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.5rem,4.7vw,4.7rem)] font-black uppercase leading-[.9] tracking-[-.06em]">
              More than a
              <span className="block text-red-600">dance studio.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg font-semibold leading-8 text-[#443a34]">
              Unique Dance Academy was created to make quality dance training
              approachable, expressive and inspiring.
            </p>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#746961]">
              We welcome beginners and experienced dancers across age groups.
              Through structured classes and performance-focused guidance, we
              help every student discover their rhythm and grow with
              confidence.
            </p>

            <div className="mt-9 grid grid-cols-3 divide-x divide-[#191410]/10 border-y border-[#191410]/10 py-6">
              {[
                ["10+", "Years experience"],
                ["500+", "Happy students"],
                // ["20+", "Expert instructors"],
              ].map(([value, label]) => (
                <div key={label} className="px-3 text-center sm:px-6">
                  <strong className="block text-2xl font-black text-red-600 sm:text-3xl">
                    {value}
                  </strong>
                  <span className="mt-2 block text-[8px] font-black uppercase leading-4 tracking-[.12em] text-[#7c7068] sm:text-[9px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1e8de] py-20 sm:py-24">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[.25em] text-red-600">
              What guides us
            </p>
            <h2 className="mt-5 text-3xl font-black uppercase leading-[.92] tracking-[-.05em] sm:text-4xl">
              Simple values.
              <span className="block text-red-600">Meaningful progress.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.7rem] bg-[#191410]/10 lg:grid-cols-3">
            {principles.map(({ icon, number, title, text }) => (
              <article key={title} className="relative bg-[#fffaf3] p-7 sm:p-9">
                <span className="absolute right-6 top-4 text-6xl font-black tracking-[-.1em] text-[#191410]/[.04]">
                  {number}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-red-50 text-red-600">
                  {createElement(icon, { size: 21 })}
                </span>
                <h3 className="mt-6 text-xl font-black uppercase">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#746961]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#191410] px-7 py-14 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16">
            <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full border-[55px] border-red-600/15" />
            <div className="relative">
              <p className="text-[9px] font-black uppercase tracking-[.22em] text-red-500">
                Your journey can start here
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-black uppercase leading-[.92] tracking-[-.05em] sm:text-4xl">
                Find the class that moves you.
              </h2>
            </div>
            <div className="relative mt-8 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
              <Link
                to="/classes"
                className="inline-flex items-center gap-5 rounded-full bg-red-600 px-7 py-4 text-[10px] font-black uppercase tracking-[.12em] transition hover:bg-white hover:text-[#191410]"
              >
                Explore classes <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/916291553606"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-5 rounded-full border border-white/20 px-7 py-4 text-[10px] font-black uppercase tracking-[.12em] transition hover:bg-white hover:text-[#191410]"
              >
                Book a trial <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
