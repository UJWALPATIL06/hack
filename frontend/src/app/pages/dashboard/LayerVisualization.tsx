import { Card } from "../../components/ui/card";
import { motion } from "motion/react";
import { Layers, ArrowRight, Info } from "lucide-react";

export function LayerVisualization() {
  const params = JSON.parse(sessionStorage.getItem('simulationParams') || '{}');
  
  const layers = [
    {
      name: "Concrete Layer",
      material: params.layer1Material || "concrete",
      thickness: params.layer1Thickness || 10,
      temp: params.hotTemp || 35,
      gradient: "from-red-500 via-orange-400 to-yellow-300",
      borderColor: "border-red-200"
    },
    {
      name: "Insulation Layer",
      material: params.layer2Material || "insulation",
      thickness: params.layer2Thickness || 5,
      temp: 22,
      gradient: "from-yellow-300 via-green-300 to-cyan-300",
      borderColor: "border-green-200"
    },
    {
      name: "Brick Layer",
      material: params.layer3Material || "brick",
      thickness: params.layer3Thickness || 10,
      temp: params.coldTemp || 10,
      gradient: "from-cyan-300 via-blue-400 to-blue-600",
      borderColor: "border-blue-200"
    }
  ];

  const totalThickness = layers.reduce((sum, layer) => sum + layer.thickness, 0);

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
            Layer Visualization
          </h1>
          <p className="text-gray-600">
            Visual representation of composite wall structure with thermal gradient
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Visualization */}
          <div className="lg:col-span-2 space-y-6">
            {/* Horizontal Layer View */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-8 border-gray-200">
                <h2 className="text-xl text-[#0A2540] mb-6">Thermal Profile</h2>

                <div className="space-y-4">
                  {layers.map((layer, index) => {
                    const heightPercent = (layer.thickness / totalThickness) * 100;
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        style={{ height: `${Math.max(heightPercent * 3, 80)}px` }}
                        className={`relative rounded-lg overflow-hidden bg-gradient-to-r ${layer.gradient} flex items-center justify-between px-6 border-2 ${layer.borderColor}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-white text-lg drop-shadow-md">
                            {layer.name}
                          </div>
                          <div className="px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full text-white text-sm">
                            {layer.thickness} cm
                          </div>
                        </div>
                        
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-lg">{layer.temp}°C</span>
                        </div>

                        {/* Temperature gradient indicator */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
                          <ArrowRight className="w-4 h-4 text-white/60" />
                          <span className="text-xs text-white/60">Heat Flow</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Heat Flow Arrow */}
                <div className="mt-6 flex items-center justify-center gap-2 text-gray-500">
                  <div className="flex-1 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 rounded-full" />
                  <span className="text-sm whitespace-nowrap">Heat Transfer Direction →</span>
                </div>
              </Card>
            </motion.div>

            {/* Cross-Section View */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="p-8 border-gray-200">
                <h3 className="text-lg text-[#0A2540] mb-6">Cross-Section View</h3>
                
                <div className="flex h-64 border-2 border-gray-200 rounded-lg overflow-hidden">
                  {layers.map((layer, index) => {
                    const widthPercent = (layer.thickness / totalThickness) * 100;
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        style={{ width: `${widthPercent}%` }}
                        className={`relative bg-gradient-to-b ${layer.gradient} flex flex-col items-center justify-center border-r-2 ${layer.borderColor} last:border-r-0`}
                      >
                        <div className="text-white text-sm drop-shadow-md mb-2 transform -rotate-90 whitespace-nowrap">
                          {layer.name}
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                          {layer.temp}°C
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-4 flex justify-between text-xs text-gray-600">
                  <span>Hot Side ({params.hotTemp || 35}°C)</span>
                  <span>Total: {totalThickness} cm</span>
                  <span>Cold Side ({params.coldTemp || 10}°C)</span>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Side Panel - Layer Details */}
          <div className="space-y-6">
            {layers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-6 border-gray-200">
                  <div className={`w-full h-3 rounded-full bg-gradient-to-r ${layer.gradient} mb-4`} />
                  
                  <h3 className="text-lg text-[#0A2540] mb-4">
                    Layer {index + 1}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Material</span>
                      <span className="text-sm text-[#0A2540] capitalize">{layer.material}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Thickness</span>
                      <span className="text-sm text-[#0A2540]">{layer.thickness} cm</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Temperature</span>
                      <span className="text-sm text-[#0A2540]">{layer.temp}°C</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">% of Total</span>
                      <span className="text-sm text-[#0A2540]">
                        {((layer.thickness / totalThickness) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Card className="p-6 border-blue-200 bg-blue-50">
                <div className="flex gap-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm text-blue-900 mb-1">Visualization Info</div>
                    <div className="text-xs text-blue-700">
                      Colors represent temperature gradient from hot (red) to cold (blue). 
                      Layer thickness is proportional to actual dimensions.
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
