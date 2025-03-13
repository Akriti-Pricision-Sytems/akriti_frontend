import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return [

    //Meteor
    { category: 'meteor-series', product: 'meteor-1hp'},
    { category: 'meteor-series', product: 'meteor-1.5hp'},
    { category: 'meteor-series', product: 'meteor-3hp'},
    //Majestic
    { category: 'majestic-series', product: 'majestic-6040'},
    { category: 'majestic-series', product: 'majestic-9060'},  
    { category: 'majestic-series', product: 'majestic-1290'},  
    // PCB CNC
    { category: 'pcb-precision-pro', product: 'pcb-single-spindle' },
    { category: 'pcb-precision-pro', product: 'pcb-double-spindle' },
  ];
}

export default function ProductDetail({ params }: { params: { category: string; product: string } }) {
  return <ProductDetailClient category={params.category} product={params.product} />;
}