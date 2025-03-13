'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function TeknomotorPage() {
  const spindles = [
    {
      name: "C41/47-C-DB-P-ER20",
      power: "1.1 kW",
      speed: "24,000 RPM",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80",
      price: "$1,299",
      features: [
        "Automatic tool change",
        "Water-cooled",
        "High precision bearings",
        "ER20 collet system"
      ]
    },
    {
      name: "C51/60-B-DB-P-ER25",
      power: "2.2 kW",
      speed: "18,000 RPM",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
      price: "$1,899",
      features: [
        "Heavy-duty construction",
        "Dual bearing system",
        "ER25 collet system",
        "Integrated sensors"
      ]
    },
    {
      name: "C31/40-A-DB-P-ER16",
      power: "0.8 kW",
      speed: "30,000 RPM",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      price: "$999",
      features: [
        "Compact design",
        "High-speed operation",
        "ER16 collet system",
        "Low vibration"
      ]
    },
    {
      name: "C61/70-D-DB-P-ISO30",
      power: "3.5 kW",
      speed: "15,000 RPM",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      price: "$2,499",
      features: [
        "ISO30 tool holder",
        "Industrial grade",
        "Heavy cutting capability",
        "Advanced cooling system"
      ]
    },
    {
      name: "C71/80-E-DB-P-BT40",
      power: "4.5 kW",
      speed: "12,000 RPM",
      image: "https://images.unsplash.com/photo-1581092160757-a35868236772?auto=format&fit=crop&w=800&q=80",
      price: "$3,299",
      features: [
        "BT40 tool interface",
        "Maximum torque output",
        "Precision balancing",
        "Industrial ethernet"
      ]
    },
    {
      name: "C35/42-C-DB-P-ER20-HF",
      power: "1.5 kW",
      speed: "40,000 RPM",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80",
      price: "$1,699",
      features: [
        "High-frequency design",
        "Ultra-precision",
        "Ceramic bearings",
        "Advanced thermal management"
      ]
    },
    {
      name: "C45/52-D-DB-P-HSK63",
      power: "2.8 kW",
      speed: "20,000 RPM",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
      price: "$2,199",
      features: [
        "HSK63 tool holder",
        "Precision ground shaft",
        "Digital interface",
        "Automatic balancing"
      ]
    },
    {
      name: "C55/63-E-DB-P-CAT40",
      power: "3.7 kW",
      speed: "16,000 RPM",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      price: "$2,799",
      features: [
        "CAT40 interface",
        "Heavy-duty bearings",
        "Integrated cooling",
        "Smart monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Teknomotor Spindles</h1>
          <p className="text-xl text-gray-600">High-Performance Precision Spindles for CNC Applications</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spindles.map((spindle, index) => (
            <motion.div
              key={spindle.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={spindle.image}
                    alt={spindle.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{spindle.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Power Output</p>
                      <p className="font-semibold">{spindle.power}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Max Speed</p>
                      <p className="font-semibold">{spindle.speed}</p>
                    </div>
                    <ul className="text-sm space-y-1">
                      {spindle.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600">• {feature}</li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <p className="text-2xl font-bold text-blue-600 mb-4">{spindle.price}</p>
                      <Button className="w-full">Request Quote</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}