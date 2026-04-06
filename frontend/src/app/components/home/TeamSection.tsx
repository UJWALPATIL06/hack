import { Card } from "../ui/card";
import { motion } from "motion/react";
import { Linkedin, Github, Mail } from "lucide-react";

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Engineer",
    initials: "SC",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Michael Rodriguez",
    role: "AI Research Lead",
    initials: "MR",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Priya Sharma",
    role: "CFD Specialist",
    initials: "PS",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    initials: "JW",
    color: "from-orange-500 to-red-500"
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-[#F8F9FB]">
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
            Our Team
          </div>
          <h2 className="text-4xl text-[#0A2540] mb-4">
            Meet the Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class engineers and researchers pushing the boundaries of thermal engineering
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-gray-200 group">
                <h3 className="text-xl text-[#0A2540] mb-1">
                  {member.name}
                </h3>
                
                <p className="text-[#3A86FF] text-sm mb-4">
                  {member.role}
                </p>

                <div className="flex justify-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#3A86FF] hover:text-white transition-colors flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#3A86FF] hover:text-white transition-colors flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#3A86FF] hover:text-white transition-colors flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
