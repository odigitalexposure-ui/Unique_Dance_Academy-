import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Navigation,
  Clock,
  MessageCircle,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const whatsappNumber = "916291553606";

  const mapNavigationLink =
    "https://www.google.com/maps/place/Unique+Dance+Academy/@22.6338807,88.4509206,17z/data=!3m1!4b1!4m6!3m5!1s0x39f89f9daa9508b9:0xace29d8880aceb9a!8m2!3d22.6338807!4d88.4509206!16s%2Fg%2F11vyxns978?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D";

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10 digit phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const text = `Hello Unique Dance Academy,

I want to enquire about dance classes.

Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#fff7ef] py-24"
    >
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-5 py-2 text-sm font-black uppercase tracking-[0.2em] text-red-600">
            <MessageCircle size={16} />
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl font-black uppercase leading-tight text-[#111111] sm:text-5xl lg:text-6xl">
            Start Your Dance
            <span className="block text-red-600">Journey Today</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Visit Unique Dance Academy or send us a message directly on WhatsApp
            to know about classes, batches and admission.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <a
            href="tel:6291553606"
            className="group rounded-[2rem] bg-white p-7 text-center shadow-xl transition hover:-translate-y-2 hover:bg-[#111111]"
          >
            <Phone className="mx-auto text-red-600 group-hover:text-white" size={34} />
            <h3 className="mt-4 text-xl font-black text-black group-hover:text-white">
              Call Us
            </h3>
            <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-300">
              6291553606 / 9123868156
            </p>
          </a>

          <a
            href="mailto:uniquedanceacademy2021@gmail.com"
            className="group rounded-[2rem] bg-white p-7 text-center shadow-xl transition hover:-translate-y-2 hover:bg-[#111111]"
          >
            <Mail className="mx-auto text-red-600 group-hover:text-white" size={34} />
            <h3 className="mt-4 text-xl font-black text-black group-hover:text-white">
              Email Us
            </h3>
            <p className="mt-2 break-words text-sm text-gray-600 group-hover:text-gray-300">
              uniquedanceacademy2021@gmail.com
            </p>
          </a>

          <a
            href={mapNavigationLink}
            target="_blank"
            rel="noreferrer"
            className="group rounded-[2rem] bg-white p-7 text-center shadow-xl transition hover:-translate-y-2 hover:bg-[#111111]"
          >
            <MapPin className="mx-auto text-red-600 group-hover:text-white" size={34} />
            <h3 className="mt-4 text-xl font-black text-black group-hover:text-white">
              Visit Academy
            </h3>
            <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-300">
              Solua, Chinar Park, Rajarhat
            </p>
          </a>
        </div>

        {/* Main Contact Area */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Form */}
          <div className="rounded-[2rem] bg-[#111111] p-6 text-white shadow-2xl sm:p-8">
            <h3 className="text-3xl font-black uppercase">
              Send Message
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-300">
              Fill the form and your enquiry will open directly in WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-gray-400 focus:border-red-500"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-gray-400 focus:border-red-500"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Write your message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-gray-400 focus:border-red-500"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
              >
                Send On WhatsApp
                <Send size={18} />
              </button>
            </form>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.facebook.com/share/1EMzzoY7i9/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-red-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/unique_dance_academy_india?igsh=M3g1aWFvcHF3ZG1y"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-red-600"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com/@uniquedanceacademyindia4650?feature=shared"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-red-600"
              >
                <FaYoutube />
              </a>

              <a
                href="https://wa.me/916291553606"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-white transition hover:bg-green-600"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <div className="relative h-[420px] w-full">
              <iframe
                title="Unique Dance Academy Google Map"
                src="https://www.google.com/maps?q=Unique%20Dance%20Academy%20Nabarun%20Sangha%20Solua%20Azadhind%20Garh%20Chinar%20Park%20Rajarhat%20West%20Bengal%20700136&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              <a
                href={mapNavigationLink}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-5 left-5 right-5 flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-4 text-sm font-black uppercase tracking-wide text-white shadow-xl transition hover:bg-black"
              >
                Navigate On Google Map
                <Navigation size={18} />
              </a>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#fff7ef] p-5">
                <Clock className="text-red-600" size={28} />
                <h4 className="mt-3 font-black text-black">
                  Class Enquiry
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  Call or WhatsApp for batch timing and admission details.
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff7ef] p-5">
                <MapPin className="text-red-600" size={28} />
                <h4 className="mt-3 font-black text-black">
                  Full Address
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  Nabarun Sangha, Solua Azadhind Garh, 1st Floor, Solua,
                  Chinar Park, Rajarhat, West Bengal 700136
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}