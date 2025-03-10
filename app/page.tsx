'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import LocationMap from '@/components/LocationMap';
import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isAutoScrolling) return;

    const cardWidth = 300 + 16; // Card width (300px) + margin (2 * 4px from mx-4 converted to 16px)
    const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const scroll = () => {
      const currentPosition = scrollContainer.scrollLeft;
      if (currentPosition >= scrollWidth - 10) { // Near the end
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' }); // Reset to start
      } else {
        scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' }); // Move by one card
      }
    };

    const interval = setInterval(scroll, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount or when isAutoScrolling changes
  }, [isAutoScrolling]);

  // Manual scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false); // Pause auto-scroll
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setTimeout(() => setIsAutoScrolling(true), 5000); // Resume after 5 seconds
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false); // Pause auto-scroll
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setTimeout(() => setIsAutoScrolling(true), 5000); // Resume after 5 seconds
    }
  };

  // Handle user scroll wheel interaction
  const handleUserScroll = () => {
    setIsAutoScrolling(false); // Pause auto-scroll
    setTimeout(() => setIsAutoScrolling(true), 5000); // Resume after 5 seconds
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="CNC Machine"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Precision CNC Machining for Your Needs
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Welcome to Akriti Precision Systems, where quality meets innovation in 
            CNC technology. Our advanced technology and engineering expertise ensure you 
            receive the best manufacturing solutions.
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">Explore</Button>
            <Button size="lg" variant="secondary">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">
      Discover the Unmatched Precision of Our CNC Machines
    </h2>
    
    <div className="relative">
      {/* Scroll buttons */}
      <button 
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all disabled:opacity-50"
        disabled={scrollRef.current?.scrollLeft === 0}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all disabled:opacity-50"
        disabled={scrollRef.current?.scrollLeft >= 
          (scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth - 10)}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Scrollable container */}
      <div 
        ref={scrollRef}
        onWheel={handleUserScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ 
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          overscrollBehaviorX: 'contain'
        }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }} // Changed from whileInView to animate
            transition={{ duration: 0.5 }} // Removed index-based delay
            className="bg-white p-6 rounded-lg shadow-lg min-w-[300px] max-w-[300px] mx-4 snap-start flex-shrink-0"
          >
            <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Unmatched Manufacturing Excellence and Reach
              </h2>
              <p className="text-gray-600 mb-8">
                At Akriti Precision Systems, we pride ourselves on our advanced CNC 
                manufacturing capabilities, designed to optimize performance and meet 
                the diverse needs of our clients.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-600">80%</div>
                  <p className="text-gray-600">Increase in production efficiency over the past year</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">95%</div>
                  <p className="text-gray-600">Customer satisfaction rating based on recent surveys</p>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="CNC Manufacturing"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Global Presence</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {locations.map((location) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                  <p className="text-gray-600">{location.address}</p>
                </motion.div>
              ))}
            </div>
            <LocationMap />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Get Your Custom CNC Quote
          </h2>
          <p className="text-xl mb-8">
            Tell us about your project requirements, and we'll provide a detailed quote.
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">Quote</Button>
            <Button size="lg" variant="secondary">Contact</Button>
          </div>
        </div>
      </section>
    </div>
  );
}


const features = [
  {
    title: 'Innovative Engineering',
    description: 'Our portfolio boasts state-of-the-art 3 and 4-axis CNC machines, meticulously designed to handle the most challenging tasks with unparalleled accuracy. From compact models perfect for small enterprises to robust machines for industrial demands, our range is diverse and dynamic',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
  {
    title: 'Supirior Components',
    description: ' At the heart of our machines lies the pioneering use of composite superstructures, ensuring unmatched durability with a lifetime guarantee. Comprising 75% indigenous components, we champion local craftsmanship complemented by globally sourced parts renowned for their precision.',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Unmatched Precision',
    description: 'Akriti CNC machines promise repeat positioning accuracy within 50 microns, with options for further precision enhancements up to 3.5 microns. This exceptional accuracy is vital for industries where perfection is not just desired but required.',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Reliability Certified',
    description: 'Our machines are not only designed for precision but also for endurance. Tested rigorously for non-stop operation, they stand as a testament to our promise of reliability, ready to deliver 24/7 without faltering.',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
  {
    title: 'Customized Solutions',
    description: 'Understanding that each client’s needs are unique, we offer an extensive selection of accessories and the capability to craft bespoke solutions. Our approach ensures that you receive a comprehensive system that integrates flawlessly with your operations.',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
];

const locations = [
  {
    name: 'Sydney',
    address: '123 Smith St, Sydney NSW 2000 AU',
  },
  {
    name: 'New York',
    address: '123 Spring St, New York NY 10012 USA',
  }
];