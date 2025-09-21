import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Eye, MessageCircle, Target, Zap } from "lucide-react";

interface BrandAnalystOutputProps {
  productName: string;
}

const BrandAnalystOutput = ({ productName }: BrandAnalystOutputProps) => {
  const safeProductName = productName || "product";
  
  // Static data for Brand Analysis Results - replace with actual API response later
  const brandAnalysisData = {
    brandIdentityScore: {
      score: 85,
      items: [
        { label: "Clarity of Mission", status: "good", icon: <CheckCircle className="h-4 w-4 text-green-400" /> },
        { label: "Audience Resonance", status: "good", icon: <CheckCircle className="h-4 w-4 text-green-400" /> },
        { label: "Visual Consistency (Needs Improvement)", status: "warning", icon: <AlertTriangle className="h-4 w-4 text-yellow-400" /> }
      ]
    },
    
    toneOfVoiceAnalysis: {
      description: "Your brand communicates with a consistent personality. Here's a breakdown of the primary tonal attributes detected.",
      attributes: [
        { label: "Professional", percentage: 75, color: "bg-purple-500" },
        { label: "Friendly", percentage: 85, color: "bg-pink-500" },
        { label: "Playful", percentage: 30, color: "bg-pink-500" }
      ]
    },
    
    marketPositioning: {
      description: "Your brand's perceived position against key competitors based on Innovation and Customer Centricity.",
      competitors: [
        { name: "Your Brand", x: 85, y: 80, color: "bg-blue-500" },
        { name: "Competitor A", x: 60, y: 70, color: "bg-gray-500" },
        { name: "Competitor B", x: 40, y: 60, color: "bg-gray-500" },
        { name: "Competitor C", x: 30, y: 50, color: "bg-gray-500" }
      ]
    },
    
    strategicBrandingAdvice: [
      {
        title: "Enhance Consistency",
        description: "Align visual elements across all platforms. Use a consistent color palette and logo style to boost brand recognition by up to 35%.",
        color: "border-l-purple-500"
      },
      {
        title: "Amplify Engagement",
        description: "Launch interactive content like polls and Q&As. Brands with superior customer engagement outperform others by 25% in revenue growth.",
        color: "border-l-blue-500"
      },
      {
        title: "Leverage Authenticity",
        description: "Showcase behind-the-scenes content and user-generated stories. 90% of consumers say authenticity is important when deciding which brands they like and support.",
        color: "border-l-pink-500"
      }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Brand Analysis Results</h2>
        <p className="text-muted-foreground">
          An in-depth look at your brand's market presence and identity.
        </p>
      </div>

      {/* Brand Identity Score and Tone of Voice Analysis */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Brand Identity Score */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Eye className="h-6 w-6 text-blue-400" />
            Brand Identity Score
          </h3>
          
          <div className="flex items-start gap-6">
            {/* Circular Progress */}
            <div className="relative w-32 h-32 flex-shrink-0">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-muted/20"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - brandAnalysisData.brandIdentityScore.score / 100)}`}
                  className="text-blue-500 transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">{brandAnalysisData.brandIdentityScore.score}%</span>
              </div>
            </div>
            
            {/* Score Details */}
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Your brand identity is strong and well-defined, excelling in conveying core values and mission. This fosters trust and loyalty with your target audience.
              </p>
              <div className="space-y-2">
                {brandAnalysisData.brandIdentityScore.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tone of Voice Analysis */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <MessageCircle className="h-6 w-6 text-pink-400" />
            Tone of Voice Analysis
          </h3>
          
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            {brandAnalysisData.toneOfVoiceAnalysis.description}
          </p>
          
          <div className="space-y-4">
            {brandAnalysisData.toneOfVoiceAnalysis.attributes.map((attr, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{attr.label}</span>
                  <span className="text-sm text-muted-foreground">{attr.percentage}%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${attr.color} transition-all duration-1000`}
                    style={{ width: `${attr.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Positioning */}
      <div>
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Target className="h-6 w-6 text-blue-400" />
          Market Positioning
        </h3>
        
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {brandAnalysisData.marketPositioning.description}
            </p>
            <div className="space-y-2">
              {brandAnalysisData.marketPositioning.competitors.map((comp, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className={`w-3 h-3 rounded-full ${comp.color}`}></div>
                  <span>{comp.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="bg-muted/30 border-border/40">
              <CardContent className="p-6">
                <div className="relative h-64 bg-muted/20 rounded-lg">
                  {/* Chart Background */}
                  <div className="absolute inset-4">
                    {/* Y-axis label */}
                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-muted-foreground">
                      Customer Centricity
                    </div>
                    
                    {/* X-axis labels */}
                    <div className="absolute -bottom-6 left-0 text-xs text-muted-foreground">Low Innovation</div>
                    <div className="absolute -bottom-6 right-0 text-xs text-muted-foreground">High Innovation</div>
                    
                    {/* Plot points */}
                    {brandAnalysisData.marketPositioning.competitors.map((comp, index) => (
                      <div
                        key={index}
                        className={`absolute w-3 h-3 rounded-full ${comp.color} transform -translate-x-1/2 -translate-y-1/2`}
                        style={{
                          left: `${comp.x}%`,
                          top: `${100 - comp.y}%`
                        }}
                        title={comp.name}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Strategic Branding Advice */}
      <div>
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Zap className="h-6 w-6 text-purple-400" />
          Strategic Branding Advice
        </h3>
        
        <div className="grid gap-4 md:grid-cols-3">
          {brandAnalysisData.strategicBrandingAdvice.map((advice, index) => (
            <Card key={index} className={`bg-card/60 backdrop-blur-sm border-l-4 ${advice.color}`}>
              <CardContent className="p-6">
                <h4 className="font-semibold text-base mb-3">{advice.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {advice.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandAnalystOutput;