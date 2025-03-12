import ProductCategoryClient from './ProductCategoryClient';

export function generateStaticParams() {
  return [
    { category: '3-axis-cnc' },
    { category: '4-axis-cnc' },
    { category: '2-in-1-cnc' },
    { category: 'pcb-cnc' },
    { category: 'mega-series'},
    { category: 'majestic-series'},
    { category: 'meteor-series'},
  ];
}

export default function ProductCategory({ params }: { params: { category: string } }) {
  return <ProductCategoryClient category={params.category} />;
}