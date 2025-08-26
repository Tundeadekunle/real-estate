// components/Header.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 shadow-sm bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-blue-900">🏠 ACEEstate</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-gray-700 relative">
        <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
        <a href="/about" className="hover:text-blue-600 transition-colors">About</a>
        
        {/* Properties Dropdown */}
        <div 
          className="relative" 
          ref={dropdownRef}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button 
            className="flex items-center hover:text-blue-600 focus:outline-none cursor-pointer select-none transition-colors"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Properties
            <svg 
              className={`w-4 h-4 ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {dropdownOpen && (
            <div 
              className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md py-2 z-50 border border-gray-200"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a
                href="/properties/housing"
                className="block px-4 py-2 hover:bg-blue-50 text-gray-700 transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                Housing
              </a>
              <a
                href="/properties/lands"
                className="block px-4 py-2 hover:bg-blue-50 text-gray-700 transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                Lands
              </a>
            </div>
          )}
        </div>

        <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
      </nav>

      {/* CTA Button (Desktop only) */}
      <button className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
        Get Started
      </button>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-6 md:hidden z-50">
          <a href="/" className="py-2 w-full hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/about" className="py-2 w-full hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>About</a>
          
          {/* Mobile Properties Dropdown */}
          <div className="w-full">
            <button 
              className="flex items-center justify-between w-full py-2 hover:text-blue-600 transition-colors"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Properties
              <svg 
                className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {mobileDropdownOpen && (
              <div className="pl-4 mt-2 w-full border-l-2 border-blue-100">
                <a
                  href="/properties/housing"
                  className="block py-2 hover:text-blue-600 text-gray-700 transition-colors"
                  onClick={() => {
                    setMobileDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Housing
                </a>
                <a
                  href="/properties/lands"
                  className="block py-2 hover:text-blue-600 text-gray-700 transition-colors"
                  onClick={() => {
                    setMobileDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Lands
                </a>
              </div>
            )}
          </div>
          
          <a href="/contact" className="py-2 w-full hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors w-full">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}