'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, PenTool as Tool, Settings, Shield, Package, Cpu, Wrench } from 'lucide-react';

const productDetails = {
  'meteor-series': {
    'meteor-1hp': {
      name: 'Meteor 1 HP Spindle CNC',
      description: 'Compact 3-axis CNC router perfect for small workshops',
      images: [
        'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      size: '400x300mm',
      price: '$2,999',
      features: [
        'High-precision stepper motors',
        'Aluminum T-slot work table',
        'Emergency stop button',
        'Dust collection system'
      ],
      specifications: {
        'Working Area': '300 x 400 x 100mm',
        'Spindle Speed': '12,000 RPM',
        'Power': '800W',
        'Interface': 'USB/Parallel',
        'Software': 'Mach3/NCStudio'
      },
      applications: [
        'Wood carving',
        'Plastic engraving',
        'Soft metal machining',
        'Sign making'
      ],
      included: [
        'Complete CNC machine assembly',
        'Control box with emergency stop',
        'Stepper motors and drivers',
        'Power supply unit',
        'USB cable and parallel port cable',
        'Basic tooling starter kit',
        'Dust collection attachments',
        'User manual and software CD'
      ],
      controller: {
        name: 'Mach3 Compatible Controller',
        features: [
          'USB and parallel port connectivity',
          'Real-time motion control',
          'Built-in safety features',
          'Support for G-code and M-code',
          'Customizable macro functions',
          'Emergency stop integration'
        ],
        specifications: {
          'Processor': 'ARM Cortex-M4',
          'Interface': 'USB 2.0/Parallel',
          'Axis Support': '3-axis simultaneous',
          'Input Voltage': '24V DC',
          'Display': 'LCD status screen'
        }
      },
      upgrades: [
        {
          name: '4th Axis Rotary',
          description: 'Add rotary capabilities for cylindrical work',
          price: '$799'
        },
        {
          name: 'Automatic Tool Changer',
          description: '4-position tool carousel',
          price: '$1,299'
        },
        {
          name: 'Vacuum Table System',
          description: 'Enhanced workpiece holding',
          price: '$499'
        }
      ],
      accessories: [
        {
          name: 'Premium Tooling Kit',
          description: 'Set of high-quality end mills and bits',
          price: '$299'
        },
        {
          name: 'Dust Boot',
          description: 'Advanced dust collection system',
          price: '$149'
        },
        {
          name: 'Probe Kit',
          description: 'Tool length and surface detection',
          price: '$199'
        }
      ]
    },
     'meteor-1.5hp': {
      name: 'Meteor 1.5 HP Spindle CNC',
      description: 'Versatile 2-in-1 CNC machine combining milling and routing capabilities',
      images: [
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      size: '400x300mm',
      price: '$8,999',
      features: [
        'Dual spindle system',
        'Automatic tool changing',
        'Heavy-duty steel frame',
        'Advanced cooling system',
        'Quick-change work holding'
      ],
      specifications: {
        'Working Area': '800 x 500 x 200mm',
        'Milling Spindle': '24,000 RPM, 2.2kW',
        'Router Spindle': '18,000 RPM, 3.0kW',
        'Tool Positions': '12 ATC positions',
        'Software': 'Mach4/Fusion 360'
      },
      applications: [
        'Metal milling',
        'Wood routing',
        'Plastic fabrication',
        'Aluminum machining',
        'Sign making',
        'Prototype development'
      ],
      included: [
        'Complete machine assembly',
        'Dual spindle system',
        '12-position tool changer',
        'Advanced control system',
        'Coolant and mist systems',
        'Professional tool package',
        'Work holding kit',
        'Training and support'
      ],
      controller: {
        name: 'Advanced Hybrid Controller',
        features: [
          'Dual spindle control',
          'Automatic tool management',
          'Advanced path planning',
          'Real-time monitoring',
          'Network connectivity',
          'Custom macro support',
          'Tool life tracking'
        ],
        specifications: {
          'Processor': 'Intel i5 Industrial',
          'Interface': 'Ethernet/USB 3.0',
          'Memory': '16GB DDR4',
          'Storage': '256GB SSD',
          'Display': '19" Touch Screen'
        }
      },
      upgrades: [
        {
          name: '4th Axis Package',
          description: 'Add rotary capabilities',
          price: '$2,999'
        },
        {
          name: 'Extended ATC',
          description: '24-position tool carousel',
          price: '$3,499'
        },
        {
          name: 'Advanced Probing',
          description: 'Multi-axis probing system',
          price: '$1,999'
        }
      ],
      accessories: [
        {
          name: 'Premium Tool Package',
          description: 'Comprehensive tooling set',
          price: '$1,499'
        },
        {
          name: 'Pro Workholding Kit',
          description: 'Advanced clamping system',
          price: '$999'
        },
        {
          name: 'CAD/CAM Bundle',
          description: 'Professional software suite',
          price: '$2,499'
        }
      ]
    
    },
    'meteor-3hp': {
      name: 'Meteor 3 HP Spindle CNC',
      description: 'Versatile 2-in-1 CNC machine combining milling and routing capabilities',
      images: [
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      size: '400x300mm',
      price: '$8,999',
      features: [
        'Dual spindle system',
        'Automatic tool changing',
        'Heavy-duty steel frame',
        'Advanced cooling system',
        'Quick-change work holding'
      ],
      specifications: {
        'Working Area': '800 x 500 x 200mm',
        'Milling Spindle': '24,000 RPM, 2.2kW',
        'Router Spindle': '18,000 RPM, 3.0kW',
        'Tool Positions': '12 ATC positions',
        'Software': 'Mach4/Fusion 360'
      },
      applications: [
        'Metal milling',
        'Wood routing',
        'Plastic fabrication',
        'Aluminum machining',
        'Sign making',
        'Prototype development'
      ],
      included: [
        'Complete machine assembly',
        'Dual spindle system',
        '12-position tool changer',
        'Advanced control system',
        'Coolant and mist systems',
        'Professional tool package',
        'Work holding kit',
        'Training and support'
      ],
      controller: {
        name: 'Advanced Hybrid Controller',
        features: [
          'Dual spindle control',
          'Automatic tool management',
          'Advanced path planning',
          'Real-time monitoring',
          'Network connectivity',
          'Custom macro support',
          'Tool life tracking'
        ],
        specifications: {
          'Processor': 'Intel i5 Industrial',
          'Interface': 'Ethernet/USB 3.0',
          'Memory': '16GB DDR4',
          'Storage': '256GB SSD',
          'Display': '19" Touch Screen'
        }
      },
      upgrades: [
        {
          name: '4th Axis Package',
          description: 'Add rotary capabilities',
          price: '$2,999'
        },
        {
          name: 'Extended ATC',
          description: '24-position tool carousel',
          price: '$3,499'
        },
        {
          name: 'Advanced Probing',
          description: 'Multi-axis probing system',
          price: '$1,999'
        }
      ],
      accessories: [
        {
          name: 'Premium Tool Package',
          description: 'Comprehensive tooling set',
          price: '$1,499'
        },
        {
          name: 'Pro Workholding Kit',
          description: 'Advanced clamping system',
          price: '$999'
        },
        {
          name: 'CAD/CAM Bundle',
          description: 'Professional software suite',
          price: '$2,499'
        }
      ]
    
    }
  },
  'majestic-series':{
    'majestic-6040': {
      name: 'Majestic 6040',
      description: 'Professional grade 3-axis CNC milling machine',
      images: [
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      size: '600x400mm',
      price: '$4,999',
      features: [
        'Heavy-duty ball screws',
        'Cast iron frame construction',
        'Precision linear guides',
        'Integrated coolant system'
      ],
      specifications: {
        'Working Area': '600 x 400 x 150mm',
        'Spindle Speed': '24,000 RPM',
        'Power': '2.2kW',
        'Interface': 'USB/Ethernet',
        'Software': 'Mach3/LinuxCNC'
      },
      applications: [
        'Metal milling',
        'Precision parts manufacturing',
        'Industrial prototyping',
        'Tool making'
      ],
      included: [
        'Complete mill assembly',
        'Industrial control cabinet',
        'Servo motors and drivers',
        'Coolant system',
        'Tool holders and collets',
        'Professional tooling kit',
        'Setup and calibration tools',
        'Comprehensive documentation'
      ],
      controller: {
        name: 'Industrial Grade Controller',
        features: [
          'Ethernet connectivity',
          'Advanced motion planning',
          'Tool compensation',
          'Multiple coordinate systems',
          'Custom macro support',
          'Network integration'
        ],
        specifications: {
          'Processor': 'Intel Industrial CPU',
          'Interface': 'USB 3.0/Ethernet',
          'Axis Support': '4-axis ready',
          'Input Voltage': '220V AC',
          'Display': '15" Touch Screen'
        }
      },
      upgrades: [
        {
          name: 'Automatic Tool Changer',
          description: '8-position carousel system',
          price: '$2,499'
        },
        {
          name: '4th Axis Package',
          description: 'Complete rotary axis system',
          price: '$1,999'
        },
        {
          name: 'Mist Coolant System',
          description: 'Advanced cooling solution',
          price: '$799'
        }
      ],
      accessories: [
        {
          name: 'Professional Tool Set',
          description: 'Complete milling tool package',
          price: '$599'
        },
        {
          name: 'Workholding Package',
          description: 'Professional vise and clamps',
          price: '$449'
        },
        {
          name: 'Measurement Kit',
          description: 'Digital probes and gauges',
          price: '$349'
        }
      ]
    },
    'majestic-9060': {
      name: 'Majestic 9060',
      description: 'Advanced 4-axis CNC router with rotary capabilities',
      images: [
        'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      size: '900x600mm',
      price: '$7,999',
      features: [
        'Integrated 4th axis rotary',
        'High-torque servo motors',
        'Advanced motion control',
        'Industrial-grade construction'
      ],
      specifications: {
        'Working Area': '900 x 600 x 200mm',
        'Rotary Capacity': '200mm diameter',
        'Spindle Speed': '24,000 RPM',
        'Power': '3.0kW',
        'Software': 'Mach4/PowerMill'
      },
      applications: [
        'Cylindrical engraving',
        '3D carving',
        'Furniture making',
        'Custom millwork'
      ],
      included: [
        'Complete 4-axis system',
        'Rotary axis unit',
        'Servo motor package',
        'Advanced control system',
        'Professional software suite',
        'Comprehensive tooling kit',
        'Training materials',
        'Technical support package'
      ],
      controller: {
        name: 'Advanced 4-Axis Controller',
        features: [
          'Multi-axis synchronization',
          'Advanced interpolation',
          'Real-time monitoring',
          'Network connectivity',
          'Custom macro support',
          'Remote operation capability'
        ],
        specifications: {
          'Processor': 'Dual-Core Industrial',
          'Interface': 'Ethernet/USB 3.0',
          'Axis Support': '4-axis simultaneous',
          'Input Voltage': '220V AC',
          'Display': '17" Industrial Touch'
        }
      },
      upgrades: [
        {
          name: '5th Axis Package',
          description: 'Add full 5-axis capability',
          price: '$4,999'
        },
        {
          name: 'Auto Tool Measurement',
          description: 'Automatic tool setting system',
          price: '$1,499'
        },
        {
          name: 'Advanced Cooling',
          description: 'High-pressure coolant system',
          price: '$999'
        }
      ],
      accessories: [
        {
          name: 'Rotary Chuck Set',
          description: 'Professional chuck package',
          price: '$799'
        },
        {
          name: 'Advanced Tooling Kit',
          description: 'Specialized 4-axis tools',
          price: '$599'
        },
        {
          name: 'CAD/CAM Package',
          description: 'Professional software suite',
          price: '$1,999'
        }
      ]
    },
    'majestic-1290': {
      name: 'Majestic 1290',
      description: 'Advanced 4-axis CNC router with rotary capabilities',
      images: [
        'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      size: '1200x900mm',
      price: '$7,999',
      features: [
        'Integrated 4th axis rotary',
        'High-torque servo motors',
        'Advanced motion control',
        'Industrial-grade construction'
      ],
      specifications: {
        'Working Area': '900 x 600 x 200mm',
        'Rotary Capacity': '200mm diameter',
        'Spindle Speed': '24,000 RPM',
        'Power': '3.0kW',
        'Software': 'Mach4/PowerMill'
      },
      applications: [
        'Cylindrical engraving',
        '3D carving',
        'Furniture making',
        'Custom millwork'
      ],
      included: [
        'Complete 4-axis system',
        'Rotary axis unit',
        'Servo motor package',
        'Advanced control system',
        'Professional software suite',
        'Comprehensive tooling kit',
        'Training materials',
        'Technical support package'
      ],
      controller: {
        name: 'Advanced 4-Axis Controller',
        features: [
          'Multi-axis synchronization',
          'Advanced interpolation',
          'Real-time monitoring',
          'Network connectivity',
          'Custom macro support',
          'Remote operation capability'
        ],
        specifications: {
          'Processor': 'Dual-Core Industrial',
          'Interface': 'Ethernet/USB 3.0',
          'Axis Support': '4-axis simultaneous',
          'Input Voltage': '220V AC',
          'Display': '17" Industrial Touch'
        }
      },
      upgrades: [
        {
          name: '5th Axis Package',
          description: 'Add full 5-axis capability',
          price: '$4,999'
        },
        {
          name: 'Auto Tool Measurement',
          description: 'Automatic tool setting system',
          price: '$1,499'
        },
        {
          name: 'Advanced Cooling',
          description: 'High-pressure coolant system',
          price: '$999'
        }
      ],
      accessories: [
        {
          name: 'Rotary Chuck Set',
          description: 'Professional chuck package',
          price: '$799'
        },
        {
          name: 'Advanced Tooling Kit',
          description: 'Specialized 4-axis tools',
          price: '$599'
        },
        {
          name: 'CAD/CAM Package',
          description: 'Professional software suite',
          price: '$1,999'
        }
      ]
    }
  },
  'pcb-precision-pro': {
    'pcb-single-spindle': {
      name: 'PCB precision pro - Single spindle',
      description: 'High-precision CNC for PCB manufacturing',
      images: [
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      size: '600x500mm',
      price: '$5,999',
      features: [
        'Ultra-high precision spindle',
        'Automatic tool change',
        'Depth control system',
        'Fiducial recognition'
      ],
      specifications: {
        'Working Area': '400 x 300mm',
        'Resolution': '0.1µm',
        'Spindle Speed': '60,000 RPM',
        'Tool Change': 'Automatic 8-position',
        'Software': 'CircuitCAM/BoardMaster'
      },
      applications: [
        'PCB prototyping',
        'Circuit board manufacturing',
        'SMT stencils',
        'Front panels'
      ],
      included: [
        'PCB processing machine',
        'Automatic tool changer',
        'Depth limiter system',
        'PCB software suite',
        'Starter tool kit',
        'Vacuum table',
        'Calibration tools',
        'Training package'
      ],
      controller: {
        name: 'Precision PCB Controller',
        features: [
          'Automatic depth control',
          'Fiducial recognition',
          'Tool wear monitoring',
          'Layer alignment',
          'Isolation routing',
          'Through-hole plating'
        ],
        specifications: {
          'Processor': 'High-speed DSP',
          'Interface': 'USB 3.0/Ethernet',
          'Resolution': '0.1µm',
          'Input Voltage': '110/220V AC',
          'Display': '10" Touch Screen'
        }
      },
      upgrades: [
        {
          name: 'Vision System',
          description: 'Advanced optical alignment',
          price: '$1,999'
        },
        {
          name: 'Vacuum System',
          description: 'Enhanced material holding',
          price: '$799'
        },
        {
          name: 'Dispensing Unit',
          description: 'Solder paste application',
          price: '$1,499'
        }
      ],
      accessories: [
        {
          name: 'PCB Tool Kit',
          description: 'Specialized routing bits',
          price: '$399'
        },
        {
          name: 'Material Package',
          description: 'Assorted PCB blanks',
          price: '$299'
        },
        {
          name: 'Software Bundle',
          description: 'Advanced PCB design suite',
          price: '$999'
        }
      ]
    },
    'pcb-double-spindle': {
      name: 'PCB precision pro - Double spindle',
      description: 'High-precision CNC for PCB manufacturing',
      images: [
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      size: '600x500mm',
      price: '$5,999',
      features: [
        'Ultra-high precision spindle',
        'Automatic tool change',
        'Depth control system',
        'Fiducial recognition'
      ],
      specifications: {
        'Working Area': '400 x 300mm',
        'Resolution': '0.1µm',
        'Spindle Speed': '60,000 RPM',
        'Tool Change': 'Automatic 8-position',
        'Software': 'CircuitCAM/BoardMaster'
      },
      applications: [
        'PCB prototyping',
        'Circuit board manufacturing',
        'SMT stencils',
        'Front panels'
      ],
      included: [
        'PCB processing machine',
        'Automatic tool changer',
        'Depth limiter system',
        'PCB software suite',
        'Starter tool kit',
        'Vacuum table',
        'Calibration tools',
        'Training package'
      ],
      controller: {
        name: 'Precision PCB Controller',
        features: [
          'Automatic depth control',
          'Fiducial recognition',
          'Tool wear monitoring',
          'Layer alignment',
          'Isolation routing',
          'Through-hole plating'
        ],
        specifications: {
          'Processor': 'High-speed DSP',
          'Interface': 'USB 3.0/Ethernet',
          'Resolution': '0.1µm',
          'Input Voltage': '110/220V AC',
          'Display': '10" Touch Screen'
        }
      },
      upgrades: [
        {
          name: 'Vision System',
          description: 'Advanced optical alignment',
          price: '$1,999'
        },
        {
          name: 'Vacuum System',
          description: 'Enhanced material holding',
          price: '$799'
        },
        {
          name: 'Dispensing Unit',
          description: 'Solder paste application',
          price: '$1,499'
        }
      ],
      accessories: [
        {
          name: 'PCB Tool Kit',
          description: 'Specialized routing bits',
          price: '$399'
        },
        {
          name: 'Material Package',
          description: 'Assorted PCB blanks',
          price: '$299'
        },
        {
          name: 'Software Bundle',
          description: 'Advanced PCB design suite',
          price: '$999'
        }
      ]
    }
  },
};

export default function ProductDetailClient({ category, product }: { category: string; product: string }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });
  
  const productData =
    productDetails[category as keyof typeof productDetails]?.[
      product as keyof (typeof productDetails)[keyof typeof productDetails]
    ];
  
  if (!productData) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <div ref={sliderRef} className="keen-slider h-full">
              {productData.images.map((image, idx) => (
                <div key={idx} className="keen-slider__slide relative">
                  <Image
                    src={image}
                    alt={`${productData.name} - View ${idx + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {productData.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === idx ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold">{productData.name}</h1>
            <p className="text-2xl font-bold text-blue-600">{productData.price}</p>
            <p className="text-gray-600">{productData.description}</p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Key Features:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {productData.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="w-full md:w-auto">Request Quote</Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="specifications">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="specifications">
                <Settings className="h-5 w-5 mr-2" />
                Specifications
              </TabsTrigger>
              <TabsTrigger value="applications">
                <Tool className="h-5 w-5 mr-2" />
                Applications
              </TabsTrigger>
              <TabsTrigger value="included">
                <Package className="h-5 w-5 mr-2" />
                What's Included
              </TabsTrigger>
              <TabsTrigger value="controller">
                <Cpu className="h-5 w-5 mr-2" />
                Controller
              </TabsTrigger>
              <TabsTrigger value="upgrades">
                <Wrench className="h-5 w-5 mr-2" />
                Upgrades
              </TabsTrigger>
              <TabsTrigger value="warranty">
                <Shield className="h-5 w-5 mr-2" />
                Warranty
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(productData.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b pb-2">
                        <span className="font-medium">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="applications">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {productData.applications.map((application, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>{application}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="included">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {productData.included.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Package className="h-5 w-5 text-blue-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="controller">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">{productData.controller.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {productData.controller.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Cpu className="h-5 w-5 text-blue-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Controller Specifications</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(productData.controller.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between border-b pb-2">
                            <span className="font-medium">{key}:</span>
                            <span className="text-gray-600">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upgrades">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Available Upgrades</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {productData.upgrades.map((upgrade, index) => (
                          <Card key={index}>
                            <CardHeader>
                              <CardTitle className="text-lg">{upgrade.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 mb-4">{upgrade.description}</p>
                              <p className="font-semibold text-blue-600">{upgrade.price}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Optional Accessories</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {productData.accessories.map((accessory, index) => (
                          <Card key={index}>
                            <CardHeader>
                              <CardTitle className="text-lg">{accessory.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 mb-4">{accessory.description}</p>
                              <p className="font-semibold text-blue-600">{accessory.price}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="warranty">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Standard Warranty</h3>
                    <p>12-month warranty covering:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Manufacturing defects</li>
                      <li>Electronic components</li>
                      <li>Mechanical parts</li>
                      <li>Software support</li>
                    </ul>
                    <p>Extended warranty options available.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}