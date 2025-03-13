'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileText, Book, Video, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DocumentationPage() {
  const resources = [
    {
      icon: FileText,
      title: "User Manuals",
      description: "Comprehensive guides for all our CNC machines"
    },
    {
      icon: Book,
      title: "Technical Specifications",
      description: "Detailed technical information and specifications"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for operation and maintenance"
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Software updates and additional resources"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Support</h1>

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
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Button variant="outline">Access Resources</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Quick Start Guides</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">3-Axis CNC Machines</h3>
                  <p className="text-gray-600">Basic setup and operation guide for 3-axis CNC machines.</p>
                  <Button variant="link" className="mt-2">View Guide</Button>
                </div>
                <div>
                  <h3 className="font-semib old mb-2">4-Axis CNC Machines</h3>
                  <p className="text-gray-600">Setup and operation instructions for 4-axis CNC machines.</p>
                  <Button variant="link" className="mt-2">View Guide</Button>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">PCB CNC Machines</h3>
                  <p className="text-gray-600">Comprehensive guide for PCB manufacturing machines.</p>
                  <Button variant="link" className="mt-2">View Guide</Button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Maintenance Documentation</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Routine Maintenance</h3>
                  <p className="text-gray-600">Regular maintenance schedules and procedures.</p>
                  <Button variant="link" className="mt-2">View Maintenance Guide</Button>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Troubleshooting</h3>
                  <p className="text-gray-600">Common issues and their solutions.</p>
                  <Button variant="link" className="mt-2">View Troubleshooting Guide</Button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Software Documentation</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">CAD/CAM Software</h3>
                  <p className="text-gray-600">Guides for supported CAD/CAM software.</p>
                  <Button variant="link" className="mt-2">View Software Guides</Button>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Machine Control Software</h3>
                  <p className="text-gray-600">Documentation for machine control interfaces.</p>
                  <Button variant="link" className="mt-2">View Control Guides</Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}