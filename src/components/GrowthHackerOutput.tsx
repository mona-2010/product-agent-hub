import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Users, DollarSign, BarChart3, Zap, Target, Share2 } from "lucide-react";

interface GrowthHackerOutputProps {
  productName: string;
}

const GrowthHackerOutput = ({ productName }: GrowthHackerOutputProps) => {
  const safeProductName = productName || "product";
  
  // Static data for Growth Hacker - replace with actual API response later
  const growthData = {
    keyPerformanceIndicators: [
      {
        title: "Customer Acquisition Cost",
        value: "$50",
        change: "-5%",
        trend: "down",
        color: "text-red-400"
      },
      {
        title: "Conversion Rate",
        value: "15%",
        change: "+10%",
        trend: "up",
        color: "text-green-400"
      },
      {
        title: "Customer Lifetime Value",
        value: "$500",
        change: "+20%",
        trend: "up",
        color: "text-green-400"
      }
    ],
    
    growthRecommendations: [
      {
        icon: <Share2 className="h-5 w-5 text-blue-400" />,
        title: "Referral Program",
        description: "Implement a referral program to incentivize existing customers to refer new ones.",
        color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
      },
      {
        icon: <Target className="h-5 w-5 text-purple-400" />,
        title: "Landing Page Optimization",
        description: "Optimize landing pages for better conversion rates by improving content and user experience.",
        color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
      },
      {
        icon: <Zap className="h-5 w-5 text-orange-400" />,
        title: "Social Media Marketing",
        description: "Use social media platforms to engage with potential customers and build brand awareness.",
        color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
      }
    ],
    
    performanceCharts: [
      {
        title: "Customer Acquisition Cost Over Time",
        value: "$50",
        period: "Last 6 Months",
        change: "-5%",
        trend: "down"
      },
      {
        title: "Conversion Rate by Channel",
        value: "15%",
        period: "Last Quarter",
        change: "+10%",
        trend: "up"
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Growth Analyst</h2>
        <p className="text-muted-foreground">
          This agent analyzes your business data to provide insights and recommendations for growth strategies.
        </p>
      </div>

      {/* Key Performance Indicators */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          Key Performance Indicators
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {growthData.keyPerformanceIndicators.map((kpi, index) => (
            <Card key={index} className="bg-card/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">{kpi.title}</p>
                <div className="text-3xl font-bold mb-2">{kpi.value}</div>
                <div className={`flex items-center justify-center gap-1 text-sm ${kpi.color}`}>
                  {kpi.trend === "up" ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  {kpi.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Growth Recommendations */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          Growth Recommendations
        </h3>
        <div className="space-y-4">
          {growthData.growthRecommendations.map((recommendation, index) => (
            <Card key={index} className="bg-card/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg border ${recommendation.color}`}>
                    {recommendation.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">{recommendation.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {recommendation.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Performance Charts */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          Performance Charts
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {growthData.performanceCharts.map((chart, index) => (
            <Card key={index} className="bg-card/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-base">{chart.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{chart.value}</div>
                  <p className="text-sm text-muted-foreground mb-2">{chart.period}</p>
                  <div className={`flex items-center justify-center gap-1 text-sm ${
                    chart.trend === "up" ? "text-green-400" : "text-red-400"
                  }`}>
                    {chart.trend === "up" ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    {chart.change}
                  </div>
                </div>
                
                {/* Simple chart visualization */}
                <div className="h-32 bg-muted/30 rounded-lg flex items-end justify-center p-4">
                  <svg viewBox="0 0 200 60" className="w-full h-full">
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                      points="10,50 30,40 50,45 70,30 90,25 110,35 130,20 150,15 170,25 190,10"
                    />
                  </svg>
                </div>
                
                {/* Channel labels for conversion rate chart */}
                {index === 1 && (
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Direct</span>
                    <span>Organic</span>
                    <span>Paid</span>
                    <span>Referral</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrowthHackerOutput;