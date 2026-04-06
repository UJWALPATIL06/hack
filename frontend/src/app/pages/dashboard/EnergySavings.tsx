import { Card } from "../../components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";
import { motion } from "motion/react";
import { Zap, TrendingDown, DollarSign, Calendar, Leaf, Award } from "lucide-react";

const monthlyData = [
  { month: 'Jan', current: 4200, optimized: 2940 },
  { month: 'Feb', current: 3800, optimized: 2660 },
  { month: 'Mar', current: 3500, optimized: 2450 },
  { month: 'Apr', current: 3200, optimized: 2240 },
  { month: 'May', current: 3000, optimized: 2100 },
  { month: 'Jun', current: 2800, optimized: 1960 },
  { month: 'Jul', current: 3100, optimized: 2170 },
  { month: 'Aug', current: 3400, optimized: 2380 },
  { month: 'Sep', current: 3600, optimized: 2520 },
  { month: 'Oct', current: 3900, optimized: 2730 },
  { month: 'Nov', current: 4100, optimized: 2870 },
  { month: 'Dec', current: 4400, optimized: 3080 }
];

const yearlyProjection = [
  { year: '2026', savings: 14400 },
  { year: '2027', savings: 28800 },
  { year: '2028', savings: 43200 },
  { year: '2029', savings: 57600 },
  { year: '2030', savings: 72000 }
];

export function EnergySavings() {
  const totalAnnualSavings = 14400;
  const monthlyAverage = 1200;
  const co2Reduction = 8.5;
  const efficiencyImprovement = 30;

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
              Energy Savings Analysis
            </h1>
            <p className="text-gray-600">
              Financial and environmental impact of thermal optimization
            </p>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 border-gray-200">
              <div className="text-sm text-gray-600 mb-3">Annual Savings</div>
              <div className="text-3xl text-green-600 mb-1">₹{totalAnnualSavings.toLocaleString()}</div>
              <div className="text-sm text-gray-600">per year</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 border-gray-200">
              <div className="text-sm text-gray-600 mb-3">Monthly Average</div>
              <div className="text-3xl text-blue-600 mb-1">₹{monthlyAverage.toLocaleString()}</div>
              <div className="text-sm text-gray-600">per month</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 border-gray-200">
              <div className="text-sm text-gray-600 mb-3">CO₂ Reduction</div>
              <div className="text-3xl text-emerald-600 mb-1">{co2Reduction}</div>
              <div className="text-sm text-gray-600">tons/year</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 border-gray-200">
              <div className="text-sm text-gray-600 mb-3">Efficiency Boost</div>
              <div className="text-3xl text-orange-600 mb-1">+{efficiencyImprovement}%</div>
              <div className="text-sm text-gray-600">improvement</div>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="p-6 border-gray-200">
              <h2 className="text-xl text-[#0A2540] mb-6">Monthly Energy Cost Comparison</h2>
              
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                    formatter={(value) => `₹${value}`}
                  />
                  <Legend />
                  <Bar dataKey="current" fill="#ef4444" name="Current Configuration" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="optimized" fill="#22c55e" name="Optimized Configuration" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>

              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-sm text-green-900">
                  Average monthly savings: <span className="font-semibold">₹1,200</span> (30% reduction)
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 5-Year Projection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="p-6 border-gray-200">
              <h2 className="text-xl text-[#0A2540] mb-6">5-Year Cumulative Savings</h2>
              
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={yearlyProjection}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                    formatter={(value) => `₹${value.toLocaleString()}`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="savings" 
                    stroke="#3A86FF" 
                    strokeWidth={3}
                    dot={{ fill: '#3A86FF', r: 6 }}
                    name="Cumulative Savings"
                  />
                </LineChart>
              </ResponsiveContainer>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-sm text-blue-900">
                  Total 5-year savings: <span className="font-semibold">₹72,000</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Detailed Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Card className="p-8 border-gray-200">
            <h2 className="text-xl text-[#0A2540] mb-6">Savings Breakdown</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <div className="text-sm text-gray-600 mb-2">Heating Cost Reduction</div>
                <div className="text-3xl text-blue-600 mb-2">₹8,640</div>
                <div className="text-sm text-gray-700 mb-4">60% of total savings</div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }} />
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="text-sm text-gray-600 mb-2">Cooling Cost Reduction</div>
                <div className="text-3xl text-green-600 mb-2">₹4,320</div>
                <div className="text-sm text-gray-700 mb-4">30% of total savings</div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }} />
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                <div className="text-sm text-gray-600 mb-2">Maintenance Savings</div>
                <div className="text-3xl text-purple-600 mb-2">₹1,440</div>
                <div className="text-sm text-gray-700 mb-4">10% of total savings</div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '10%' }} />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Environmental Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8"
        >
          <Card className="p-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <h2 className="text-2xl text-[#0A2540] mb-4">
              Environmental Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-4 bg-white rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">CO₂ Saved</span>
                </div>
                <div className="text-2xl text-green-600">8.5 tons</div>
                <div className="text-xs text-gray-600 mt-1">per year</div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Energy Saved</span>
                </div>
                <div className="text-2xl text-green-600">4,200</div>
                <div className="text-xs text-gray-600 mt-1">kWh/year</div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🌳</span>
                  <span className="text-sm text-gray-600">Equivalent Trees</span>
                </div>
                <div className="text-2xl text-green-600">142</div>
                <div className="text-xs text-gray-600 mt-1">trees planted</div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🚗</span>
                  <span className="text-sm text-gray-600">Car Miles Offset</span>
                </div>
                <div className="text-2xl text-green-600">21,000</div>
                <div className="text-xs text-gray-600 mt-1">miles/year</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
              <p className="text-sm text-gray-700">
                By optimizing your thermal design, you're contributing to a more sustainable future.
                This reduction is equivalent to taking <span className="text-green-600 font-semibold">1.8 cars</span> off
                the road for an entire year.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
