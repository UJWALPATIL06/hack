import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Card } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import { motion } from "motion/react";
import { Cpu, CheckCircle2 } from "lucide-react";

export function SimulationScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate CFD computation time
    const timer = setTimeout(() => {
      navigate('/results');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center">
      <div className="max-w-2xl w-full px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-12 text-center border-gray-200">
            {/* Title */}
            <h1 className="text-3xl text-[#0A2540] mb-3">
              Running CFD Simulation
            </h1>
            <p className="text-gray-600 mb-8">
              Analyzing temperature distribution across composite layers using advanced computational fluid dynamics...
            </p>

            {/* Progress Bar */}
            <div className="mb-8">
              <Progress value={75} className="h-2" />
            </div>

            {/* Simulation Steps */}
            <div className="space-y-4 text-left max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm text-green-900">Mesh generation complete</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm text-green-900">Boundary conditions applied</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full flex-shrink-0"
                />
                <span className="text-sm text-blue-900">Solving heat transfer equations...</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0" />
                <span className="text-sm text-gray-600">Generating visualizations</span>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl text-[#3A86FF] mb-1">2,450</div>
                  <div className="text-xs text-gray-600">Mesh Elements</div>
                </div>
                <div>
                  <div className="text-2xl text-[#3A86FF] mb-1">0.023s</div>
                  <div className="text-xs text-gray-600">Time Step</div>
                </div>
                <div>
                  <div className="text-2xl text-[#3A86FF] mb-1">98.7%</div>
                  <div className="text-xs text-gray-600">Convergence</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
