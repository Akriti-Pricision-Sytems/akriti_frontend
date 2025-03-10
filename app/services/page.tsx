'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      title: "CNC Machining",
      description: "Precision machining services using state-of-the-art CNC equipment for complex parts manufacturing."
    },
    {
      title: "Prototyping",
      description: "Rapid prototyping services to bring your designs to life quickly and accurately."
    },
    {
      title: "Quality Inspection",
      description: "Comprehensive quality control and inspection services using advanced measurement tools."
    },
    {
      title: "Design Consultation",
      description: "Expert consultation for optimizing designs for manufacturability and cost-effectiveness."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}