import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Save, TrendingUp, Eye, ThumbsUp, Share2 } from "lucide-react";

interface ContentCreatorOutputProps {
  productName: string;
}

const ContentCreatorOutput = ({ productName }: ContentCreatorOutputProps) => {
  const safeProductName = productName || "product";
  
  // Static data - replace with actual API response later
  const contentData = {
    productDescription: `Introducing our new line of ${safeProductName.toLowerCase()} products, crafted with the finest natural ingredients to nourish and rejuvenate your skin. Our gentle formulas are free from harsh chemicals and artificial fragrances, making them perfect for all skin types. Experience the difference of truly natural skincare with our collection of cleansers, moisturizers, and serums, designed to enhance your natural beauty and promote a healthy, radiant complexion.`,
    
    socialMediaPosts: [
      {
        platform: "Instagram",
        content: `✨ Transform your routine with our new ${safeProductName.toLowerCase()} line! 🌿 Free from harsh chemicals, perfect for all skin types. Your skin deserves the best of nature. #${safeProductName.replace(/\s+/g, '')} #NaturalBeauty #SkincareRoutine`,
        engagement: "High",
        hashtags: [`#${safeProductName.replace(/\s+/g, '')}`, "#NaturalBeauty", "#SkincareRoutine", "#GlowUp"]
      },
      {
        platform: "Facebook",
        content: `Discover the power of nature with our ${safeProductName.toLowerCase()} collection. Each product is carefully crafted with natural ingredients to give you healthy, glowing results without compromise.`,
        engagement: "Medium",
        hashtags: ["#OrganicBeauty", "#NaturalSkincare", "#HealthySkin"]
      },
      {
        platform: "Twitter",
        content: `Your routine deserves organic care 🌱 Our new ${safeProductName.toLowerCase()} line brings you the best of nature - no harsh chemicals, just pure results! #${safeProductName.replace(/\s+/g, '')}`,
        engagement: "High",
        hashtags: [`#${safeProductName.replace(/\s+/g, '')}`, "#NaturalBeauty", "#CleanBeauty"]
      }
    ],
    
    blogOutline: {
      title: `The Complete Guide to ${safeProductName}: Everything You Need to Know`,
      sections: [
        `Why Choose ${safeProductName}?`,
        "Understanding Your Needs",
        "Key Features and Benefits",
        "How to Get Started",
        "Common Questions Answered",
        "Expert Recommendations"
      ]
    },
    
    contentMetrics: {
      estimatedReach: "50K+",
      engagementRate: "8.5%",
      shareability: "High",
      seoScore: "92/100"
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      {/* Product Description */}
      <Card className="bg-card/60 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-400" />
            Product Description
          </CardTitle>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => copyToClipboard(contentData.productDescription)}
            >
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Save className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-sm leading-relaxed">{contentData.productDescription}</p>
          </div>
        </CardContent>
      </Card>

      {/* Social Media Posts */}
      <Card className="bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Share2 className="h-5 w-5 text-green-400" />
            Social Media Content
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {contentData.socialMediaPosts.map((post, index) => (
            <div key={index} className="border border-border/40 rounded-lg p-4 bg-muted/20">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{post.platform}</Badge>
                  <Badge 
                    variant={post.engagement === "High" ? "default" : "outline"}
                    className={post.engagement === "High" ? "bg-green-500/10 text-green-400 border-green-500/20" : ""}
                  >
                    {post.engagement} Engagement
                  </Badge>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => copyToClipboard(post.content)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm mb-3 leading-relaxed">{post.content}</p>
              <div className="flex flex-wrap gap-1">
                {post.hashtags.map((hashtag, i) => (
                  <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {hashtag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Blog Outline */}
      <Card className="bg-card/60 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <Eye className="h-5 w-5 text-purple-400" />
            Blog Content Outline
          </CardTitle>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => copyToClipboard(`${contentData.blogOutline.title}\n\n${contentData.blogOutline.sections.map((section, i) => `${i + 1}. ${section}`).join('\n')}`)}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <h4 className="font-semibold mb-3 text-base">{contentData.blogOutline.title}</h4>
          <div className="space-y-2">
            {contentData.blogOutline.sections.map((section, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-medium">
                  {index + 1}
                </div>
                <span className="text-sm">{section}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Content Metrics */}
      <Card className="bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <ThumbsUp className="h-5 w-5 text-orange-400" />
            Content Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {contentData.contentMetrics.estimatedReach}
              </div>
              <p className="text-sm text-muted-foreground">Estimated Reach</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">
                {contentData.contentMetrics.engagementRate}
              </div>
              <p className="text-sm text-muted-foreground">Engagement Rate</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">
                {contentData.contentMetrics.shareability}
              </div>
              <p className="text-sm text-muted-foreground">Shareability</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">
                {contentData.contentMetrics.seoScore}
              </div>
              <p className="text-sm text-muted-foreground">SEO Score</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentCreatorOutput;