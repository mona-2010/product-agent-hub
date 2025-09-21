import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Bot, Zap, Target, TrendingUp, Mail, Share2 } from "lucide-react";

// Import the output components
import ContentCreatorOutput from "./ContentCreatorOutput";
import SocialStrategistOutput from "./SocialStrategistOutput";
import EmailMarketerOutput from "./EmailMarketerOutput";
import SEOOptimizerOutput from "./SEOOptimizerOutput";
import GrowthHackerOutput from "./GrowthHackerOutput";
import BrandAnalystOutput from "./BrandAnalystOutput";

// Generic output component for other agents (placeholder)
const GenericAgentOutput = ({ agent, productName }: { agent: any, productName: string }) => {
  // Static data for other agents - you can customize this for each agent later
  const genericResults = {
    analysis: {
      keyInsights: [
        `${agent.name} analysis shows strong potential for ${productName}`,
        "Market positioning opportunities identified",
        "Competitive advantages discovered",
        "Growth potential assessment completed"
      ],
      recommendations: [
        `Implement ${agent.name.toLowerCase()} best practices`,
        "Focus on target audience engagement",
        "Optimize conversion funnel",
        "Monitor key performance indicators"
      ],
      metrics: {
        "Market Score": "8.5/10",
        "Potential ROI": "145%",
        "Risk Level": "Low",
        "Time to Impact": "2-3 months"
      }
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-base">Key Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {genericResults.analysis.keyInsights.map((insight: string, index: number) => (
            <div key={index} className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p className="text-sm">{insight}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-base">Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {genericResults.analysis.recommendations.map((rec: string, index: number) => (
            <div key={index} className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <p className="text-sm">{rec}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-card/60 backdrop-blur-sm md:col-span-2">
        <CardHeader>
          <CardTitle className="text-base">Key Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            {Object.entries(genericResults.analysis.metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className="text-sm text-muted-foreground">{key}</p>
                <p className="text-lg font-semibold">{value as string}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const agents = [
  {
    id: "content-creator",
    name: "Content Creator",
    description: "Generate engaging content, blogs, and social media posts",
    icon: <TrendingUp className="h-5 w-5" />,
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    id: "email-marketer",
    name: "Email Marketer",
    description: "Create email campaigns and newsletter content",
    icon: <Mail className="h-5 w-5" />,
    color: "bg-green-500/10 text-green-400 border-green-500/20"
  },
  {
    id: "social-strategist",
    name: "Social Strategist",
    description: "Plan social media strategies and campaigns",
    icon: <Share2 className="h-5 w-5" />,
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    id: "seo-optimizer",
    name: "SEO Optimizer",
    description: "Optimize content for search engines and keywords",
    icon: <Target className="h-5 w-5" />,
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  },
  {
    id: "growth-hacker",
    name: "Growth Hacker",
    description: "Find innovative ways to grow your product",
    icon: <Zap className="h-5 w-5" />,
    color: "bg-pink-500/10 text-pink-400 border-pink-500/20"
  },
  {
    id: "brand-analyst",
    name: "Brand Analyst",
    description: "Analyze brand positioning and competitive landscape",
    icon: <Bot className="h-5 w-5" />,
    color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
  }
];

const ChatInterface = () => {
  const [productName, setProductName] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState<"input" | "select" | "results">("input");

  const handleAgentSelect = async (agentId: string) => {
    setSelectedAgent(agentId);
    setIsAnalyzing(true);
    setCurrentStep("results");

    // Simulate API call delay
    setTimeout(() => {
      const selectedAgentData = agents.find(a => a.id === agentId);
      setResults({
        agent: selectedAgentData,
        agentId: agentId
      });
      setIsAnalyzing(false);
    }, 2000);

    // For future API integration:
    // try {
    //   const response = await fetch("https://summerproject.app.n8n.cloud/webhook/marketing-agent", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       productName,
    //       agentId
    //     })
    //   });
    //   const data = await response.json();
    //   setResults(data);
    // } catch (error) {
    //   console.error("Error calling API:", error);
    // } finally {
    //   setIsAnalyzing(false);
    // }
  };

  const resetChat = () => {
    setProductName("");
    setSelectedAgent(null);
    setResults(null);
    setCurrentStep("input");
    setIsAnalyzing(false);
  };

  const changeAgent = () => {
    // Keep the product name but reset agent selection
    setSelectedAgent(null);
    setResults(null);
    setCurrentStep("select");
    setIsAnalyzing(false);
  };

  const renderAgentOutput = () => {
    if (!results) return null;

    // Render specific output based on selected agent
    switch (results.agentId) {
      case "content-creator":
        return <ContentCreatorOutput productName={productName} />;
      case "social-strategist":
        return <SocialStrategistOutput productName={productName} />;
      case "email-marketer":
        return <EmailMarketerOutput productName={productName} />;
      case "seo-optimizer":
        return <SEOOptimizerOutput productName={productName} />;
      case "growth-hacker":
        return <GrowthHackerOutput productName={productName} />;
      case "brand-analyst":
        return <BrandAnalystOutput productName={productName} />;
      default:
        // For other agents, use generic output for now
        return <GenericAgentOutput agent={results.agent} productName={productName} />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="backdrop-blur-md bg-card/80 border-border/40 shadow-subtle">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">TheStrategyFilter</CardTitle>
          <h1>Marketing AI Assistant</h1>
          <p className="text-muted-foreground">
            Enter your product name and choose an AI agent to get started
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentStep === "input" && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your product name..."
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && productName.trim()) {
                      setCurrentStep("select");
                    }
                  }}
                  className="flex-1 bg-input/50 border-border/40"
                />
                <Button
                  onClick={() => {
                    if (productName.trim()) {
                      setCurrentStep("select");
                    }
                  }}
                  size="icon"
                  disabled={!productName.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {currentStep === "select" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  Choose an AI agent for "{productName}"
                </h3>
                <Button variant="ghost" size="sm" onClick={resetChat}>
                  Start Over
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {agents.map((agent) => (
                  <Card
                    key={agent.id}
                    className="cursor-pointer transition-all hover:shadow-glow/20 hover:border-primary/40 bg-card/60 backdrop-blur-sm"
                    onClick={() => handleAgentSelect(agent.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-md border ${agent.color}`}>
                          {agent.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{agent.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {agent.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {currentStep === "results" && (
            <div className="space-y-6">
              {/* Responsive wrapper */}
              <div className="grid grid-cols-1 sm:flex sm:items-center sm:justify-between sm:gap-4">
                {/* Agent Info */}
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-md border ${results?.agent?.color}`}>
                    {results?.agent?.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {results?.agent?.name} Analysis for "{productName}"
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {results?.agent?.description}
                    </p>
                  </div>
                </div>

                {/* Buttons stacked on small, inline on large */}
                <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
                  <Button variant="outline" size="sm" onClick={changeAgent}>
                    Change Agent
                  </Button>
                  <Button variant="outline" size="sm" onClick={resetChat}>
                    New Analysis
                  </Button>
                </div>
              </div>

              {isAnalyzing ? (
                <div className="text-center py-8">
                  <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Analyzing your product...</p>
                </div>
              ) : (
                renderAgentOutput()
              )}
            </div>
          )}


        </CardContent>
      </Card>
    </div>
  );
};

export default ChatInterface;