'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Download, Book, Video, PenTool as Tool } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
  const resources = [
    {
      icon: Download,
      title: "Downloads",
      items: [
        "CAD Models",
        "Technical Drawings",
        "Software Updates",
        "Product Catalogs"
      ]
    },
    {
      icon: Book,
      title: "Learning Center",
      items: [
        "Getting Started Guides",
        "Best Practices",
        "Case Studies",
        "White Papers"
      ]
    },
    {
      icon: Video,
      title: "Video Library",
      items: [
        "Product Demonstrations",
        "Tutorial Videos",
        "Maintenance Guides",
        "Webinar Recordings"
      ]
    },
    {
      icon: Tool,
      title: "Tools & Calculators",
      items: [
        "Feed Rate Calculator",
        "Material Library",
        "Cost Estimator",
        "Toolpath Optimizer"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Resources</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <resource.icon className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resource.items.map((item) => (
                      <li key={item} className="flex items-center justify-between">
                        <span className="text-gray-600">{item}</span>
                        <Button variant="ghost" size="sm">Access</Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Latest Resources</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">New CNC Programming Guide</h3>
                  <p className="text-gray-600">Updated for 2024 with new features and best practices</p>
                </div>
                <Button>Download</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Machining Calculator App</h3>
                  <p className="text-gray-600">Calculate optimal cutting parameters</p>
                </div>
                <Button>Download</Button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Industry Resources</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Manufacturing Standards</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• ISO 9001:2015 Guidelines</li>
                  <li>• Quality Control Templates</li>
                  <li>• Safety Protocols</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Industry Research</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Market Reports</li>
                  <li>• Technology Trends</li>
                  <li>• Competitive Analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}