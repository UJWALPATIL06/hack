import { Link } from "react-router";
import { Activity, Linkedin, Twitter, Github, Youtube } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "API", href: "#api" },
    { label: "Documentation", href: "#docs" }
  ],
  features: [
    { label: "CFD Simulation", href: "#cfd" },
    { label: "AI Optimization", href: "#ai" },
    { label: "Analytics", href: "#analytics" },
    { label: "Reports", href: "#reports" }
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Blog", href: "#blog" },
    { label: "Press Kit", href: "#press" }
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Security", href: "#security" },
    { label: "Compliance", href: "#compliance" }
  ]
};

export function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl">ThermaSmart AI</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Next-generation thermal analysis powered by AI and CFD technology.
            </p>
            <div className="flex gap-3">
              <button className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Github className="w-5 h-5" />
              </button>
              <button className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Links */}
          <div>
            <h4 className="text-white mb-4">Features</h4>
            <ul className="space-y-3">
              {footerLinks.features.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 ThermaSmart AI. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with ❤️ for engineers, by engineers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
