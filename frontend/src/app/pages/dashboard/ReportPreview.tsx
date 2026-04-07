import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { motion } from "motion/react";
import { Download, Share2, Printer, Calendar, Building2, User, Mail } from "lucide-react";

export function ReportPreview() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-[#F8F9FB] py-8">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header Actions */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl text-[#0A2540] mb-2">
              Thermal Analysis Report
            </h1>
            <p className="text-gray-600">
              Professional report ready for stakeholder presentation
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <Button variant="outline" className="gap-2">
              <Printer className="w-4 h-4" />
              Print
            </Button>
            <Button className="bg-[#3A86FF] hover:bg-[#2A76EF] text-white gap-2">
              <Download className="w-4 h-4" />
              Export PDF
            </Button>
          </div>
        </motion.div>

        {/* Report Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-12 border-gray-200 bg-white shadow-xl">
            {/* Report Header */}
            <div className="border-b-2 border-[#0A2540] pb-8 mb-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-4">
                    <div className="text-sm text-gray-600">ThermaSmart AI</div>
                    <div className="text-2xl text-[#0A2540]">Thermal Analysis Report</div>
                  </div>
                  
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Report Date: {currentDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>Project: Composite Wall Optimization</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-2">Report ID</div>
                  <div className="text-xl text-[#0A2540] font-mono">TSA-2026-0412</div>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <section className="mb-10">
              <h2 className="text-2xl text-[#0A2540] mb-4 pb-2 border-b border-gray-200">
                Executive Summary
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This report presents a comprehensive thermal analysis of a three-layer composite wall system 
                using advanced Computational Fluid Dynamics (CFD) simulation. The analysis evaluates heat
                transfer characteristics and overall thermal performance across the composite structure.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-sm text-gray-600 mb-1">Simulation Accuracy</div>
                  <div className="text-2xl text-blue-600">98.7%</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-sm text-gray-600 mb-1">Overall Efficiency</div>
                  <div className="text-2xl text-green-600">94.2%</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-sm text-gray-600 mb-1">Optimization Potential</div>
                  <div className="text-2xl text-purple-600">+30%</div>
                </div>
              </div>
            </section>

            {/* Configuration Details */}
            <section className="mb-10">
              <h2 className="text-2xl text-[#0A2540] mb-4 pb-2 border-b border-gray-200">
                Configuration Details
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg text-[#0A2540] mb-3">Boundary Conditions</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-gray-600">Hot Side Temperature:</span>
                        <span className="text-gray-900">35°C</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-gray-600">Cold Side Temperature:</span>
                        <span className="text-gray-900">10°C</span>
                      </div>
                      <div className="flex justify-between p-2 bg-gray-50 rounded">
                        <span className="text-gray-600">Temperature Difference:</span>
                        <span className="text-gray-900">25°C</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg text-[#0A2540] mb-3">Layer Composition</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-red-50 rounded border border-red-200">
                        <span className="text-gray-700">Layer 1 (Hot):</span>
                        <span className="text-gray-900">Concrete - 10cm</span>
                      </div>
                      <div className="flex justify-between p-2 bg-green-50 rounded border border-green-200">
                        <span className="text-gray-700">Layer 2 (Mid):</span>
                        <span className="text-gray-900">Insulation - 5cm</span>
                      </div>
                      <div className="flex justify-between p-2 bg-blue-50 rounded border border-blue-200">
                        <span className="text-gray-700">Layer 3 (Cold):</span>
                        <span className="text-gray-900">Brick - 10cm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Findings */}
            <section className="mb-10">
              <h2 className="text-2xl text-[#0A2540] mb-4 pb-2 border-b border-gray-200">
                Key Findings
              </h2>
              
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#3A86FF] text-white flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <div className="text-gray-900 mb-1">Heat Flux Analysis</div>
                      <div className="text-sm text-gray-600">
                        Calculated heat flux of 12.5 W/m² indicates moderate thermal performance. 
                        Primary heat transfer occurs through the insulation layer, which shows the 
                        steepest temperature gradient.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#3A86FF] text-white flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <div className="text-gray-900 mb-1">Temperature Distribution</div>
                      <div className="text-sm text-gray-600">
                        Interface temperatures show expected behavior with T₁₋₂ at 28°C and T₂₋₃ at 12°C. 
                        The insulation layer provides 64% of total thermal resistance despite being only 20% of total thickness.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#3A86FF] text-white flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <div className="text-gray-900 mb-1">Energy Performance</div>
                      <div className="text-sm text-gray-600">
                        Current configuration achieves 94.2% thermal efficiency. Further improvements can be
                        evaluated by iterating layer thickness and material selection.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-10">
              <h2 className="text-2xl text-[#0A2540] mb-4 pb-2 border-b border-gray-200">
                Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The thermal analysis demonstrates that the current composite wall configuration achieves good 
                thermal performance with 94.2% efficiency. You can further improve performance by testing
                alternate materials and thicknesses and comparing temperature profiles and heat flux across
                configurations.
              </p>
            </section>

            {/* Report Footer */}
            <div className="pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-8 text-sm text-gray-600">
                <div>
                  <div className="text-gray-900 mb-2">Prepared By</div>
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-4 h-4" />
                    <span>Dr. Sarah Chen, Chief Engineer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>sarah.chen@thermasmart.ai</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-900 mb-2">Generated By</div>
                  <div>ThermaSmart AI Platform v2.1</div>
                  <div>Powered by Advanced CFD & Machine Learning</div>
                </div>
              </div>

              <div className="mt-6 text-center text-xs text-gray-500">
                © 2026 ThermaSmart AI. This report is confidential and intended for the recipient only.
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
