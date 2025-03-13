import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/support">Support</Link></li>
              <li><Link href="/store">Store</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/resources">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/warranty">Warranty</Link></li>
              <li><Link href="/shipping">Shipping Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="https://www.facebook.com/akritisystems/" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://x.com/AkritiSystems" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/akritisystems/" className="hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/akriti-precision-systems/" className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://www.youtube.com/@akritisystems" className="hover:text-blue-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
    
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 Akriti Precision Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}