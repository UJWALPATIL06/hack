import { useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { ArrowRight, Settings, Layers, AlertCircle, Plus, Trash2 } from "lucide-react";
import { motion } from "motion/react";

const industries = [
  { value: "general", label: "General Purpose" },
  { value: "cold-storage", label: "Cold Storage" },
  { value: "hvac", label: "HVAC Systems" },
  { value: "industrial", label: "Industrial Furnaces" },
  { value: "residential", label: "Residential Construction" },
];

interface Layer {
  id: string;
  thickness: string;
  conductivity: string;
  unit: string;
}

export function InputDashboard() {
  const navigate = useNavigate();
  
  const [hotTemp, setHotTemp] = useState("35");
  const [coldTemp, setColdTemp] = useState("10");
  
  const [layers, setLayers] = useState<Layer[]>([
    { id: "1", thickness: "10", conductivity: "1.4", unit: "cm" },
    { id: "2", thickness: "5", conductivity: "0.04", unit: "cm" },
    { id: "3", thickness: "10", conductivity: "0.6", unit: "cm" }
  ]);
  
  const [industry, setIndustry] = useState("general");

  const addLayer = () => {
    const newLayer: Layer = {
      id: Date.now().toString(),
      thickness: "10",
      conductivity: "1.0",
      unit: "cm"
    };
    setLayers([...layers, newLayer]);
  };

  const removeLayer = (id: string) => {
    if (layers.length > 1) {
      setLayers(layers.filter(layer => layer.id !== id));
    }
  };

  const updateLayer = (id: string, field: keyof Layer, value: string) => {
    setLayers(layers.map(layer => 
      layer.id === id ? { ...layer, [field]: value } : layer
    ));
  };

  const handleRunSimulation = () => {
    // Store parameters in sessionStorage for other screens to use
    // Convert all thicknesses to cm for consistency
    const layersInCm = layers.map(layer => ({
      ...layer,
      thicknessInCm: layer.unit === 'mm' 
        ? (parseFloat(layer.thickness) / 10).toString() 
        : layer.thickness
    }));
    
    const totalThickness = layersInCm.reduce((sum, layer) => 
      sum + (parseFloat(layer.thicknessInCm) || 0), 0
    );
    
    sessionStorage.setItem('simulationParams', JSON.stringify({
      layer1Thickness: parseFloat(layersInCm[0]?.thicknessInCm || "10"),
      layer2Thickness: parseFloat(layersInCm[1]?.thicknessInCm || "5"),
      layer3Thickness: parseFloat(layersInCm[2]?.thicknessInCm || "10"),
      hotTemp: parseFloat(hotTemp),
      coldTemp: parseFloat(coldTemp),
      industry,
      layers: layersInCm,
      totalThickness
    }));
    
    navigate('/simulation');
  };

  // Calculate total thickness in cm
  const totalThickness = layers.reduce((sum, layer) => {
    const thicknessInCm = layer.unit === 'mm' 
      ? parseFloat(layer.thickness) / 10 
      : parseFloat(layer.thickness);
    return sum + (thicknessInCm || 0);
  }, 0);
  
  const tempDifference = parseFloat(hotTemp) - parseFloat(coldTemp);

  const getLayerColor = (index: number) => {
    const colors = [
      { bg: "from-red-50 to-orange-50", border: "border-red-200", label: "text-red-700" },
      { bg: "from-green-50 to-emerald-50", border: "border-green-200", label: "text-green-700" },
      { bg: "from-blue-50 to-cyan-50", border: "border-blue-200", label: "text-blue-700" },
      { bg: "from-purple-50 to-pink-50", border: "border-purple-200", label: "text-purple-700" },
      { bg: "from-yellow-50 to-amber-50", border: "border-yellow-200", label: "text-yellow-700" },
    ];
    return colors[index % colors.length];
  };

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
            Thermal Simulation Input
          </h1>
          <p className="text-gray-600">
            Configure your composite wall parameters and run CFD analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Input Controls */}
          <div className="lg:col-span-2 space-y-6">
            {/* Industry Mode Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 border-gray-200">
                <h2 className="text-xl text-[#0A2540] mb-4">Industry Mode</h2>
                
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((ind) => (
                      <SelectItem key={ind.value} value={ind.value}>
                        {ind.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Card>
            </motion.div>

            {/* Temperature Boundary Conditions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 border-gray-200">
                <h2 className="text-xl text-[#0A2540] mb-6">Boundary Temperatures</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">
                      Hot Side Temperature (°C)
                    </label>
                    <Input
                      type="number"
                      value={hotTemp}
                      onChange={(e) => setHotTemp(e.target.value)}
                      placeholder="Enter temperature"
                      className="text-lg"
                    />
                    <div className="mt-2 text-xs text-gray-500">
                      Typical range: 20°C - 50°C
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">
                      Cold Side Temperature (°C)
                    </label>
                    <Input
                      type="number"
                      value={coldTemp}
                      onChange={(e) => setColdTemp(e.target.value)}
                      placeholder="Enter temperature"
                      className="text-lg"
                    />
                    <div className="mt-2 text-xs text-gray-500">
                      Typical range: -10°C - 25°C
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">
                    Temperature Difference: <span className="text-[#0A2540] font-semibold">{tempDifference.toFixed(1)}°C</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Layer Configuration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl text-[#0A2540]">Layer Configuration</h2>

                  <Button
                    onClick={addLayer}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Layer
                  </Button>
                </div>

                <div className="space-y-4">
                  {layers.map((layer, index) => {
                    const colors = getLayerColor(index);
                    const position = index === 0 ? "Hot Side" : index === layers.length - 1 ? "Cold Side" : "Middle";
                    
                    return (
                      <div 
                        key={layer.id} 
                        className={`p-4 bg-gradient-to-r ${colors.bg} rounded-lg border ${colors.border}`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className={`text-sm ${colors.label}`}>
                            Layer {index + 1} ({position})
                          </div>
                          {layers.length > 1 && (
                            <Button
                              onClick={() => removeLayer(layer.id)}
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm text-gray-700 mb-2 block">
                              Thickness
                            </label>
                            <div className="flex items-center gap-2">
                              <Input
                                type="number"
                                value={layer.thickness}
                                onChange={(e) => updateLayer(layer.id, 'thickness', e.target.value)}
                                placeholder="Enter thickness"
                                min="0.1"
                                step="0.1"
                                className="flex-1"
                              />
                              <Select
                                value={layer.unit}
                                onValueChange={(value) => updateLayer(layer.id, 'unit', value)}
                              >
                                <SelectTrigger className="w-20">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="cm">cm</SelectItem>
                                  <SelectItem value="mm">mm</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <label className="text-sm text-gray-700 mb-2 block">
                              Thermal Conductivity (k)
                            </label>
                            <div className="flex items-center gap-2">
                              <Input
                                type="number"
                                value={layer.conductivity}
                                onChange={(e) => updateLayer(layer.id, 'conductivity', e.target.value)}
                                placeholder="Enter k value"
                                min="0.001"
                                step="0.01"
                                className="flex-1"
                              />
                              <span className="text-sm text-gray-600 whitespace-nowrap">W/m·K</span>
                            </div>
                            <div className="mt-1 text-xs text-gray-500">
                              Common range: 0.04 (insulation) to 50 (steel)
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-sm text-blue-900">
                    Total Layers: <span className="font-semibold">{layers.length}</span> | 
                    Total Thickness: <span className="font-semibold">{totalThickness.toFixed(1)} cm</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Summary & Actions */}
          <div className="space-y-6">
            {/* Configuration Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="p-6 border-gray-200">
                <h3 className="text-lg text-[#0A2540] mb-4">Configuration Summary</h3>
                
                <div className="space-y-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Total Thickness</div>
                    <div className="text-2xl text-[#0A2540]">
                      {totalThickness.toFixed(1)} cm
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Temperature Difference</div>
                    <div className="text-2xl text-[#0A2540]">
                      {tempDifference.toFixed(1)}°C
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Number of Layers</div>
                    <div className="text-2xl text-[#0A2540]">
                      {layers.length}
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Industry Mode</div>
                    <div className="text-sm text-[#0A2540]">
                      {industries.find(i => i.value === industry)?.label}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Alert Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="p-6 border-yellow-200 bg-yellow-50">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm text-yellow-900 mb-1">Optimization Tip</div>
                    <div className="text-xs text-yellow-700">
                      For better insulation, consider adding or increasing insulation layer thickness.
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Run Simulation Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                onClick={handleRunSimulation}
                className="w-full bg-[#3A86FF] hover:bg-[#2A76EF] text-white py-6 text-lg"
                disabled={layers.length === 0 || !hotTemp || !coldTemp}
              >
                Run CFD Simulation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}