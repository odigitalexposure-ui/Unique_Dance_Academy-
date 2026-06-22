import { createElement } from "react";
import {
  ArrowRight,
  ArrowUp,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Classes", to: "/classes" },
  { name: "Gallery", to: "/gallery" },
  { name: "Contact", to: "/contact" },
];

const classes = [
  "Hip Hop",
  "Beginner's Classes",
  "Lyrical / Contemporary",
  "Zumba / Bollywood Fitness",
  "Private Lessons",
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1EMzzoY7i9/?mibextid=wwXIfr",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/unique_dance_academy_india?igsh=M3g1aWFvcHF3ZG1y",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@uniquedanceacademyindia4650?feature=shared",
    icon: FaYoutube,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/916291553606",
    icon: FaWhatsapp,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#17110f] text-white">
      <div className="pointer-events-none absolute -right-28 top-12 text-[clamp(9rem,22vw,22rem)] font-black uppercase leading-none tracking-[-.12em] text-white/[.018]">
        Dance
      </div>

      <div className="border-b border-white/10 bg-gradient-to-r from-[#850c17] to-[#d71c2d]">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[.23em] text-red-100/70">
              Ready to start moving?
            </p>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-[-.04em] sm:text-3xl">
              Book your trial class today.
            </h2>
          </div>
          <a
            href="https://wa.me/916291553606"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-5 rounded-full bg-white px-6 py-4 text-[10px] font-black uppercase tracking-[.12em] text-[#9d0d1b] transition hover:bg-[#17110f] hover:text-white"
          >
            Chat on WhatsApp <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 pb-7 pt-14 sm:px-8 lg:px-10 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_.65fr_.9fr_1.25fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Unique Dance Academy logo"
                loading="lazy"
                decoding="async"
                className="h-20 w-20 object-contain"
              />
              <span>
                <strong className="block text-xl font-black tracking-[-.04em]">
                  UNIQUE DANCE
                </strong>
                <span className="mt-1 block text-sm tracking-[.16em] text-red-500">
                  ACADEMY
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-7 text-white/55">
              A welcoming space where children, youth and adults build
              confidence, creativity and performance skills through dance.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {socials.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/75 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  {createElement(icon, { size: 16 })}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[.2em] text-red-500">
              Explore
            </h3>
            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-[15px] font-semibold text-white/65 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[.2em] text-red-500">
              Popular classes
            </h3>
            <ul className="mt-6 space-y-4">
              {classes.map((item) => (
                <li key={item}>
                  <Link
                    to="/classes"
                    className="text-[15px] font-semibold text-white/65 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[.2em] text-red-500">
              Contact the academy
            </h3>
            <div className="mt-6 space-y-5">
              <a
                href="tel:6291553606"
                className="flex items-start gap-4 text-[15px] text-white/65 transition hover:text-white"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5 text-red-500">
                  <Phone size={15} />
                </span>
                <span className="pt-2">6291553606 / 9123868156</span>
              </a>
              <a
                href="mailto:uniquedanceacademy2021@gmail.com"
                className="flex items-start gap-4 text-[15px] text-white/65 transition hover:text-white"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5 text-red-500">
                  <Mail size={15} />
                </span>
                <span className="break-all pt-2">
                  uniquedanceacademy2021@gmail.com
                </span>
              </a>
              <a
                href="https://www.google.com/maps/place/Unique+Dance+Academy/@22.6338807,88.4509206,17z/data=!3m1!4b1!4m6!3m5!1s0x39f89f9daa9508b9:0xace29d8880aceb9a!8m2!3d22.6338807!4d88.4509206!16s%2Fg%2F11vyxns978?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 text-[15px] leading-7 text-white/65 transition hover:text-white"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5 text-red-500">
                  <MapPin size={15} />
                </span>
                <span>
                  Nabarun Sangha, Solua Azadhind Garh, Chinar Park, Rajarhat,
                  West Bengal 700136
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Unique Dance Academy. All rights reserved.</p>
          <p>
            Designed and developed by{" "}
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-white/75 transition hover:text-red-500"
            >
              Digital Exposure Online Services
            </a>
          </p>
        </div>
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-24 right-5 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white/65 transition hover:border-red-600 hover:bg-red-600 hover:text-white sm:right-8 lg:right-10"
      >
        <ArrowUp size={17} />
      </button>
    </footer>
  );
}
