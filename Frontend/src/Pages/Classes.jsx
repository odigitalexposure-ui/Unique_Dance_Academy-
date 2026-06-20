import { createElement } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Baby,
  Check,
  Clock3,
  Flame,
  Footprints,
  HeartPulse,
  Music2,
  Sparkles,
  Star,
  Trophy,
  UserRound,
  UsersRound,
} from "lucide-react";

const classes = [
  {
    number: "01",
    title: "Adult Lessons",
    category: "Adults",
    level: "All levels",
    icon: UsersRound,
    summary:
      "Welcoming dance sessions for adults who want to learn, stay active and enjoy movement without pressure.",
    description:
      "These lessons combine accessible choreography, rhythm exercises and fitness-focused movement. Students can begin with no prior experience and progress at a comfortable pace.",
    learn: ["Rhythm and coordination", "Full-body movement", "Easy choreography", "Confidence and fitness"],
    idealFor: "Adults seeking recreation, fitness or a new creative skill",
  },
  {
    number: "02",
    title: "Advanced Classes",
    category: "Technique",
    level: "Advanced",
    icon: Trophy,
    summary:
      "High-intensity training for experienced dancers ready to sharpen technique and performance quality.",
    description:
      "Advanced classes feature faster choreography, complex musicality, precision drills and performance coaching for dancers who already have strong foundations.",
    learn: ["Advanced combinations", "Speed and precision", "Musical interpretation", "Stage performance"],
    idealFor: "Experienced dancers preparing for shows, auditions or competitions",
  },
  {
    number: "03",
    title: "Beginner's Classes",
    category: "Foundations",
    level: "Beginner",
    icon: Footprints,
    summary:
      "A supportive starting point for anyone taking their first steps into dance.",
    description:
      "Students learn the building blocks of movement through simple exercises and easy combinations. Every class is paced to make learning comfortable and encouraging.",
    learn: ["Basic dance steps", "Posture and balance", "Beat recognition", "Movement confidence"],
    idealFor: "First-time dancers of any age",
  },
  {
    number: "04",
    title: "Choreography Classes",
    category: "Performance",
    level: "Open level",
    icon: Star,
    summary:
      "Complete routines designed for stage performances, events, competitions and digital content.",
    description:
      "These classes develop choreography memory, formations, expression and presentation. Programs can also be customized for schools, weddings and special occasions.",
    learn: ["Complete routines", "Group formations", "Expression and timing", "Performance polish"],
    idealFor: "Events, shows, competitions, weddings and reels",
  },
  {
    number: "05",
    title: "Hip Hop",
    category: "Street style",
    level: "Beginner to advanced",
    icon: Flame,
    summary:
      "Energetic street-style training built around groove, attitude, rhythm and individual expression.",
    description:
      "Hip Hop classes cover foundational grooves, footwork and choreography while encouraging students to develop confidence and their own movement personality.",
    learn: ["Grooves and bounce", "Footwork patterns", "Freestyle foundations", "Performance attitude"],
    idealFor: "Students who enjoy energetic music and expressive movement",
  },
  {
    number: "06",
    title: "Intermediate Classes",
    category: "Progression",
    level: "Intermediate",
    icon: Activity,
    summary:
      "Progressive training for dancers ready to move beyond the basics and take on greater challenges.",
    description:
      "Intermediate sessions develop stronger technique, quicker choreography retention, musicality and control through layered movement combinations.",
    learn: ["Technique refinement", "Faster combinations", "Movement dynamics", "Choreography memory"],
    idealFor: "Dancers with basic training who are ready to progress",
  },
  {
    number: "07",
    title: "Latin",
    category: "Partner & social",
    level: "All levels",
    icon: Music2,
    summary:
      "Rhythmic Latin-inspired movement focused on musicality, footwork, body action and confidence.",
    description:
      "Students explore lively Latin rhythms through structured steps and combinations. Training develops coordination, posture and expressive movement.",
    learn: ["Latin rhythm", "Footwork and turns", "Body coordination", "Confident presentation"],
    idealFor: "Students interested in social dance and vibrant musical styles",
  },
  {
    number: "08",
    title: "Lyrical / Contemporary",
    category: "Expression",
    level: "All levels",
    icon: Sparkles,
    summary:
      "Expressive movement that blends technique, emotion, flow and storytelling.",
    description:
      "Lyrical and contemporary classes help students connect movement with music and emotion through fluid combinations, floor work and creative expression.",
    learn: ["Flow and transitions", "Emotional expression", "Balance and flexibility", "Movement storytelling"],
    idealFor: "Dancers who enjoy expressive, artistic movement",
  },
  {
    number: "09",
    title: "Private Lessons",
    category: "One-to-one",
    level: "Personalized",
    icon: UserRound,
    summary:
      "Focused personal coaching shaped around the student's pace, schedule and goals.",
    description:
      "Private lessons offer direct instructor attention and a customized training plan. Sessions may focus on foundations, a specific style, performance preparation or a special routine.",
    learn: ["Personal feedback", "Customized exercises", "Flexible learning pace", "Goal-based choreography"],
    idealFor: "Students seeking privacy, flexibility or faster focused progress",
  },
  {
    number: "10",
    title: "Youth Classes",
    category: "Young dancers",
    level: "Age appropriate",
    icon: Baby,
    summary:
      "Positive, energetic classes that help young dancers build coordination, discipline and creativity.",
    description:
      "Youth sessions use age-appropriate music and choreography to create a fun learning environment while developing movement skills, teamwork and confidence.",
    learn: ["Coordination and rhythm", "Teamwork", "Creative movement", "Performance confidence"],
    idealFor: "Children and teenagers learning in a structured group",
  },
  {
    number: "11",
    title: "Zumba / Bollywood Fitness",
    category: "Dance fitness",
    level: "All fitness levels",
    icon: HeartPulse,
    summary:
      "An upbeat dance workout combining Bollywood music, cardio movement and easy-to-follow routines.",
    description:
      "These sessions make exercise enjoyable through continuous dance movement. The focus is on energy, stamina, mobility and a positive group atmosphere.",
    learn: ["Cardio endurance", "Full-body workout", "Bollywood combinations", "Energy and mobility"],
    idealFor: "Anyone who wants an enjoyable dance-based fitness routine",
  },
];

