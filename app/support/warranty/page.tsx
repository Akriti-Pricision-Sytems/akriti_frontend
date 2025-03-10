'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Clock, PenTool as Tool, CheckCircle } from "lucide-react";

export default function WarrantyPage() {
  const warrantyFeatures = [
    {
      icon: Shield,
      title: "Comprehensive Coverage",
      description: "Our warranty covers all manufacturing defects and material failures."
    },
    {
      icon: Clock,
      title: "Extended Duration",
      description: "12-month standard warranty with options for extension."
    },
    {
      icon: Tool,
      title: "Repair Service",
      description: "Professional repair service by certified technicians."
    },
    {
      icon: CheckCircle,
      title: "Quality Guarantee",
      description: "100% satisfaction guaranteed on all repairs and replacements."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Warranty Information</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {warrantyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Warranty Terms & Conditions</h2>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-3">Coverage Period</h3>
              <p className="text-gray-600">
                All new CNC machines come with a standard 12-month warranty from the date of purchase. Extended warranty options are available for up to 36 months.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">What's Covered</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Manufacturing defects</li>
                <li>Material failures</li>
                <li>Electronic component malfunctions</li>
                <li>Motor and drive system issues</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Exclusions</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Damage from misuse or accidents</li>
                <li>Unauthorized modifications</li>
                <li>Normal wear and tear</li>
                <li>Consumable parts</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}