import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatInterface from "@/components/ChatInterface";
import { Bot, Zap, Target } from "lucide-react";

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

              {/* Chat Interface */}
              <ChatInterface />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;