const learningPath = [
  {
    title: "Discover",
    text: "Tell us your age, experience, preferred style and reason for learning.",
  },
  {
    title: "Try",
    text: "Join a trial session to experience the instructor, pace and class atmosphere.",
  },
  {
    title: "Train",
    text: "Build skills through structured lessons, regular practice and clear feedback.",
  },
  {
    title: "Perform",
    text: "Apply your training through choreography, events and stage opportunities.",
  },
];

const whatsappLink = (className = "dance classes") =>
  `https://wa.me/916291553606?text=${encodeURIComponent(
    `Hello Unique Dance Academy, I would like more information about ${className}.`,
  )}`;

export default function ClassesPage() {
  return (
    <main className="overflow-hidden bg-[#fffaf3] text-[#191410]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#790914] via-[#ad101f] to-[#e22a35] pb-20 pt-[150px] text-white sm:pb-24 lg:pb-28 lg:pt-[180px]">
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:25px_25px]" />
        <div className="absolute -right-28 top-10 text-[clamp(11rem,27vw,28rem)] font-black uppercase leading-none tracking-[-.12em] text-white/[.035]">
          Move
        </div>

        <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
          <p className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[.28em] text-red-100">
            <span className="h-px w-10 bg-red-200" />
            Classes for every journey
          </p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_430px] lg:items-end">
            <h1 className="text-[clamp(4rem,9vw,9rem)] font-black uppercase leading-[.78] tracking-[-.085em]">
              Learn. Move.
              <span className="block text-[#ffb9b8]">Become.</span>
            </h1>
            <div>
              <p className="border-l border-white/40 pl-6 text-base leading-8 text-white/80">
                Eleven focused programs for beginners, experienced dancers,
                children, adults, performers and fitness enthusiasts.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#class-list"
                  className="inline-flex items-center gap-4 rounded-full bg-white px-6 py-4 text-[10px] font-black uppercase tracking-[.12em] text-[#9e0d1b] transition hover:bg-[#191410] hover:text-white"
                >
                  Explore all classes <ArrowDown size={16} />
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-4 rounded-full border border-white/30 px-6 py-4 text-[10px] font-black uppercase tracking-[.12em] transition hover:bg-white hover:text-[#9e0d1b]"
                >
                  Ask for guidance <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#191410]/10 bg-[#f2e9df]">
        <div className="mx-auto grid max-w-[1380px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">
          {[
            ["11", "Class options"],
            ["All", "Experience levels"],
            ["Youth & adult", "Age groups"],
            ["Private & group", "Training formats"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-r border-[#191410]/10 px-3 py-6 text-center last:border-r-0 sm:py-8"
            >
              <strong className="block text-xl font-black uppercase sm:text-2xl">
                {value}
              </strong>
              <span className="mt-1 block text-[8px] font-black uppercase tracking-[.18em] text-[#7c7068] sm:text-[9px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="class-list" className="relative py-20 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-40 top-20 h-[480px] w-[480px] rounded-full bg-red-500/8 blur-[120px]" />
        <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_430px] lg:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.25em] text-red-600">
                Explore our programs
              </p>
              <h2 className="mt-5 text-[clamp(3.2rem,6.5vw,6.8rem)] font-black uppercase leading-[.84] tracking-[-.075em]">
                Choose how
                <span className="block text-red-600">you want to grow.</span>
              </h2>
            </div>
            <p className="border-l-2 border-red-600 pl-6 text-[15px] leading-7 text-[#71665e]">
              Every class has a clear purpose. Compare the focus, level and
              learning outcomes below, then contact us for current batch
              timings and availability.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {classes.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[1.6rem] border border-[#191410]/10 bg-white p-6 shadow-[0_18px_55px_rgba(58,37,23,.065)] transition duration-300 hover:-translate-y-1 hover:border-red-600/30 hover:shadow-[0_24px_70px_rgba(58,37,23,.12)] sm:p-8"
              >
                <span className="absolute right-5 top-2 text-7xl font-black tracking-[-.1em] text-[#191410]/[.035]">
                  {item.number}
                </span>

                <div className="relative flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                    {createElement(item.icon, { size: 21 })}
                  </span>
                  <div className="flex flex-wrap justify-end gap-2">
                    <span className="rounded-full bg-[#f4eee7] px-3 py-2 text-[8px] font-black uppercase tracking-[.13em] text-[#6f645c]">
                      {item.category}
                    </span>
                    <span className="rounded-full bg-red-50 px-3 py-2 text-[8px] font-black uppercase tracking-[.13em] text-red-600">
                      {item.level}
                    </span>
                  </div>
                </div>

                <h3 className="relative mt-6 text-2xl font-black uppercase tracking-[-.035em] sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 font-semibold leading-6 text-[#4e453f]">
                  {item.summary}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#776c64]">
                  {item.description}
                </p>

                <div className="mt-6 border-t border-[#191410]/10 pt-5">
                  <p className="text-[9px] font-black uppercase tracking-[.17em] text-red-600">
                    What you will learn
                  </p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {item.learn.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-xs font-semibold text-[#5c524b]"
                      >
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-red-50 text-red-600">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-xl bg-[#f8f3ed] px-4 py-3">
                  <span className="text-[8px] font-black uppercase tracking-[.15em] text-[#93877e]">
                    Best suited for
                  </span>
                  <p className="mt-1 text-xs font-semibold leading-5 text-[#5c524b]">
                    {item.idealFor}
                  </p>
                </div>

                {/* <a
                  href={whatsappLink(item.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-4 text-[9px] font-black uppercase tracking-[.14em] text-[#191410] transition hover:text-red-600"
                >
                  Enquire about this class <ArrowRight size={15} />
                </a> */}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1e8de] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[390px_1fr]">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.25em] text-red-600">
                Your learning journey
              </p>
              <h2 className="mt-5 text-4xl font-black uppercase leading-[.9] tracking-[-.06em] sm:text-5xl">
                From interest
                <span className="block text-red-600">to confidence.</span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#71665e]">
                You do not need to know exactly where to begin. We help every
                student find a suitable class and a realistic path forward.
              </p>
            </div>

            <ol className="grid gap-px overflow-hidden rounded-[1.6rem] bg-[#191410]/10 sm:grid-cols-2">
              {learningPath.map((step, index) => (
                <li key={step.title} className="bg-[#fffaf3] p-7 sm:p-8">
                  <span className="text-[9px] font-black tracking-[.16em] text-red-600">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-black uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#71665e]">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#860b17] to-[#d71c2d] px-7 py-14 text-white shadow-[0_30px_90px_rgba(150,10,25,.22)] sm:px-12 lg:px-16 lg:py-18">
            <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full border-[55px] border-white/[.055]" />
            <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[.22em] text-red-200">
                  Need help choosing?
                </p>
                <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-[.9] tracking-[-.06em] sm:text-5xl lg:text-6xl">
                  Let&apos;s find the right class for you.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">
                  Share your age, experience, preferred schedule and learning
                  goal. Our team will recommend the most suitable option.
                </p>
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-5 rounded-full bg-white px-7 py-4 text-[10px] font-black uppercase tracking-[.12em] text-[#8d0b17] transition hover:bg-[#191410] hover:text-white"
              >
                Message our team <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
