"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
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
  '900x600mm',
  '1200x900mm',
  '1520x900mm'
];

const products = {
  '3-axis-cnc': [
    {
      name: 'CNC Router 3040',
      description: 'Compact 3-axis CNC router perfect for small workshops',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '400x300mm'
    },
    {
      name: 'CNC Mill 6040',
      description: 'Professional grade 3-axis CNC milling machine',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '600x400mm'
    },
  ],
  '4-axis-cnc': [
    {
      name: '4-Axis Router Pro',
      description: 'Advanced 4-axis CNC router with rotary axis',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '900x600mm'
    },
  ],
  '2-in-1-cnc': [
    {
      name: 'CNC Router 3040',
      description: 'Compact 3-axis CNC router perfect for small workshops',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '400x300mm'
    },
    {
      name: 'CNC Mill 6040',
      description: 'Professional grade 3-axis CNC milling machine',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '600x400mm'
    },
  ],
  'pcb-cnc': [
    {
      name: 'PCB Prototyping Machine',
      description: 'Precision CNC for PCB manufacturing',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      size: '400x300mm'
    },
  ]
};

const categoryTitles: Record<string, string> = {
  '3-axis-cnc': '3-Axis CNC Machines',
  '4-axis-cnc': '4-Axis CNC Machines',
  '2-in-1-cnc': '2-in-1 CNC Machines',
  'pcb-cnc': 'PCB CNC Machines'
};

export default function ProductCategory({ params }: { params: { category: string } }) {
  const [selectedSize, setSelectedSize] = useState('All sizes');
  const categoryProducts = products[params.category] || [];
  
  const filteredProducts = selectedSize === 'All sizes'
    ? categoryProducts
    : categoryProducts.filter(product => product.size === selectedSize);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">
            {categoryTitles[params.category] || 'Unknown Category'}
          </h1>
          
          <div className="w-full md:w-64">
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-full">
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
            {filteredProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden">
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
                  <p className="text-sm text-gray-500 mt-2">Size: {product.size}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
