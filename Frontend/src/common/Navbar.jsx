import { createElement, useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Classes", to: "/classes" },
  { name: "Gallery", to: "/gallery" },
  { name: "Contact", to: "/contact" },
];
const socialLinks = [
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
];

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${
        isScrolled || location.pathname !== "/"
          ? "bg-black/90 shadow-2xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[86px] max-w-[1480px] items-center border-b border-white/10 px-5 sm:px-8 xl:px-10">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src="/logo.png"
            alt="Unique Dance Academy logo"
            decoding="async"
            fetchPriority="high"
            className="h-26 w-26 object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,.45)]"
          />
          <span className="leading-none">
            <strong className="block text-[17px] font-black tracking-[-.04em] sm:text-[20px]">
              UNIQUE DANCE
            </strong>
            <span className="mt-1 block text-[14px] tracking-[.08em] text-red-500 sm:text-[16px]">
              ACADEMY
            </span>
          </span>
        </Link>

        <div className="ml-auto hidden h-full items-center gap-9 lg:flex xl:gap-11">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative flex h-full items-center text-[13px] font-bold uppercase transition-colors hover:text-red-500 ${
                  isActive
                    ? "text-white after:absolute after:inset-x-0 after:bottom-[-1px] after:h-[2px] after:bg-red-600"
                    : "text-white/90"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <a
          href="tel:6291553606"
          className="ml-auto hidden items-center gap-3 whitespace-nowrap text-[14px] font-bold xl:flex"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/60">
            <Phone size={15} />
          </span>
          6291553606 / 9123868156
        </a>

        <a
          href="https://wa.me/916291553606"
          target="_blank"
          rel="noreferrer"
          className="ml-8 hidden items-center gap-7 rounded-full bg-red-600 px-8 py-4 text-[13px] font-extrabold uppercase shadow-[0_10px_35px_rgba(220,0,20,.35)] transition hover:bg-red-700 lg:flex"
        >
          Join now <ArrowRight size={18} />
        </a>

        <button
          type="button"
          aria-label="Open navigation"
          onClick={() => setMobileOpen(true)}
          className="ml-auto grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-black/30 lg:hidden"
        >
          <Menu />
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 h-dvh w-[82%] max-w-sm overflow-y-auto overscroll-contain bg-[#0b0b0b] p-7 pb-10 shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 z-10 -mx-2 flex items-center justify-between bg-[#0b0b0b]/95 px-2 py-1 backdrop-blur">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="Unique Dance Academy logo"
              decoding="async"
              className="h-14 w-14 object-contain"
            />
            <span className="text-lg font-black">
              UNIQUE <span className="text-red-600">DANCE</span>
            </span>
          </Link>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setMobileOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-full bg-red-600"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-12 flex flex-col">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `border-b border-white/10 py-5 text-xl font-bold uppercase transition ${
                  isActive ? "text-red-500" : "text-white/90"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <a
          href="https://wa.me/916291553606"
          target="_blank"
          rel="noreferrer"
          className="mt-9 flex items-center justify-center gap-3 rounded-full bg-red-600 py-4 text-sm font-black uppercase"
        >
          Join a class <ArrowRight size={17} />
        </a>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-center text-[10px] font-bold uppercase tracking-[.28em] text-white/50">
            Follow us
          </p>
          <div className="mt-4 flex justify-center gap-4">
            {socialLinks.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-red-600 hover:bg-red-600"
              >
                {createElement(icon, { size: 18 })}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </header>
  );
}
