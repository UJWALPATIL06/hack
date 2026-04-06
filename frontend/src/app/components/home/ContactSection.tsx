import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
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
            Get in Touch
          </div>
          <h2 className="text-4xl text-[#0A2540] mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Our team is ready to help you optimize your thermal engineering solutions
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-gray-200">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-700 mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="john.doe@company.com" />
                </div>

                <div>
                  <label className="text-sm text-gray-700 mb-2 block">
                    Company
                  </label>
                  <Input placeholder="Your Company Name" />
                </div>

                <div>
                  <label className="text-sm text-gray-700 mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-[#3A86FF] hover:bg-[#2A76EF] text-white">
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-[#0A2540] mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels. We typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
                <div>
                  <h4 className="text-lg text-[#0A2540] mb-1">
                    Email
                  </h4>
                  <p className="text-gray-600">contact@thermasmart.ai</p>
                  <p className="text-gray-600">support@thermasmart.ai</p>
                </div>
              </Card>

              <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
                <div>
                  <h4 className="text-lg text-[#0A2540] mb-1">
                    Phone
                  </h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </Card>

              <Card className="p-6 border-gray-200 hover:shadow-lg transition-shadow">
                <div>
                  <h4 className="text-lg text-[#0A2540] mb-1">
                    Office
                  </h4>
                  <p className="text-gray-600">123 Innovation Drive</p>
                  <p className="text-gray-600">San Francisco, CA 94105</p>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
