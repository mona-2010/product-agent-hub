import { useState } from "react";
import clsx from "clsx"; // install if not already: npm i clsx

type Tab = {
  id: string;
  label: string;
  heading: string;
  subHeading: string;
  text: string;
  quote: string;
};

const tabs: Tab[] = [
  {
    id: "marketers",
    label: "Marketers",
    heading: "Save and find quotes & highlights",
    subHeading: "that inspire you.",
    text: "Our AI agents help marketers craft campaigns, generate content, and analyze results instantly. Get tailored strategies that align with your brand voice and goals.",
    quote: "True change is within marketing innovation.",
  },
  {
    id: "designers",
    label: "Designers",
    heading: "Turn ideas into stunning visuals",
    subHeading: "faster than ever.",
    text: "Design assistants generate creative briefs, mood boards, and asset variations, so you can focus on making visuals that truly stand out.",
    quote: "Creativity amplified by collaboration.",
  },
  {
    id: "writers",
    label: "Writers",
    heading: "Write smarter, not harder",
    subHeading: "with AI support.",
    text: "From blog posts to ad copy, our writing agents suggest outlines, headlines, and content improvements while keeping your unique tone intact.",
    quote: "Great writing starts with great tools.",
  },
  {
    id: "researchers",
    label: "Researchers",
    heading: "Discover insights effortlessly",
    subHeading: "with instant analysis.",
    text: "Our research agents summarize papers, extract insights, and compile reports so you can spend more time thinking and less time collecting.",
    quote: "Knowledge grows when shared.",
  },
  {
    id: "developers",
    label: "Developers",
    heading: "Ship faster with AI-driven assistance",
    subHeading: "from code to launch.",
    text: "Developers can use AI agents to generate snippets, debug issues, and optimize workflows — making development smoother and faster.",
    quote: "Code smarter, not harder.",
  },
  {
    id: "everyone",
    label: "Everyone",
    heading: "Boost creativity and productivity",
    subHeading: "in your everyday tasks.",
    text: "No matter your role, our AI agents help brainstorm, organize, and accelerate your work — giving you more time for what truly matters.",
    quote: "Empower your mind with AI.",
  },
];

export default function TabbedContent() {
  const [active, setActive] = useState<string>("marketers");

  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-12">
      <div className="container mx-auto text-center px-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
          For visual minds of all kinds.
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={clsx(
                "text-lg font-medium transition-colors",
                active === tab.id
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-gradient-to-br from-indigo-950 via-purple-1000 via-purple-800 to-blue-1000 text-white rounded-xl p-10 max-w-3xl mx-auto space-y-6 shadow-2xl shadow-purple-500/20">
          <p className="uppercase tracking-wide text-sm opacity-80">
            Made for {current.label}
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold">
            {current.heading}{" "}
            <span className="italic font-normal">{current.subHeading}</span>
          </h3>
          <p className="text-base leading-relaxed opacity-90">{current.text}</p>

          <blockquote className="bg-blue text-white font-medium italic px-4 py-2 rounded">
            “{current.quote}”
          </blockquote>

        </div>
      </div>
    </section>
  );
}
