import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatInterface from "@/components/ChatInterface";
import TabbedContent from "@/components/Tabbedcontent";
import { Bot, Zap, Target, FileText, Bookmark, Image, Search, Network } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="container px-4 mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Build marketing campaigns with{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    AI-powered agents
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                  Create marketing strategies, content, and campaigns by chatting with specialized AI agents
                  that understand your products and goals.
                </p>
              </div>

              {/* Workflow Diagram Section */}
              <div className="flex justify-center items-center mb-20">
                <div className="flex items-center gap-12 relative">
                  {/* Left side icons */}
                  <div className="flex flex-col gap-6 relative">
                    <div className="p-3 rounded-lg bg-card/40 backdrop-blur-sm border border-border/40">
                      <FileText className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="p-3 rounded-lg bg-card/40 backdrop-blur-sm border border-border/40">
                      <Bookmark className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="p-3 rounded-lg bg-card/40 backdrop-blur-sm border border-border/40">
                      <Image className="h-6 w-6 text-muted-foreground" />
                    </div>

                    {/* Animated line to brain */}
                    <div className="absolute top-1/2 right-[-64px] w-16 h-0.5 bg-gradient-to-r from-muted-foreground/60 to-transparent overflow-hidden">
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xs text-muted-foreground animate-arrow-move">
                        →
                      </span>
                    </div>
                  </div>

                  {/* Center brain node */}
                  <div className="relative flex items-center justify-center">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse"></div>
                    {/* Brain icon */}
                    <div className="p-8 rounded-full bg-card border border-border/40 relative z-10">
                      <Bot className="h-10 w-10 text-primary" />
                    </div>
                  </div>

                  {/* Right side icons */}
                  <div className="flex flex-col gap-6 relative">
                    <div className="p-3 rounded-lg bg-card/40 backdrop-blur-sm border border-border/40">
                      <Network className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="p-3 rounded-lg bg-card/40 backdrop-blur-sm border border-border/40">
                      <Search className="h-6 w-6 text-muted-foreground" />
                    </div>

                    {/* Animated line out of brain */}
                    <div className="absolute top-1/2 left-[-64px] w-16 h-0.5 bg-gradient-to-r from-transparent to-muted-foreground/60 overflow-hidden">
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-lg text-muted-foreground animate-arrow-move-out">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <ChatInterface />

              {/* Features Preview */}
              <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto mb-12">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card/40 backdrop-blur-sm border border-border/40">
                  <div className="p-2 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">6 Specialized Agents</h3>
                    <p className="text-sm text-muted-foreground">Content, Email, Social & more</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card/40 backdrop-blur-sm border border-border/40">
                  <div className="p-2 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">Instant Analysis</h3>
                    <p className="text-sm text-muted-foreground">Get insights in seconds</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card/40 backdrop-blur-sm border border-border/40">
                  <div className="p-2 rounded-md bg-green-500/10 text-green-400 border border-green-500/20">
                    <Target className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">Actionable Results</h3>
                    <p className="text-sm text-muted-foreground">Ready-to-use strategies</p>
                  </div>
                </div>
              </div>

              <TabbedContent />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;