import {
  ClipboardCheck,
  Music,
  Dumbbell,
  Sparkles,
  Trophy,
  ArrowRight,
} from "lucide-react";

export default function TrainingProcess() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Choose Your Level",
      text: "Beginner, intermediate, advanced, youth, adult or private lesson.",
    },
    {
      icon: Music,
      title: "Learn The Basics",
      text: "Start with rhythm, posture, steps, coordination and confidence.",
    },
    {
      icon: Dumbbell,
      title: "Practice & Improve",
      text: "Regular training improves flexibility, stamina, timing and expression.",
    },
    {
      icon: Sparkles,
      title: "Build Your Style",
      text: "Learn choreography, stage presence and your own performance identity.",
    },
    {
      icon: Trophy,
      title: "Perform With Confidence",
      text: "Get ready for events, reels, shows, competitions and stage performances.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fff7ef] py-24">
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-black uppercase tracking-[0.2em] text-red-600">
            How We Train
          </span>

          <h2 className="mt-6 text-3xl font-black uppercase leading-[1.12] tracking-[-.025em] text-[#111111] [word-spacing:.1em] sm:text-4xl lg:text-5xl">
            From First Step To
            <span className="block text-red-600">Final Performance</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Our training journey is designed to help every student grow step by
            step — from basic rhythm to confident stage performance.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-red-200 lg:block" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative grid items-center gap-6 lg:grid-cols-2 ${
                    isLeft ? "" : "lg:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <div
                    className={`rounded-[2rem] bg-white p-6 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                      isLeft ? "lg:mr-12" : "lg:ml-12"
                    }`}
                  >
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg">
                      <Icon size={30} />
                    </div>

                    <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
                      Step {index + 1}
                    </p>

                    <h3 className="mt-3 text-xl font-black uppercase text-[#111111]">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {step.text}
                    </p>
                  </div>

                  <div className="absolute left-1/2 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-white shadow-xl lg:flex">
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="mt-16 rounded-[2rem] bg-[#111111] p-8 text-center text-white shadow-2xl">
          <h3 className="text-2xl font-black uppercase">
            Ready To Start Your Dance Journey?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-gray-300">
            Whether you are a beginner or preparing for stage performance, our
            academy has the right class for you.
          </p>

          <a
            href="https://wa.me/916291553606"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
          >
            Book Your Class
            <ArrowRight size={18} />
          </a>
        </div> */}
      </div>
    </section>
  );
}
