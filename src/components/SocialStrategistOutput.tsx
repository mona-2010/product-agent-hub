import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Hash, Lightbulb, MessageSquare, Share2, Target, Zap } from "lucide-react";

interface SocialStrategistOutputProps {
  productName: string;
}

const SocialStrategistOutput = ({ productName }: SocialStrategistOutputProps) => {
  const safeProductName = productName || "product";
  
  // Static data for Social Strategist - replace with actual API response later
  const socialData = {
    engagingCaptions: [
      `🚀 Just launched our new ${safeProductName.toLowerCase()} feature! Now you can generate marketing content 10x faster. #AI #Marketing #SaaS`,
      `Feeling the Monday blues? Here's a dose of inspiration to kickstart your week! ✨ #MondayMotivation #Inspiration #NewWeek`,
      `Behind the scenes of our latest ${safeProductName.toLowerCase()} project! So much hard work and coffee went into this. ☕ #BehindTheScenes #WorkInProgress #TeamEffort`
    ],
    
    relevantHashtags: [
      "#AIContent", "#MarketingAutomation", "#SocialMediaStrategy", "#DigitalMarketingTips", 
      "#ContentCreation", "#StartupLife", "#TechInnovation", "#FutureOfWork", 
      "#ProductivityHacks", "#CreativeAI"
    ],
    
    creativePostIdeas: [
      `A "Day in the Life" story showing how your team uses the ${safeProductName.toLowerCase()}.`,
      "A poll asking your audience what feature they'd like to see next.",
      "A carousel post breaking down a complex industry topic into simple steps.",
      "Host a Q&A session with the founder or a key team member.",
      "Create a short tutorial video showcasing a powerful but underused feature."
    ]
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const copyAllHashtags = () => {
    const hashtagText = socialData.relevantHashtags.join(" ");
    copyToClipboard(hashtagText);
  };

  return (
    <div className="space-y-6">
      {/* Engaging Captions Section */}
      <Card className="bg-card/60 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-blue-400" />
            Engaging Captions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {socialData.engagingCaptions.map((caption, index) => (
            <div key={index} className="bg-muted/30 rounded-lg p-4 border border-border/40">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm leading-relaxed flex-1">{caption}</p>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-blue-400 hover:text-blue-300 shrink-0"
                  onClick={() => copyToClipboard(caption)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Relevant Hashtags Section */}
      <Card className="bg-card/60 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl flex items-center gap-2">
            <Hash className="h-6 w-6 text-purple-400" />
            Relevant Hashtags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/30 rounded-lg p-4 border border-border/40">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-wrap gap-2 flex-1">
                {socialData.relevantHashtags.map((hashtag, index) => (
                  <span 
                    key={index} 
                    className="inline-block text-purple-400 text-sm cursor-pointer hover:text-purple-300 transition-colors bg-purple-400/10 px-2 py-1 rounded"
                  >
                    {hashtag}
                  </span>
                ))}
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-purple-400 hover:text-purple-300 shrink-0"
                onClick={copyAllHashtags}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Creative Post Ideas Section */}
      <Card className="bg-card/60 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-yellow-400" />
            Creative Post Ideas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {socialData.creativePostIdeas.map((idea, index) => (
            <div key={index} className="bg-muted/30 rounded-lg p-4 border border-border/40">
              <div className="flex items-start justify-between gap-3">
                <div className="flex gap-3 flex-1">
                  <span className="text-yellow-400 font-semibold text-sm mt-0.5 shrink-0">
                    {index + 1}.
                  </span>
                  <p className="text-sm leading-relaxed">{idea}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-yellow-400 hover:text-yellow-300 shrink-0"
                  onClick={() => copyToClipboard(idea)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Generate More Content Button */}
      <div className="flex justify-center pt-4">
        <Button 
          className="bg-primary hover:bg-primary/90 px-8 py-3 text-base font-medium"
          onClick={() => {
            console.log("Generate more content for", safeProductName);
          }}
        >
          Generate More Content
        </Button>
      </div>
    </div>
  );
};

export default SocialStrategistOutput;