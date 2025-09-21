import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Mail, RefreshCw, Zap, Target, FileText } from "lucide-react";

interface EmailMarketerOutputProps {
  productName: string;
}

const EmailMarketerOutput = ({ productName }: EmailMarketerOutputProps) => {
  const safeProductName = productName || "product";
  
  // Static data for Email Marketer - replace with actual API response later
  const emailData = {
    generatedEmailCopy: {
      greeting: `Hey [Name],`,
      content: [
        `Struggling to keep up with the ever-changing marketing landscape? You're not alone. Our new AI-powered ${safeProductName.toLowerCase()} helps you create stunning marketing content in minutes, not hours.`,
        `Boost your engagement and conversions with compelling copy that resonates with your audience. Ready to see the magic?`
      ],
      signature: {
        closing: "Best,",
        name: "The AI Team"
      }
    },
    
    subjectLines: [
      {
        text: "🚀 Supercharge Your Marketing with AI",
        emoji: "🚀"
      },
      {
        text: "Write Content That Converts (In Seconds)",
        emoji: ""
      },
      {
        text: `[Name], Your Marketing Just Got an Upgrade`,
        emoji: ""
      }
    ],
    
    callToActions: [
      "Try It Free Now",
      "Discover the Future of Marketing", 
      "Get Started"
    ]
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const copyFullEmail = () => {
    const fullEmail = `${emailData.generatedEmailCopy.greeting}\n\n${emailData.generatedEmailCopy.content.join('\n\n')}\n\n${emailData.generatedEmailCopy.signature.closing}\n${emailData.generatedEmailCopy.signature.name}`;
    copyToClipboard(fullEmail);
  };

  const copyAllContent = () => {
    const allContent = `Subject Lines:\n${emailData.subjectLines.map(s => s.text).join('\n')}\n\nEmail Copy:\n${emailData.generatedEmailCopy.greeting}\n\n${emailData.generatedEmailCopy.content.join('\n\n')}\n\n${emailData.generatedEmailCopy.signature.closing}\n${emailData.generatedEmailCopy.signature.name}\n\nCall-to-Actions:\n${emailData.callToActions.join('\n')}`;
    copyToClipboard(allContent);
  };

  return (
    <div className="space-y-6">
      {/* Generated Email Copy Section */}
      <Card className="bg-card/60 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl flex items-center gap-2">
            <FileText className="h-6 w-6 text-blue-400" />
            Generated Email Copy
          </CardTitle>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-blue-400 hover:text-blue-300"
            onClick={copyFullEmail}
          >
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </Button>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/30 rounded-lg p-6 border border-border/40 space-y-4">
            <div className="text-sm">
              <p className="font-medium mb-3">{emailData.generatedEmailCopy.greeting}</p>
              
              {emailData.generatedEmailCopy.content.map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              
              <div className="mt-6">
                <p className="font-medium">{emailData.generatedEmailCopy.signature.closing}</p>
                <p className="font-medium">{emailData.generatedEmailCopy.signature.name}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subject Lines Section */}
      <Card className="bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Mail className="h-6 w-6 text-green-400" />
            Subject Lines
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {emailData.subjectLines.map((subject, index) => (
            <div key={index} className="bg-muted/30 rounded-lg p-4 border border-border/40">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-1">
                  {subject.emoji && (
                    <span className="text-lg">{subject.emoji}</span>
                  )}
                  <span className="text-sm font-medium">{subject.text}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-green-400 hover:text-green-300 shrink-0"
                  onClick={() => copyToClipboard(subject.text)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Call-to-Actions Section */}
      <Card className="bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Target className="h-6 w-6 text-orange-400" />
            Call-to-Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {emailData.callToActions.map((cta, index) => (
            <div key={index} className="bg-muted/30 rounded-lg p-4 border border-border/40">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium flex-1">{cta}</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-orange-400 hover:text-orange-300 shrink-0"
                  onClick={() => copyToClipboard(cta)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 pt-4">
        <Button 
          variant="outline"
          className="px-6 py-3 text-base font-medium"
          onClick={() => {
            console.log("Regenerate content for", safeProductName);
          }}
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Regenerate
        </Button>
        <Button 
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-base font-medium"
          onClick={copyAllContent}
        >
          <Copy className="h-4 w-4 mr-2" />
          Copy All
        </Button>
      </div>
    </div>
  );
};

export default EmailMarketerOutput;