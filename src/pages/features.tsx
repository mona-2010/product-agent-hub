import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Lightbulb, Heart, RefreshCw, Zap } from "lucide-react";

// ✅ Import feature images
import feature1 from "@/assets/images/feature-1.webp";
import feature2 from "@/assets/images/feature-2.webp";
import feature3 from "@/assets/images/feature-3.webp";
import feature4 from "@/assets/images/feature-4.webp";

const featuresData = [
  {
    title: "AI-Powered Content Generation",
    description:
      "Create engaging email campaigns and newsletters with AI-driven content that resonates with your audience.",
    icon: <Lightbulb size={24} />,
    image: feature1,
  },
  {
    title: "Personalized Campaigns",
    description:
      "Deliver hyper-personalized experiences by leveraging data insights for higher engagement and conversions.",
    icon: <Heart size={24} />,
    image: feature2,
  },
  {
    title: "Automated Workflow",
    description:
      "Set up smart automation that runs in the background, saving time and ensuring consistency.",
    icon: <RefreshCw size={24} />,
    image: feature3,
  },
  {
    title: "Real-Time Analytics",
    description:
      "Track performance metrics in real time to optimize strategies and maximize ROI.",
    icon: <Zap size={24} />,
    image: feature4,
  },
];

const workflowSteps = [
  {
    step: 1,
    title: "Input Your Prompt",
    description: "Start by entering your campaign details and goals.",
    icon: <Lightbulb size={20} />,
  },
  {
    step: 2,
    title: "AI Generates Content",
    description: "Our AI engine creates engaging and personalized email content.",
    icon: <Zap size={20} />,
  },
  {
    step: 3,
    title: "Customize & Approve",
    description: "Make quick edits and approve the final version for sending.",
    icon: <RefreshCw size={20} />,
  },
  {
    step: 4,
    title: "Launch Campaign",
    description: "Send your campaign and track performance instantly.",
    icon: <Heart size={20} />,
  },
];

const Features: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <Header />
      <div className="container mx-auto px-6 py-16">
        {/* Page Heading */}
        <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Features
        </motion.h1>

        {/* Features Section */}
        <div className="space-y-20">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-center px-4 md:px-12 lg:px-20 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                } gap-8`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="md:w-1/2 flex justify-center">
                <div className="w-full max-w-[800px] aspect-[4/3] md:aspect-[16/9] flex items-center justify-center rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="md:w-1/2 flex flex-col gap-4 justify-center text-center md:text-left px-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mx-auto md:mx-0">
                  {feature.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">{feature.title}</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Workflow Section */} <motion.h2 className="text-3xl font-bold text-center mt-20 mb-12" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} > How It Works </motion.h2>
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>
          <div className="space-y-12">
            {workflowSteps.map((step, index) => (<motion.div key={index} className="relative flex items-start gap-6" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white"> {step.icon}
              </div> {/* Text */}
              <div>
                <h3 className="text-xl font-semibold">{step.title}
                </h3>
                <p className="text-gray-600">{step.description}
                </p>
              </div>
            </motion.div>))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
