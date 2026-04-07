import { Card } from "../ui/card";
import { Thermometer, LineChart, AlertTriangle, Building2, FileText } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Thermometer,
    title: "CFD Thermal Simulation",
    description: "Advanced computational fluid dynamics engine that simulates precise temperature distribution across composite wall structures with industry-leading accuracy.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: LineChart,
    title: "Real-Time Analytics",
    description: "Interactive graphs and visualizations update instantly as you adjust parameters, enabling rapid iteration and informed decision-making.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: AlertTriangle,
    title: "Failure Prediction System",
    description: "Proactive alerts identify potential thermal stress points and structural weaknesses before they become critical issues in production.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Building2,
    title: "Industry-Specific Modes",
    description: "Pre-configured templates for cold storage, HVAC systems, industrial facilities, and more, tailored to meet specific industry standards.",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: FileText,
    title: "Professional Reports",
    description: "Generate comprehensive, presentation-ready reports with detailed analysis, visualizations, and actionable recommendations for stakeholders.",
    color: "from-indigo-500 to-purple-500"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3A86FF]/10 text-[#3A86FF] rounded-full text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-4xl text-[#0A2540] mb-4">
            Complete Thermal Engineering Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to design, analyze, and optimize thermal performance in one powerful platform
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-gray-200 group cursor-pointer max-w-[420px] mx-auto">
                  <h3 className="text-xl text-[#0A2540] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
