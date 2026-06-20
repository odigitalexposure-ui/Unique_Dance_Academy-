import {
  Award,
  Users,
  Music2,
  Heart,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: Users,
      title: "Classes For All Ages",
      text: "Youth classes, adult lessons, beginner batches and advanced training.",
    },
    {
      icon: Music2,
      title: "Multiple Dance Styles",
      text: "Hip Hop, Latin, Contemporary, Choreography, Bollywood Fitness and more.",
    },
    {
      icon: Award,
      title: "Performance Focused",
      text: "Training that builds confidence, stage presence and dance expression.",
    },
    {
      icon: Heart,
      title: "Fitness With Fun",
      text: "Zumba and Bollywood fitness sessions to stay active while enjoying music.",
    },
    {
      icon: Sparkles,
      title: "Creative Environment",
      text: "A friendly academy where students learn, grow and express themselves.",
    },
    {
      icon: ShieldCheck,
      title: "Personal Guidance",
      text: "Private lessons and level-based training for better individual progress.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fff7ef] py-24">
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-black uppercase tracking-[0.2em] text-red-600">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-3xl font-black uppercase leading-[1.12] tracking-[-.025em] text-[#111111] [word-spacing:.1em] sm:text-4xl lg:text-5xl">
              Learn Dance With
              <span className="block text-red-600">Energy & Confidence</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Unique Dance Academy is designed for students who want more than
              just dance steps. We focus on rhythm, expression, confidence,
              discipline and performance.
            </p>

            <div className="mt-8 overflow-hidden rounded-[2rem] bg-[#111111] p-6 text-white shadow-2xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <h3 className="text-2xl font-black text-red-500">10+</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-gray-300">
                    Styles
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-red-500">2021</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-gray-300">
                    Since
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-red-500">All</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-gray-300">
                    Levels
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[1.8rem] bg-white p-6 shadow-lg transition duration-500 hover:-translate-y-2 hover:bg-[#111111]"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-red-100 p-4 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-black text-[#111111] transition group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 transition group-hover:text-gray-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
