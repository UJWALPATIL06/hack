import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { ArrowRight, Snowflake, Home, Factory } from "lucide-react";

const caseStudies = [
  {
    icon: Snowflake,
    title: "Cold Storage Optimization",
    industry: "Food & Beverage",
    description: "Reduced energy costs by 35% for a 50,000 sq ft cold storage facility by optimizing insulation layers and material selection.",
    results: [
      "35% energy reduction",
      "₹12L annual savings",
      "ROI in 18 months"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Home,
    title: "Residential HVAC Efficiency",
    industry: "Construction",
    description: "Improved thermal comfort in 200+ residential units while reducing HVAC load by 28% through intelligent wall design.",
    results: [
      "28% HVAC load reduction",
      "Improved comfort index",
      "LEED Gold certified"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Factory,
    title: "Industrial Furnace Safety",
    industry: "Manufacturing",
    description: "Enhanced worker safety and reduced heat loss by 40% in high-temperature industrial environments using advanced composite walls.",
    results: [
      "40% heat loss reduction",
      "Zero thermal incidents",
      "15% productivity gain"
    ],
    color: "from-orange-500 to-red-500"
  }
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3A86FF]/10 text-[#3A86FF] rounded-full text-sm mb-4">
            Success Stories
          </div>
          <h2 className="text-4xl text-[#0A2540] mb-4">
            Real Impact, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading organizations are transforming their thermal engineering with ThermaSmart AI
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full flex flex-col hover:shadow-xl transition-all duration-300 border-gray-200 group">
                  <div className="text-sm text-[#3A86FF] mb-2">
                    {study.industry}
                  </div>

                  <h3 className="text-2xl text-[#0A2540] mb-3">
                    {study.title}
                  </h3>

                  <p className="text-gray-600 mb-6 flex-grow">
                    {study.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3A86FF]" />
                        {result}
                      </div>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full text-[#3A86FF] hover:bg-[#3A86FF]/10 group-hover:translate-x-1 transition-transform">
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
