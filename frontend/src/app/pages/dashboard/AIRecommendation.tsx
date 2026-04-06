import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { motion } from "motion/react";
import { Sparkles, CheckCircle2, TrendingUp, Zap, ChevronRight, Brain } from "lucide-react";

const recommendations = [
  {
    priority: "High",
    title: "Increase Insulation Thickness",
    description: "Our AI model suggests increasing the middle layer (insulation) from 5cm to 10cm. This will reduce heat flux by 34% and improve overall thermal efficiency.",
    impact: {
      energySavings: "30%",
      costReduction: "₹14,400/year",
      roi: "18 months"
    },
    reason: "Analysis shows that the current insulation layer is the bottleneck for heat transfer. The middle layer has the highest temperature gradient, indicating insufficient thickness.",
    color: "green"
  },
  {
    priority: "Medium",
    title: "Optimize Material Selection",
    description: "Consider replacing the outer brick layer with a high-performance composite material. This maintains structural integrity while improving thermal resistance.",
    impact: {
      energySavings: "12%",
      costReduction: "₹5,760/year",
      roi: "24 months"
    },
    reason: "Brick has relatively high thermal conductivity (0.6 W/m·K). Modern composite materials can achieve 0.3 W/m·K while maintaining strength.",
    color: "blue"
  },
  {
    priority: "Low",
    title: "Add Thermal Break",
    description: "Insert a thin thermal break layer between concrete and insulation to minimize thermal bridging at material interfaces.",
    impact: {
      energySavings: "8%",
      costReduction: "₹3,840/year",
      roi: "30 months"
    },
    reason: "CFD simulation reveals localized heat transfer at layer interfaces. A 1cm thermal break can significantly reduce this effect.",
    color: "purple"
  }
];

export function AIRecommendation() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] py-8">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="mb-4">
            <h1 className="text-3xl text-[#0A2540] mb-2">
              AI-Powered Recommendations
            </h1>
            <p className="text-gray-600">
              Machine learning insights based on your simulation results
            </p>
          </div>
        </motion.div>

        {/* AI Analysis Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <Card className="p-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
            <div>
              <h2 className="text-2xl text-[#0A2540] mb-3">
                Analysis Complete
              </h2>
                <p className="text-gray-700 mb-6">
                  Our AI has analyzed your configuration against 10,000+ similar designs and identified 
                  <span className="text-purple-600"> 3 key optimization opportunities</span>. 
                  Implementing all recommendations could save you up to <span className="text-purple-600">₹24,000 annually</span>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                      <span className="text-sm text-gray-600">Potential Savings</span>
                    </div>
                    <div className="text-2xl text-purple-600">₹24k/yr</div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-purple-600" />
                      <span className="text-sm text-gray-600">Efficiency Boost</span>
                    </div>
                    <div className="text-2xl text-purple-600">+30%</div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                      <span className="text-sm text-gray-600">Confidence Score</span>
                    </div>
                    <div className="text-2xl text-purple-600">96%</div>
                  </div>
                </div>
            </div>
          </Card>
        </motion.div>

        {/* Recommendations List */}
        <div className="space-y-6">
          {recommendations.map((rec, index) => {
            const priorityColors = {
              green: {
                bg: "bg-green-50",
                border: "border-green-200",
                badge: "bg-green-600",
                text: "text-green-600",
                gradient: "from-green-500 to-emerald-500"
              },
              blue: {
                bg: "bg-blue-50",
                border: "border-blue-200",
                badge: "bg-blue-600",
                text: "text-blue-600",
                gradient: "from-blue-500 to-cyan-500"
              },
              purple: {
                bg: "bg-purple-50",
                border: "border-purple-200",
                badge: "bg-purple-600",
                text: "text-purple-600",
                gradient: "from-purple-500 to-pink-500"
              }
            };

            const colors = priorityColors[rec.color as keyof typeof priorityColors];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className={`p-8 border-2 ${colors.border} ${colors.bg}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl text-[#0A2540]">
                          {rec.title}
                        </h3>
                          <div className={`px-3 py-1 ${colors.badge} text-white text-xs rounded-full`}>
                            {rec.priority} Priority
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-4">
                          {rec.description}
                        </p>

                        {/* Impact Metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="p-3 bg-white rounded-lg border border-gray-200">
                            <div className="text-xs text-gray-600 mb-1">Energy Savings</div>
                            <div className={`text-xl ${colors.text}`}>{rec.impact.energySavings}</div>
                          </div>
                          <div className="p-3 bg-white rounded-lg border border-gray-200">
                            <div className="text-xs text-gray-600 mb-1">Cost Reduction</div>
                            <div className={`text-xl ${colors.text}`}>{rec.impact.costReduction}</div>
                          </div>
                          <div className="p-3 bg-white rounded-lg border border-gray-200">
                            <div className="text-xs text-gray-600 mb-1">ROI Period</div>
                            <div className={`text-xl ${colors.text}`}>{rec.impact.roi}</div>
                          </div>
                        </div>

                        {/* Reasoning */}
                        <div className="p-4 bg-white rounded-lg border border-gray-200">
                          <div className="flex items-start gap-2">
                            <Brain className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="text-xs text-gray-600 mb-1">AI Reasoning</div>
                              <div className="text-sm text-gray-700">{rec.reason}</div>
                            </div>
                          </div>
                      </div>
                    </div>

                    <Button className={`${colors.badge} hover:opacity-90 text-white ml-4`}>
                      Apply
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Combined Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <Card className="p-8 border-2 border-[#3A86FF] bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="text-center">
              <h3 className="text-2xl text-[#0A2540] mb-4">
                Combined Impact of All Recommendations
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="p-6 bg-white rounded-xl">
                  <div className="text-4xl text-[#3A86FF] mb-2">50%</div>
                  <div className="text-sm text-gray-600">Total Energy Reduction</div>
                </div>
                <div className="p-6 bg-white rounded-xl">
                  <div className="text-4xl text-[#3A86FF] mb-2">₹24k</div>
                  <div className="text-sm text-gray-600">Annual Cost Savings</div>
                </div>
                <div className="p-6 bg-white rounded-xl">
                  <div className="text-4xl text-[#3A86FF] mb-2">96%</div>
                  <div className="text-sm text-gray-600">Overall Efficiency</div>
                </div>
                <div className="p-6 bg-white rounded-xl">
                  <div className="text-4xl text-[#3A86FF] mb-2">2.1x</div>
                  <div className="text-sm text-gray-600">Performance Boost</div>
                </div>
              </div>

              <Button size="lg" className="bg-[#3A86FF] hover:bg-[#2A76EF] text-white px-12">
                Apply All Recommendations
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
