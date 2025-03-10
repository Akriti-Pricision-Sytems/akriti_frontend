'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Truck, Package, Globe, Clock } from "lucide-react";

export default function ShippingPage() {
  const shippingMethods = [
    {
      icon: Truck,
      title: "Standard Shipping",
      description: "5-7 business days",
      price: "Free for orders over $500"
    },
    {
      icon: Package,
      title: "Express Shipping",
      description: "2-3 business days",
      price: "Starting at $50"
    },
    {
      icon: Globe,
      title: "International Shipping",
      description: "7-14 business days",
      price: "Calculated at checkout"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {shippingMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <method.icon className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{method.description}</p>
                  <p className="font-semibold">{method.price}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Shipping Policies</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-4 text-gray-600">
                <li>• Orders are processed within 24-48 hours</li>
                <li>• Tracking information is provided via email</li>
                <li>• Signature required for deliveries over $1000</li>
                <li>• Insurance included for all shipments</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Delivery Areas</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Domestic Shipping</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• All 50 US States</li>
                    <li>• US Territories</li>
                    <li>• APO/FPO Addresses</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">International Shipping</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Canada</li>
                    <li>• European Union</li>
                    <li>• Australia & New Zealand</li>
                    <li>• Select Asian Countries</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Returns & Exchanges</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                We accept returns within 30 days of delivery. Items must be unused and in original packaging.
              </p>
              <p className="text-gray-600">
                Return shipping costs are covered for defective items. Customer is responsible for return shipping on non-defective returns.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}