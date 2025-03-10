'use client';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function FAQPage() {
  const faqs = [
    {
      question: "What types of CNC machines do you offer?",
      answer: "We offer a wide range of CNC machines including 3-axis, 4-axis, and specialized PCB CNC machines. Our product line caters to various industries and applications."
    },
    {
      question: "What is your warranty coverage?",
      answer: "We provide a standard 12-month warranty on all new machines, covering manufacturing defects and material failures. Extended warranty options are available."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary by location. Domestic orders typically arrive within 5-7 business days, while international shipping can take 7-14 business days."
    },
    {
      question: "Do you offer installation services?",
      answer: "Yes, we provide professional installation services for all our CNC machines. Our certified technicians ensure proper setup and initial training."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, wire transfers, and purchase orders from qualified businesses."
    },
    {
      question: "Do you provide training?",
      answer: "Yes, we offer comprehensive training programs for all our machines, including basic operation, maintenance, and advanced programming."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-3">{faq.question}</h2>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-4">
            Our support team is here to help. Contact us through any of these channels:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• Email: support@akritiprecision.com</li>
            <li>• Phone: +1 (555) 123-4567</li>
            <li>• Live Chat: Available 24/7</li>
          </ul>
        </div>
      </div>
    </div>
  );
}