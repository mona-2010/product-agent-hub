import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Search, Zap, FileText, Tag, Target } from "lucide-react";
import { useState } from "react";

interface SEOOptimizerOutputProps {
  productName: string;
}

const SEOOptimizerOutput = ({ productName }: SEOOptimizerOutputProps) => {
  const safeProductName = productName || "product";
  const [userContent, setUserContent] = useState("");
  
  // Static data for SEO Optimizer - replace with actual API response later
  const seoData = {
    suggestions: {
      highRankingKeywords: `AI marketing tools, SEO optimization, content generation, high-ranking keywords, meta description writer, title tag generator`,
      optimizedMetaDescription: `Supercharge your SEO with our AI ${safeProductName.toLowerCase()} tool. Generate high-ranking keywords, compelling meta descriptions, and optimized content that drives organic traffic and boosts search rankings.`,
      compellingTitleTag: `AI SEO Optimizer | Boost Rankings with AI Content Generation`
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleOptimizeNow = () => {
    console.log("Optimizing content:", userContent, "for product:", safeProductName);
    // This would trigger the optimization process
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Left Column - SEO Optimizer Input */}
      <Card className="bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Search className="h-6 w-6 text-blue-400" />
            SEO Optimizer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Your Content</label>
            <Textarea
              placeholder="Paste your article, blog post, or any content here..."
              value={userContent}
              onChange={(e) => setUserContent(e.target.value)}
              className="min-h-[300px] bg-muted/30 border-border/40 resize-none"
            />
          </div>
          
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium"
            onClick={handleOptimizeNow}
          >
            <Zap className="h-4 w-4 mr-2" />
            Optimize Now ✨
          </Button>
        </CardContent>
      </Card>

      {/* Right Column - Suggestions */}
      <Card className="bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Target className="h-6 w-6 text-green-400" />
            Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* High-Ranking Keywords */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Tag className="h-4 w-4 text-purple-400" />
                High-Ranking Keywords
              </h4>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-purple-400 hover:text-purple-300"
                onClick={() => copyToClipboard(seoData.suggestions.highRankingKeywords)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 border border-border/40">
              <p className="text-sm leading-relaxed">
                {seoData.suggestions.highRankingKeywords}
              </p>
            </div>
          </div>

          {/* Optimized Meta Description */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-400" />
                Optimized Meta Description
              </h4>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-blue-400 hover:text-blue-300"
                onClick={() => copyToClipboard(seoData.suggestions.optimizedMetaDescription)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 border border-border/40">
              <p className="text-sm leading-relaxed">
                {seoData.suggestions.optimizedMetaDescription}
              </p>
            </div>
          </div>

          {/* Compelling Title Tag */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Search className="h-4 w-4 text-orange-400" />
                Compelling Title Tag
              </h4>
              <div className="flex gap-1">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-orange-400 hover:text-orange-300"
                  onClick={() => copyToClipboard(seoData.suggestions.compellingTitleTag)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4 border border-border/40 flex items-center justify-between">
              <p className="text-sm leading-relaxed flex-1">
                {seoData.suggestions.compellingTitleTag}
              </p>
              <div className="ml-2 p-1 bg-orange-400/10 rounded border border-orange-400/20">
                <Copy className="h-3 w-3 text-orange-400" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SEOOptimizerOutput;