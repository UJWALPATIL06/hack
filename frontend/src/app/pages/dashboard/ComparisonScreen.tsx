import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { motion } from "motion/react";
import { GitCompare, TrendingUp, Award } from "lucide-react";

// Generate comparison data
const generateComparisonData = () => {
  const data = [];
  const points = 30;

  for (let i = 0; i <= points; i++) {
    const position = (i / points) * 25;

    // Configuration A (Current)
    const tempA = 35 - (25 * (position / 25)) - Math.sin(position * 0.5) * 2;

    // Configuration B (Alternative - better insulation)
    const tempB = 35 - (25 * (position / 25)) - Math.sin(position * 0.5) * 1.5 - 2;

    data.push({
      id: i,
      position: position.toFixed(2),
      configA: tempA.toFixed(1),
      configB: tempB.toFixed(1),
    });
  }

  return data;
};

const comparisonData = generateComparisonData();

export function ComparisonScreen() {
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
          <h1 className="text-3xl text-[#0A2540] mb-2">
            Configuration Comparison
          </h1>
          <p className="text-gray-600">
            Compare different material setups side-by-side to find the optimal solution
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Configuration A */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 border-2 border-blue-200 bg-blue-50">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-[#0A2540]">Configuration A (Current)</h2>
                <div className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                  Current
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Heat Flux</div>
                    <div className="text-2xl text-[#0A2540]">12.5 W/m²</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Efficiency</div>
                    <div className="text-2xl text-[#0A2540]">89%</div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Annual Cost</div>
                  <div className="text-3xl text-[#0A2540]">₹48,000</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Configuration B */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 border-2 border-green-200 bg-green-50">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-[#0A2540]">Configuration B (Optimized)</h2>
                <div className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                  <Award className="w-3 h-3" />
                  Recommended
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Heat Flux</div>
                    <div className="text-2xl text-green-600">8.2 W/m²</div>
                    <div className="text-sm text-green-600 mt-1">↓ 34% better</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Efficiency</div>
                    <div className="text-2xl text-green-600">94%</div>
                    <div className="text-sm text-green-600 mt-1">↑ 5% better</div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Annual Cost</div>
                  <div className="text-3xl text-green-600">₹33,600</div>
                  <div className="text-sm text-green-600 mt-1">↓ Save ₹14,400/year</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Comparison Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-8 border-gray-200">
            <h2 className="text-xl text-[#0A2540] mb-6">Temperature Profile Comparison</h2>

            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="position" 
                  label={{ value: 'Position (cm)', position: 'insideBottom', offset: -5 }}
                  stroke="#6b7280"
                />
                <YAxis 
                  label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }}
                  stroke="#6b7280"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="configA" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  name="Configuration A (Current)"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="configB" 
                  stroke="#22c55e" 
                  strokeWidth={3}
                  name="Configuration B (Optimized)"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Card className="p-8 border-gray-200">
            <h2 className="text-xl text-[#0A2540] mb-6">Key Insights</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="text-3xl text-green-600 mb-2">34%</div>
                <div className="text-sm text-gray-700 mb-2">Heat Flux Reduction</div>
                <div className="text-xs text-gray-600">
                  Configuration B reduces heat flux from 12.5 to 8.2 W/m²
                </div>
              </div>

              <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-3xl text-blue-600 mb-2">5%</div>
                <div className="text-sm text-gray-700 mb-2">Efficiency Improvement</div>
                <div className="text-xs text-gray-600">
                  Thermal efficiency increased from 89% to 94%
                </div>
              </div>

              <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-3xl text-purple-600 mb-2">₹14.4k</div>
                <div className="text-sm text-gray-700 mb-2">Annual Cost Savings</div>
                <div className="text-xs text-gray-600">
                  Reduced annual energy cost from ₹48k to ₹33.6k
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Button className="bg-[#3A86FF] hover:bg-[#2A76EF] text-white px-8">
                Apply Configuration B
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
