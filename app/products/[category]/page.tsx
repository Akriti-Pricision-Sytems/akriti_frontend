import ProductCategoryClient from './ProductCategoryClient';

export function generateStaticParams() {
  return [
    { category: 'meteor-series'},
    { category: 'majestic-series'},
    { category: 'pcb-precision-pro'},
    { category: 'special-purpose'},
    { category: 'engineering-composites'}

  ];
}

export default function ProductCategory({ params }: { params: { category: string } }) {
  return <ProductCategoryClient category={params.category} />;
}