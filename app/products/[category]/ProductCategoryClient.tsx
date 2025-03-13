'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sizes = [
  'All sizes',
  '400x300mm',
  '600x400mm',
  '600x500mm',
  '900x600mm',
  '1200x900mm',
  '1520x900mm'
];

const products = {
  'meteor-series': [
    {
     id: 'meteor-1hp',
     name: 'Meteor 1 HP Spindle CNC',
     description: 'High-speed precision 3-axis CNC machining system',
     image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
     size: '400x300mm'
   },
   {
     id: 'meteor-1.5hp',
     name: 'Meteor  1.5 HP Spindle CNC',
     description: 'Versatile 2-in-1 CNC machine combining milling and routing capabilities',
     image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
     size: '400x300mm'
   },
   {
    id: 'meteor-3hp',
    name: 'Meteor 3 HP Spindle CNC',
    description: 'Versatile 2-in-1 CNC machine combining milling and routing capabilities',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    size: '400x300mm'
  }
 ],
 'majestic-series': [
  {
    id: 'majestic-6040',
    name: 'Majestic 6040',
    description: 'Industrial-grade 3/4-axis CNC system for demanding applications',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    size: '600x400mm'
  },
  {
    id: 'majestic-9060',
    name: 'Majestic 9060',
    description: 'Advanced 3/4-axis CNC system with superior precision',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    size: '900x600mm'
  },
  {
    id: 'majestic-1290',
    name: 'Majestic 1290',
    description: 'Advanced 3/4-axis CNC system with superior precision',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    size: '1200x900mm'
  }
 ],
'pcb-precision-pro': [
  {
    id: 'pcb-single-spindle',
    name: 'PCB precision pro - Single spindle',
    description: 'Precision CNC for PCB manufacturing',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    size: '600x500mm'
  },
  {
    id: 'pcb-double-spindle',
    name: 'PCB precision pro - Double spindle',
    description: 'Precision CNC for PCB manufacturing',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    size: '600x500mm'
  }
 ],
};

const categoryTitles = {
  'meteor-series': 'Meteor Series CNC Machines',
  'majestic-series': 'Majestic Series CNC Machines',
  'pcb-precision-pro': 'PCB Precision Pro',
  'special-purpose': 'Special Purpose CNC Machines',
  'engineering-composites': 'Engineering Composites'
};

const upgradeNotes = {
  'meteor-series': 'Laser upgrade available for all variants',
  'majestic-series': '4th axis upgrade available for all variants'
};

const carouselImages = [
  'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581092160757-a35868236772?auto=format&fit=crop&w=1200&q=80'
];


export default function ProductCategoryClient({ category }: { category: string }) {
  const [selectedSize, setSelectedSize] = useState('All sizes');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categoryProducts = products[category as keyof typeof products] || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  const filteredProducts = categoryProducts.filter(product => {
    return selectedSize === 'All sizes' || product.size === selectedSize;
  });

  const upgradeNote = upgradeNotes[category as keyof typeof upgradeNotes];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0 text-white">
            {categoryTitles[category as keyof typeof categoryTitles]}
          </h1>
          
          <div className="w-full md:w-auto">
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-[200px] bg-gray-800 text-white border-gray-700">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white border-gray-700">
                {sizes.map((size) => (
                  <SelectItem key={size} value={size} className="hover:bg-gray-700">
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section - Image Carousel and Description */}
          <div className="md:w-1/2 space-y-6">
          <div className="relative h-[600px] rounded-lg overflow-hidden">
              {carouselImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentImageIndex === index ? 1 : 0,
                    transition: { duration: 0.1 }
                  }}
                >
                  <Image
                    src={image}
                    alt={`Category Image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-white">Series Description</h2>
              <p className="text-gray-300">
                Professional grade CNC machines designed for precision manufacturing and industrial applications.
              </p>
            </div>

            {upgradeNote && (
              <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg font-semibold text-white">{upgradeNote}</p>
              </div>
            )}
          </div>

          {/* Right Section - Product Cards */}
          <div className="md:w-1/2">
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${category}/${product.id}`}
                  className="block transition-transform hover:scale-[1.02]"
                >
                  <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750">
                    <div className="flex items-center p-4">
                      <div className="relative w-32 h-32 flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                        <p className="text-gray-400 mt-2">{product.description}</p>
                        <p className="text-sm text-gray-500 mt-2">Size: {product.size}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}