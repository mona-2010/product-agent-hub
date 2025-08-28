import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lightbulb, Heart, RefreshCcw, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 text-center text-white">
          <div className="container px-4 mx-auto max-w-4xl space-y-12">
            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Why TheStrategyFilter?
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Everything we do starts with this question.
              </p>
            </div>

            {/* Main intro box */}
            <div className="bg-card/30 backdrop-blur-lg border border-border/40 rounded-xl p-6 md:p-10 shadow-lg">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                Why should TheStrategyFilter exist? Why should businesses care about it?
                Why is intelligent automation the future of marketing?
              </p>
              <p className="mt-4 text-muted-foreground text-lg">
                Eventually, the “why” led us here.
              </p>
            </div>

            {/* Sections */}
            <div className="text-left space-y-16 max-w-3xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                  Because marketing doesn’t have to be complicated.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  We’ve always approached marketing with one goal: simplicity. Why waste
                  time on repetitive tasks when AI can do the heavy lifting?
                  MarketingAI helps you create **brand names**, **email newsletters**,
                  **social media posts**, and **growth strategies** effortlessly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-3">
                  <Heart className="w-6 h-6 text-red-500" />
                  Because your brand deserves better engagement.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Your audience wants authentic, personalized communication.
                  Our AI agents are designed to understand your goals and
                  deliver strategies that connect with real people — faster
                  and more effectively than ever before.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-3">
                  <RefreshCcw className="w-6 h-6 text-blue-500" />
                  Because growth should feel natural.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Forget outdated tactics. Forget guesswork. With MarketingAI,
                  you have access to specialized AI agents for **SEO**,
                  **content writing**, **email campaigns**, and more —
                  all working together to make your brand grow organically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-3">
                  <Zap className="w-6 h-6 text-green-500" />
                  Because AI is just the start — the end goal is success.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Our tools don’t just automate; they empower. MarketingAI is your
                  creative partner, giving you time to focus on what matters —
                  building relationships, innovating, and achieving real results.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg shadow hover:bg-gradient transition"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
