'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import LocationMap from '@/components/LocationMap';
import { UnmatchedPrecision } from '@/components/svg/UnmatchedPrecision';
import { InnovativeEngineering } from '@/components/svg/InnovativeEngineering';
import { SuperiorComponents } from '@/components/svg/SuperiorComponents';
import { ReliabilityCertified } from '@/components/svg/ReliabilityCertified';
import { CustomizedSolutions } from '@/components/svg/CustomizedSolutions';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-2">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full"
            style={{ aspectRatio: '4/1' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="CNC Machining"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          
          {/* Machine Types */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 py-4">
            {[
              {
                href: "/products/majestic-series",
                image: "https://images.unsplash.com/photo-1565439361543-75e9138ee336?auto=format&fit=crop&w=800&q=80",
                title: "Meteor Series",
                description: "High-end industrial CNC solutions",
                delay: 0.1
              },
              {
                href: "/products/mega-series",
                image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
                title: "Majestic Series",
                description: "Large format CNC machines",
                delay: 0.2
              },
              {
                href: "/products/meteor-series",
                image: "https://images.unsplash.com/photo-1565439361503-8c0198f3e005?auto=format&fit=crop&w=800&q=80",
                title: "PCB Series",
                description: "High-speed precision machining",
                delay: 0.3
              },
              {
                href: "/products/pcb-cnc",
                image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
                title: "Special Purpose",
                description: "Specialized PCB manufacturing",
                delay: 0.4
              },
              {
                href: "/products/4-axis-cnc",
                image: "https://images.unsplash.com/photo-1581092160757-a35868236772?auto=format&fit=crop&w=800&q=80",
                title: "Engineering Composits",
                description: "Custom CNC solutions",
                delay: 0.5
              }
            ].map((product, index) => (
              <Link href={product.href} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: product.delay }}
                  className="bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform cursor-pointer relative overflow-hidden"
                  style={{ aspectRatio: '1/2' }}
                >
                  {/* Image Section (40% height) */}
                  <div className="relative w-full" style={{ height: '40%' }}>
                    <div className="absolute inset-0 p-2">
                      <div className="relative w-full h-full">
                        <Image
                          src={product.image}
                          alt={`${product.title} CNC Machine`}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Description Section (60% height) */}
                  <div className="p-4" style={{ height: '60%' }}>
                    <h3 className="text-lg font-semibold mb-2 text-white">{product.title}</h3>
                    <p className="text-sm text-gray-400">{product.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          


        </div>
      </section>

 
    </div>
  );
}
