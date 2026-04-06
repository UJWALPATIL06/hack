import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { motion } from "motion/react";
import { TrendingDown, Thermometer, ArrowRight, Download, Eye } from "lucide-react";
import { Link } from "react-router";

// Generate temperature distribution data
const generateTempData = () => {
  const params = JSON.parse(sessionStorage.getItem('simulationParams') || '{}');
  const totalThickness = (params.layer1Thickness || 10) + (params.layer2Thickness || 5) + (params.layer3Thickness || 10);
  const hotTemp = params.hotTemp || 35;
  const coldTemp = params.coldTemp || 10;
  
  const data = [];
  const points = 50;
  
  for (let i = 0; i <= points; i++) {
    const position = (i / points) * totalThickness;
    
    // Simulate temperature drop across layers with different thermal conductivities
    let temp;
    const layer1End = params.layer1Thickness || 10;
    const layer2End = layer1End + (params.layer2Thickness || 5);
    
    if (position <= layer1End) {
      // Layer 1 - gradual drop
      temp = hotTemp - (hotTemp - hotTemp + 8) * (position / layer1End);
    } else if (position <= layer2End) {
      // Layer 2 - steep drop (insulation)
      const layer2Progress = (position - layer1End) / (params.layer2Thickness || 5);
      temp = (hotTemp - 8) - (hotTemp - coldTemp - 10) * layer2Progress;
    } else {
      // Layer 3 - gradual drop
      const layer3Progress = (position - layer2End) / (params.layer3Thickness || 10);
      temp = (coldTemp + 2) - 2 * layer3Progress;
    }
    
    data.push({
      position: position.toFixed(1),
      temperature: temp.toFixed(1),
    });
  }
  
  return data;
};

const tempData = generateTempData();

export function ResultsDashboard() {
  const params = JSON.parse(sessionStorage.getItem('simulationParams') || '{}');
  const totalThickness = (params.layer1Thickness || 10) + (params.layer2Thickness || 5) + (params.layer3Thickness || 10);
  const heatFlux = ((params.hotTemp || 35) - (params.coldTemp || 10)) / (totalThickness / 100) * 0.5;

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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl text-[#0A2540] mb-2">
                Simulation Results
              </h1>
              <p className="text-gray-600">
                CFD analysis completed successfully with 98.7% convergence
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/visualization">
                <Button variant="outline" className="gap-2">
                  <Eye className="w-4 h-4" />
                  View Layers
                </Button>
              </Link>
              <Button className="bg-[#3A86FF] hover:bg-[#2A76EF] text-white gap-2">
                <Download className="w-4 h-4" />
                Export Data
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 border-gray-200">
              <div className="text-sm text-gray-600 mb-3">Heat Flux</div>
              <div className="text-3xl text-[#0A2540] mb-1">{heatFlux.toFixed(2)}</div>
              <div className="text-sm text-gray-600">W/m²</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 border-gray-200">
              <div className="text-sm text-gray-600 mb-3">Temp Drop</div>
              <div className="text-3xl text-[#0A2540] mb-1">
                {((params.hotTemp || 35) - (params.coldTemp || 10)).toFixed(1)}
              </div>
              <div className="text-sm text-gray-600">°C</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 border-gray-200">
              <div className="text-sm text-gray-600 mb-3">R-Value</div>
              <div className="text-3xl text-[#0A2540] mb-1">
                {(totalThickness / 10).toFixed(2)}
              </div>
              <div className="text-sm text-gray-600">m²·K/W</div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 border-gray-200">
              <div className="text-sm text-gray-600 mb-3">Efficiency</div>
              <div className="text-3xl text-[#0A2540] mb-1">94.2</div>
              <div className="text-sm text-gray-600">%</div>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Temperature Distribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 border-gray-200">
              <h2 className="text-xl text-[#0A2540] mb-6">Temperature Distribution</h2>
              
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={tempData}>
                  <defs>
                    <linearGradient id="tempGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity={0.8} />
                      <stop offset="50%" stopColor="#22c55e" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.8} />
                    </linearGradient>
                  </defs>
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
                  <Area 
                    type="monotone" 
                    dataKey="temperature" 
                    stroke="#3A86FF" 
                    strokeWidth={3}
                    fill="url(#tempGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>

              <div className="mt-4 flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-red-500" />
                  <span className="text-gray-600">Hot Side</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-green-500" />
                  <span className="text-gray-600">Insulation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-blue-500" />
                  <span className="text-gray-600">Cold Side</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Interface Temperatures */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="p-6 border-gray-200">
                <h3 className="text-lg text-[#0A2540] mb-4">Interface Temperatures</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-sm text-gray-700">T₁ (Hot)</span>
                    <span className="text-lg text-red-600">{params.hotTemp || 35}°C</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm text-gray-700">T₁₋₂</span>
                    <span className="text-lg text-orange-600">{((params.hotTemp || 35) - 7).toFixed(1)}°C</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">T₂₋₃</span>
                    <span className="text-lg text-green-600">{((params.coldTemp || 10) + 2).toFixed(1)}°C</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-700">T₃ (Cold)</span>
                    <span className="text-lg text-blue-600">{params.coldTemp || 10}°C</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Card className="p-6 border-gray-200">
                <h3 className="text-lg text-[#0A2540] mb-4">Next Steps</h3>
                
                <div className="space-y-3">
                  <Link to="/visualization">
                    <Button variant="outline" className="w-full justify-start">
                      <Eye className="w-4 h-4 mr-2" />
                      View Layer Visualization
                    </Button>
                  </Link>
                  
                  <Link to="/ai-recommendation">
                    <Button variant="outline" className="w-full justify-start">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Get AI Recommendations
                    </Button>
                  </Link>
                  
                  <Link to="/comparison">
                    <Button variant="outline" className="w-full justify-start">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Compare Configurations
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
