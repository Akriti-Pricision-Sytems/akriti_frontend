'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div>
                    <Input placeholder="Subject" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div>
                    <textarea
                      className="w-full min-h-[150px] p-3 rounded-md border bg-gray-700 border-gray-600 text-white"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Mail className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-white">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">contact@akriti.tech</p>
                <p className="text-sm text-gray-400 mt-2">24/7 Response</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Phone className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-white">Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300"> +91 9019054837</p>
                <p className="text-sm text-gray-400 mt-2">Mon-Sat: 10AM-7PM</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-white">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Chat with our experts</p>
                <p className="text-sm text-gray-400 mt-2">Available 24/7</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        {/* Company Information */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Visit us at: </h2>
            <h2 className="text-2xl font-bold mb-4 text-white">Akriti Precision Systems Private Limited</h2>
            <div className="space-y-2 text-gray-300">
              <p>9A, Prop No 439, Kalkere Main Road</p>
              <p>Kalkere, Bangalore, Karnataka, India – 560043</p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p>CIN – U33208KA2019PTC130105</p>
                <p>GST – 29AASCA9843Q1ZE</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map Section */}
        <div className="mb-12 mt-12">
          <div className="w-full h-[600px] relative rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0992478702788!2d77.67237917574816!3d13.02935141360818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11cfe65baef3%3A0x6b4a924a0da5ca61!2sAkriti%20Precision%20Systems%20Pvt.%20Ltd.%20-%20CNC%20Machines%20Manufacturer!5e0!3m2!1sen!2sin!4v1741856581221!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>


      </div>
    </div>
  );
}