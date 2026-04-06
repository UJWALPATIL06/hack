import { motion } from "motion/react";
import { Target, Zap, TrendingUp, Building2 } from "lucide-react";

const stats = [
  {
    icon: Target,
    value: "95%",
    label: "Simulation Accuracy",
    description: "Industry-leading precision",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    value: "10,000+",
    label: "Simulations Run",
    description: "Trusted by engineers worldwide",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    value: "30%",
    label: "Energy Savings",
    description: "Average customer improvement",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Building2,
    value: "5+",
    label: "Industries Served",
    description: "From cold storage to HVAC",
    color: "from-orange-500 to-red-500"
  }
];

export function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3A86FF] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3A86FF] opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-white mb-4">
            Proven Results, Trusted Globally
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of engineers optimizing thermal performance with ThermaSmart AI
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-300 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
