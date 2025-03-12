'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
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
  '800x500mm',
  '900x600mm',
  '1200x900mm',
  '1520x900mm'
];

const products = {
  '3-axis-cnc': [
    {
      id: 'meteor-3-axis',
      name: 'Meteor 3-Axis CNC',
      description: 'High-speed precision 3-axis CNC machining system',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '600x400mm'
    },
    {
      id: 'majestic-3-axis',
      name: 'Majestic 3-Axis CNC',
      description: 'Industrial-grade 3-axis CNC system for demanding applications',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '900x600mm'
    },
    {
      id: 'mega-3-axis',
      name: 'Mega 3-Axis CNC',
      description: 'Large format 3-axis CNC for industrial production',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '1520x900mm'
    }
  ],
  '4-axis-cnc': [
    {
      id: 'majestic-4-axis',
      name: 'Majestic 4-Axis CNC',
      description: 'Advanced 4-axis CNC system with superior precision',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '1200x900mm'
    },
    {
      id: 'mega-4-axis',
      name: 'Mega 4-Axis CNC',
      description: 'Heavy-duty 4-axis CNC system for large-scale manufacturing',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '1520x900mm'
    }
  ],
  '2-in-1-cnc': [
    {
      id: 'meteor-2-in-1',
      name: 'Meteor 2-in-1 CNC',
      description: 'Versatile 2-in-1 CNC machine combining milling and routing capabilities',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '800x500mm'
    }
  ],
  'pcb-cnc': [
    {
      id: 'pcb-prototyping-machine',
      name: 'PCB Prototyping Machine',
      description: 'Precision CNC for PCB manufacturing',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '400x300mm'
    }
  ],
  'mega-series': [
        {
      id: 'mega-3-axis',
      name: 'Mega 3-Axis CNC',
      description: 'Large format 3-axis CNC for industrial production',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '1520x900mm'
    },
    {
      id: 'mega-4-axis',
      name: 'Mega 4-Axis CNC',
      description: 'Heavy-duty 4-axis CNC system for large-scale manufacturing',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '1520x900mm'
    }
  ],
  'majestic-series': [
    {
      id: 'majestic-3-axis',
      name: 'Majestic 3-Axis CNC',
      description: 'Industrial-grade 3-axis CNC system for demanding applications',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '900x600mm'
    },
    {
      id: 'majestic-4-axis',
      name: 'Majestic 4-Axis CNC',
      description: 'Advanced 4-axis CNC system with superior precision',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '1200x900mm'
    }
  ],
  'meteor-series': [
     {
      id: 'meteor-3-axis',
      name: 'Meteor 3-Axis CNC',
      description: 'High-speed precision 3-axis CNC machining system',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '600x400mm'
    },
    {
      id: 'meteor-2-in-1',
      name: 'Meteor 2-in-1 CNC',
      description: 'Versatile 2-in-1 CNC machine combining milling and routing capabilities',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '800x500mm'
    }
  ]
};

const categoryTitles = {
  '3-axis-cnc': '3-Axis CNC Machines',
  '4-axis-cnc': '4-Axis CNC Machines',
  '2-in-1-cnc': '2-in-1 CNC Machines',
  'pcb-cnc': 'PCB CNC Machines',
  'mega-series': 'Mega Series CNC Machines',
  'majestic-series': 'Majestic Series CNC Machines',
  'meteor-series': 'Meteor Series CNC Machines'
};

export default function ProductCategoryClient({ category }: { category: string }) {
  const [selectedSize, setSelectedSize] = useState('All sizes');
  const categoryProducts = products[category as keyof typeof products] || [];
  
  const filteredProducts = categoryProducts.filter(product => {
    return selectedSize === 'All sizes' || product.size === selectedSize;
  });

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">
            {categoryTitles[category as keyof typeof categoryTitles]}
          </h1>
          
          <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                {sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found for the selected size.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${category}/${product.id}`}
                className="transition-transform hover:scale-105"
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-sm text-gray-500 mt-4">Size: {product.size}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}