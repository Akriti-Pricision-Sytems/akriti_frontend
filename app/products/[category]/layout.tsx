export function generateStaticParams() {
    const products = {
      '3-axis-cnc': [],
      '4-axis-cnc': [],
      '2-in-1-cnc': [],
      'pcb-cnc': []
    };
  
    return Object.keys(products).map((category) => ({
      category,
    }));
  }
  
  export default function CategoryLayout({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  }
  