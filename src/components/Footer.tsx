import logo from "@/assets/images/logo.webp";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-gradient-hero">
      <div className="container py-8 md:py-12 px-12">
        {/* Logo Section - Full width on all devices */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={logo}
              alt="TheStrategyFilter Logo"
              className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded"
            />
            <span className="font-bold text-lg md:text-xl text-white">TheStrategyFilter</span>
          </div>
          <p className="text-sm text-gray-300 max-w-md">
            Automate your marketing with AI-powered agents that understand your products.
          </p>
        </div>

        {/* Links Grid - Responsive layout */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="/features" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="/about" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2025 TheStrategyFilter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;