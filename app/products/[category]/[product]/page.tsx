import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return [
    // 3-Axis CNC
    { category: '3-axis-cnc', product: 'meteor-3-axis' },
    { category: '3-axis-cnc', product: 'majestic-3-axis' },
    { category: '3-axis-cnc', product: 'mega-3-axis' },
    
    // 4-Axis CNC
    { category: '4-axis-cnc', product: 'majestic-4-axis' },
    { category: '4-axis-cnc', product: 'mega-4-axis' },
    
    // 2-in-1 CNC
    { category: '2-in-1-cnc', product: 'meteor-2-in-1' },
    
    // PCB CNC
    { category: 'pcb-cnc', product: 'pcb-prototyping-machine' },

    //Majestic
    { category: 'majestic-series', product: 'majestic-3-axis'},
    { category: 'majestic-series', product: 'majestic-4-axis'},  

    //Meteor
    { category: 'meteor-series', product: 'meteor-3-axis'},
    { category: 'meteor-series', product: 'meteor-2-in-1'},

    //Mega
    { category: 'mega-series', product: 'mega-3-axis'},
    { category: 'mega-series', product: 'mega-4-axis'},
  ];
}

export default function ProductDetail({ params }: { params: { category: string; product: string } }) {
  return <ProductDetailClient category={params.category} product={params.product} />;
}