import { Link } from "react-router";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8F9FB] pt-20 pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#3A86FF] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0A2540] opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="min-h-[65vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl text-center space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl text-[#0A2540] leading-tight">
              Smart Thermal Analysis for{" "}
              <span className="bg-gradient-to-r from-[#3A86FF] to-[#0A2540] bg-clip-text text-transparent">
                Next-Gen Engineering
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Leverage advanced CFD simulations and AI-powered insights to optimize composite wall designs.
              Analyze temperature distribution, predict energy efficiency, and make data-driven decisions in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button
                  size="lg"
                  className="bg-[#3A86FF] hover:bg-[#2A76EF] text-white text-lg px-8 py-6"
                >
                  Start Simulation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
