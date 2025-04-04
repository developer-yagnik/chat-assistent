
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 glass-card backdrop-blur-md z-50">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-400">
          <span className="text-white text-lg">✦</span>
        </div>
        <h1 className="text-white text-xl font-semibold">Kulikėun</h1>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <div className="flex items-center text-white/90 hover:text-white cursor-pointer">
          <span>Features</span>
          <ChevronDown className="ml-1 h-4 w-4" />
        </div>
        <span className="text-white/90 hover:text-white cursor-pointer">How it works</span>
        <span className="text-white/90 hover:text-white cursor-pointer">Pricing</span>
        <span className="text-white/90 hover:text-white cursor-pointer">Blog</span>
        <span className="text-white/90 hover:text-white cursor-pointer">Contact</span>
      </div>

      <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-6 hover:opacity-90 transition-opacity">
        Get the app
      </Button>
    </nav>
  );
};

export default Navbar;
