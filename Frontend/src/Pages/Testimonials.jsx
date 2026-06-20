import { Star, Quote, Heart, MessageCircle } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Nivedita Garai",
      text: "The academy is awesome. Teachers are very good and experienced. They take good care in teaching the dance techniques to children. My child gets very excited for each class. Overall wonderful experience. Keep it up.",
    },
    {
      name: "Amrita Chakraborty",
      text: "Unique Dance Academy is one of the best western dance class in Salua area. The instructors were so nice and broke down every step so that everyone could understand and follow along. Special thanks to Neha Sharma ma’am for teaching my kids so patiently.",
    },
    {
      name: "Anurag Agarwal",
      text: "I've been attending this dance class for the past few months, and I couldn't be happier with my experience. The instructors are incredibly talented, patient, and passionate about dance.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fff7ef] py-24">
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-5 py-2 text-sm font-black uppercase tracking-[0.2em] text-red-600">
            <Heart size={16} />
            Student Reviews
          </span>

          <h2 className="mt-6 text-4xl font-black uppercase leading-tight text-[#111111] sm:text-5xl lg:text-6xl">
            Loved By Students
            <span className="block text-red-600">& Parents</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Real words from people who have experienced the energy, care and
            training at Unique Dance Academy.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative rounded-[2rem] bg-white p-7 shadow-xl transition duration-500 hover:-translate-y-3 hover:bg-[#111111]"
            >
              <Quote
                size={46}
                className="absolute right-6 top-6 text-red-100 transition group-hover:text-red-500/20"
              />

              <div className="mb-5 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="relative z-10 text-sm leading-7 text-gray-700 transition group-hover:text-gray-300">
                “{review.text}”
              </p>

              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-lg font-black text-white">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-black text-[#111111] transition group-hover:text-white">
                    {review.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-red-600">
                    Google Review
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-red-600 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-[#111111] p-8 text-center text-white shadow-2xl">
          <MessageCircle className="mx-auto text-red-500" size={42} />

          <h3 className="mt-4 text-3xl font-black uppercase">
            Want To Experience It Yourself?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-gray-300">
            Join Unique Dance Academy and start learning with experienced,
            friendly and passionate instructors.
          </p>

          <a
            href="https://wa.me/916291553606"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
          >
            Book A Trial Class
          </a>
        </div>
      </div>
    </section>
  );
}