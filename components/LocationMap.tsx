'use client';

import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';

const locations = [
  {
    name: 'Sydney',
    address: '123 Smith St, Sydney NSW 2000 AU',
    position: { lat: -33.8688, lng: 151.2093 }
  },
  {
    name: 'New York',
    address: '123 Spring St, New York NY 10012 USA',
    position: { lat: 40.7128, lng: -74.0060 }
  }
];

export default function LocationMap() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg overflow-hidden shadow-xl bg-gray-100 h-[400px] flex items-center justify-center"
    >
      <div className="text-center p-8">
        <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
        <div className="space-y-4">
          {locations.map((location) => (
            <div key={location.name} className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">{location.name}</h4>
              <p className="text-sm text-gray-600">{location.address}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}