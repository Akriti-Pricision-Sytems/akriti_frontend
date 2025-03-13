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