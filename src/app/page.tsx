

// "use client";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const slideInterval = useRef<NodeJS.Timeout>();

//   const slides = [
//     {
//       src: "/house2.jpg",
//       alt: "Luxury Home",
//     },
//     {
//       src: "/house6.jpg",
//       alt: "Modern Villa",
//     },
//     {
//       src: "/house3.jpg",
//       alt: "Country House",
//     },
//   ];

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Auto slide functionality
//   useEffect(() => {
//     const startSlideShow = () => {
//       slideInterval.current = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 5000);
//     };

//     const stopSlideShow = () => {
//       if (slideInterval.current) {
//         clearInterval(slideInterval.current);
//       }
//     };

//     startSlideShow();

//     // Clean up on component unmount
//     return () => stopSlideShow();
//   }, [slides.length]);

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const goToPrevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div>
//       {/* Sticky Navbar */}
//       <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 shadow-sm bg-white">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <span className="text-2xl font-bold text-blue-900">🏠 ACEEstate</span>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 text-gray-700 relative">
//           <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
//           <a href="/about" className="hover:text-blue-600 transition-colors">About</a>
          
//           {/* Properties Dropdown */}
//           <div 
//             className="relative" 
//             ref={dropdownRef}
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <button 
//               className="flex items-center hover:text-green-600 focus:outline-none cursor-pointer select-none transition-colors"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             >
//               Properties
//               <svg 
//                 className={`w-4 h-4 ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
            
//             {dropdownOpen && (
//               <div 
//                 className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md py-2 z-50 border border-gray-200"
//                 onMouseEnter={() => setDropdownOpen(true)}
//                 onMouseLeave={() => setDropdownOpen(false)}
//               >
//                 <a
//                   href="/properties/housing"
//                   className="block px-4 py-2 hover:bg-blue-50 text-gray-700 transition-colors"
//                   onClick={() => setDropdownOpen(false)}
//                 >
//                   Housing
//                 </a>
//                 <a
//                   href="/properties/lands"
//                   className="block px-4 py-2 hover:bg-blue-50 text-gray-700 transition-colors"
//                   onClick={() => setDropdownOpen(false)}
//                 >
//                   Lands
//                 </a>
//               </div>
//             )}
//           </div>

//           <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
//         </nav>

//         {/* CTA Button (Desktop only) */}
//         <button className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
//           Get Started
//         </button>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-6 md:hidden z-50">
//             <a href="/" className="py-2 w-full hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
//             <a href="/about" className="py-2 w-full hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>About</a>
            
//             {/* Mobile Properties Dropdown */}
//             <div className="w-full">
//               <button 
//                 className="flex items-center justify-between w-full py-2 hover:text-blue-600 transition-colors"
//                 onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
//               >
//                 Properties
//                 <svg 
//                   className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
              
//               {mobileDropdownOpen && (
//                 <div className="pl-4 mt-2 w-full border-l-2 border-blue-100">
//                   <a
//                     href="/properties/housing"
//                     className="block py-2 hover:text-blue-600 text-gray-700 transition-colors"
//                     onClick={() => {
//                       setMobileDropdownOpen(false);
//                       setMenuOpen(false);
//                     }}
//                   >
//                     Housing
//                   </a>
//                   <a
//                     href="/properties/lands"
//                     className="block py-2 hover:text-blue-600 text-gray-700 transition-colors"
//                     onClick={() => {
//                       setMobileDropdownOpen(false);
//                       setMenuOpen(false);
//                     }}
//                   >
//                     Lands
//                   </a>
//                 </div>
//               )}
//             </div>
            
//             <a href="/contact" className="py-2 w-full hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
//             <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors w-full">
//               Get Started
//             </button>
//           </div>
//         )}
//       </header>

//       {/* Hero Section with Sliding Background */}
//       <section className="relative bg-gray-100 h-[500px] overflow-hidden">
//         {/* Slides */}
//         <div className="relative w-full h-full">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 index === currentSlide ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <img
//                 src={slide.src}
//                 alt={slide.alt}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-start">
//           <div className="container px-6 text-white max-w-2xl text-left">
            
//             {/* Animated Heading */}
//             <motion.h1
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="text-4xl md:text-5xl font-bold mb-4"
//             >
//               Find Your Dream Home
//             </motion.h1>

//             {/* Animated Paragraph */}
//             <motion.p
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
//               className="mb-6"
//             >
//               Discover the perfect property for your needs. From modern apartments to spacious family homes.
//             </motion.p>

//             {/* Animated Button */}
//             <motion.a
//               href="#"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
//               className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
//             >
//               Get Started
//             </motion.a>
//           </div>
//         </div>

//         {/* Slide Indicators */}
//         <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 index === currentSlide ? "bg-white" : "bg-white/50"
//               }`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white bg-black/30 p-2 rounded-full transition-colors"
//           onClick={goToPrevSlide}
//           aria-label="Previous slide"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//         <button
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white bg-black/30 p-2 rounded-full transition-colors"
//           onClick={goToNextSlide}
//           aria-label="Next slide"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </section>

//       {/* Featured Properties */}
//       <section className="px-6 md:px-12 py-16 bg-white">
//         <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Properties</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {/* Property 1 */}
//           <div className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
//             <Image
//               src="/house1.jpg"
//               alt="Property 1"
//               width={400}
//               height={300}
//               className="w-full h-60 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg md:text-xl font-semibold">₦10,500,000</h3>
//               <p className="text-gray-600">1234 Main St, Abeokuta, Ogun State, Nigeria</p>
//               <p className="text-gray-500 text-sm mt-2">
//                 Modern 3-bedroom apartment with stunning city views and amenities.
//               </p>
//             </div>
//           </div>

//           {/* Property 2 */}
//           <div className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
//             <Image
//               src="/house2.jpg"
//               alt="Property 2"
//               width={400}
//               height={300}
//               className="w-full h-60 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg md:text-xl font-semibold">₦12,750,000</h3>
//               <p className="text-gray-600">5678 Orange Ave, Abeokuta, Ogun State, Nigeria</p>
//               <p className="text-gray-500 text-sm mt-2">
//                 Spacious family home with large garden and outdoor entertainment area.
//               </p>
//             </div>
//           </div>

//           {/* Property 3 */}
//           <div className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
//             <Image
//               src="/house3.jpg"
//               alt="Property 3"
//               width={400}
//               height={300}
//               className="w-full h-60 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg md:text-xl font-semibold">₦78,250,000</h3>
//               <p className="text-gray-600">9101 Pine Rd, Fair Haven, Ogun State Nigeria</p>
//               <p className="text-gray-500 text-sm mt-2">
//                 Cozy cottage perfect for first-time home buyers or as a rental investment.
//               </p>
//             </div>
//           </div>
//         </div>
        
//         {/* Additional content to demonstrate sticky header */}
//         <div className="mt-16">
//           <h3 className="text-xl font-semibold mb-4">More Properties</h3>
//           <div className="space-y-4">
//             {[1, 2, 3, 4, 5].map((item) => (
//               <div key={item} className="p-4 border rounded-lg">
//                 <h4 className="font-medium">Property Listing {item}</h4>
//                 <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





















// "use client";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const slideInterval = useRef<NodeJS.Timeout>();

//   const slides = [
//     {
//       src: "/house1.jpg",
//       alt: "Luxury Home",
//       title: "Find Your Dream Home",
//       description: "Discover the perfect property for your needs. From modern apartments to spacious family homes."
//     },
//     {
//       src: "/house2.jpg",
//       alt: "Modern Villa",
//       title: "Premium Properties",
//       description: "Explore our exclusive collection of luxury homes with premium amenities and locations."
//     },
//     {
//       src: "/house3.jpg",
//       alt: "Country House",
//       title: "Investment Opportunities",
//       description: "Smart real estate investments with great returns. Start building your property portfolio today."
//     },
//   ];

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Auto slide functionality
//   useEffect(() => {
//     const startSlideShow = () => {
//       slideInterval.current = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 5000);
//     };

//     const stopSlideShow = () => {
//       if (slideInterval.current) {
//         clearInterval(slideInterval.current);
//       }
//     };

//     startSlideShow();

//     // Clean up on component unmount
//     return () => stopSlideShow();
//   }, [slides.length]);

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const goToPrevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div>
//       {/* Sticky Navbar */}
//       <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 shadow-sm bg-white">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <span className="text-2xl font-bold text-blue-900">🏠 ACEEstate</span>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-6 text-gray-700 relative">
//           <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
//           <a href="/about" className="hover:text-blue-600 transition-colors">About</a>
          
//           {/* Properties Dropdown */}
//           <div 
//             className="relative" 
//             ref={dropdownRef}
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <button 
//               className="flex items-center hover:text-green-600 focus:outline-none cursor-pointer select-none transition-colors"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             >
//               Properties
//               <svg 
//                 className={`w-4 h-4 ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
            
//             {dropdownOpen && (
//               <div 
//                 className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md py-2 z-50 border border-gray-200"
//                 onMouseEnter={() => setDropdownOpen(true)}
//                 onMouseLeave={() => setDropdownOpen(false)}
//               >
//                 <a
//                   href="/properties/housing"
//                   className="block px-4 py-2 hover:bg-blue-50 text-gray-700 transition-colors"
//                   onClick={() => setDropdownOpen(false)}
//                 >
//                   Housing
//                 </a>
//                 <a
//                   href="/properties/lands"
//                   className="block px-4 py-2 hover:bg-blue-50 text-gray-700 transition-colors"
//                   onClick={() => setDropdownOpen(false)}
//                 >
//                   Lands
//                 </a>
//               </div>
//             )}
//           </div>

//           <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
//         </nav>

//         {/* CTA Button (Desktop only) */}
//         <button className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
//           Get Started
//         </button>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-6 md:hidden z-50">
//             <a href="/" className="py-2 w-full hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
//             <a href="/about" className="py-2 w-full hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>About</a>
            
//             {/* Mobile Properties Dropdown */}
//             <div className="w-full">
//               <button 
//                 className="flex items-center justify-between w-full py-2 hover:text-blue-600 transition-colors"
//                 onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
//               >
//                 Properties
//                 <svg 
//                   className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
              
//               {mobileDropdownOpen && (
//                 <div className="pl-4 mt-2 w-full border-l-2 border-blue-100">
//                   <a
//                     href="/properties/housing"
//                     className="block py-2 hover:text-blue-600 text-gray-700 transition-colors"
//                     onClick={() => {
//                       setMobileDropdownOpen(false);
//                       setMenuOpen(false);
//                     }}
//                   >
//                     Housing
//                   </a>
//                   <a
//                     href="/properties/lands"
//                     className="block py-2 hover:text-blue-600 text-gray-700 transition-colors"
//                     onClick={() => {
//                       setMobileDropdownOpen(false);
//                       setMenuOpen(false);
//                     }}
//                   >
//                     Lands
//                   </a>
//                 </div>
//               )}
//             </div>
            
//             <a href="/contact" className="py-2 w-full hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
//             <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors w-full">
//               Get Started
//             </button>
//           </div>
//         )}
//       </header>

//       {/* Hero Section with Sliding Background */}
//       <section className="relative bg-gray-100 h-[500px] overflow-hidden">
//         {/* Slides */}
//         <div className="relative w-full h-full">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 index === currentSlide ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <img
//                 src={slide.src}
//                 alt={slide.alt}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-start">
//           <div className="container px-6 text-white max-w-2xl text-left">
            
//             {/* Animated Heading - Different for each slide */}
//             <AnimatePresence mode="wait">
//               <motion.h1
//                 key={currentSlide}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -40 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 className="text-4xl md:text-5xl font-bold mb-4"
//               >
//                 {slides[currentSlide].title}
//               </motion.h1>
//             </AnimatePresence>

//             {/* Animated Paragraph - Different for each slide */}
//             <AnimatePresence mode="wait">
//               <motion.p
//                 key={currentSlide}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -40 }}
//                 transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
//                 className="mb-6"
//               >
//                 {slides[currentSlide].description}
//               </motion.p>
//             </AnimatePresence>

//             {/* CTA Button - Same for all slides */}
//             <motion.a
//               href="#"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
//               className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
//             >
//               Get Started
//             </motion.a>
//           </div>
//         </div>

//         {/* Slide Indicators */}
//         <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 index === currentSlide ? "bg-white" : "bg-white/50"
//               }`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white bg-black/30 p-2 rounded-full transition-colors"
//           onClick={goToPrevSlide}
//           aria-label="Previous slide"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//         <button
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white bg-black/30 p-2 rounded-full transition-colors"
//           onClick={goToNextSlide}
//           aria-label="Next slide"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </section>

//       {/* Featured Properties */}
//       <section className="px-6 md:px-12 py-16 bg-white">
//         <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Properties</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {/* Property 1 */}
//           <div className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
//             <Image
//               src="/house1.jpg"
//               alt="Property 1"
//               width={400}
//               height={300}
//               className="w-full h-60 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg md:text-xl font-semibold">₦3,500,000</h3>
//               <p className="text-gray-600">1234 Main St, Abeokuta, Ogun State, Nigeria</p>
//               <p className="text-gray-500 text-sm mt-2">
//                 Modern 3-bedroom apartment with stunning city views and amenities.
//               </p>
//             </div>
//           </div>

//           {/* Property 2 */}
//           <div className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
//             <Image
//               src="/house2.jpg"
//               alt="Property 2"
//               width={400}
//               height={300}
//               className="w-full h-60 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg md:text-xl font-semibold">₦2,750,000</h3>
//               <p className="text-gray-600">5678 Orange Ave, Abeokuta, Ogun State, Nigeria</p>
//               <p className="text-gray-500 text-sm mt-2">
//                 Spacious family home with large garden and outdoor entertainment area.
//               </p>
//             </div>
//           </div>

//           {/* Property 3 */}
//           <div className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
//             <Image
//               src="/house3.jpg"
//               alt="Property 3"
//               width={400}
//               height={300}
//               className="w-full h-60 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg md:text-xl font-semibold">₦1,250,000</h3>
//               <p className="text-gray-600">9101 Pine Rd, Fair Haven, Ogun State Nigeria</p>
//               <p className="text-gray-500 text-sm mt-2">
//                 Cozy cottage perfect for first-time home buyers or as a rental investment.
//               </p>
//             </div>
//           </div>
//         </div>
        
//         {/* Additional content to demonstrate sticky header */}
//         <div className="mt-16">
//           <h3 className="text-xl font-semibold mb-4">More Properties</h3>
//           <div className="space-y-4">
//             {[1, 2, 3, 4, 5].map((item) => (
//               <div key={item} className="p-4 border rounded-lg">
//                 <h4 className="font-medium">Property Listing {item}</h4>
//                 <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





















// // app/page.tsx
// "use client";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// export default function Home() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideInterval = useRef<NodeJS.Timeout>();

//   const slides = [
//     {
//       src: "/house1.jpg",
//       alt: "Luxury Home",
//       title: "Find Your Dream Home",
//       description: "Discover the perfect property for your needs. From modern apartments to spacious family homes."
//     },
//     {
//       src: "/house2.jpg",
//       alt: "Modern Villa",
//       title: "Premium Properties",
//       description: "Explore our exclusive collection of luxury homes with premium amenities and locations."
//     },
//     {
//       src: "/house3.jpg",
//       alt: "Country House",
//       title: "Investment Opportunities",
//       description: "Smart real estate investments with great returns. Start building your property portfolio today."
//     },
//   ];

//   // Auto slide functionality
//   useEffect(() => {
//     const startSlideShow = () => {
//       slideInterval.current = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 5000);
//     };

//     const stopSlideShow = () => {
//       if (slideInterval.current) {
//         clearInterval(slideInterval.current);
//       }
//     };

//     startSlideShow();

//     // Clean up on component unmount
//     return () => stopSlideShow();
//   }, [slides.length]);

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   const goToNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const goToPrevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div>
//       <Header />
      
//       {/* Hero Section with Sliding Background */}
//       <section className="relative bg-gray-100 h-[500px] overflow-hidden">
//         {/* Slides */}
//         <div className="relative w-full h-full">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 index === currentSlide ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <img
//                 src={slide.src}
//                 alt={slide.alt}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-start">
//           <div className="container px-6 text-white max-w-2xl text-left">
            
//             {/* Animated Heading - Different for each slide */}
//             <motion.h1
//               key={currentSlide}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="text-4xl md:text-5xl font-bold mb-4"
//             >
//               {slides[currentSlide].title}
//             </motion.h1>

//             {/* Animated Paragraph - Different for each slide */}
//             <motion.p
//               key={currentSlide}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
//               className="mb-6"
//             >
//               {slides[currentSlide].description}
//             </motion.p>

//             {/* CTA Button - Same for all slides */}
//             <motion.a
//               href="#"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
//               className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
//             >
//               Get Started
//             </motion.a>
//           </div>
//         </div>

//         {/* Slide Indicators */}
//         <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 index === currentSlide ? "bg-white" : "bg-white/50"
//               }`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white bg-black/30 p-2 rounded-full transition-colors"
//           onClick={goToPrevSlide}
//           aria-label="Previous slide"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//         <button
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white bg-black/30 p-2 rounded-full transition-colors"
//           onClick={goToNextSlide}
//           aria-label="Next slide"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </section>

//       {/* Featured Properties */}
//       <section className="px-6 md:px-12 py-16 bg-white">
//         <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Properties</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {/* Property 1 */}
//           <div className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
//             <Image
//               src="/house1.jpg"
//               alt="Property 1"
//               width={400}
//               height={300}
//               className="w-full h-60 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg md:text-xl font-semibold">₦3,500,000</h3>
//               <p className="text-gray-600">1234 Main St, Abeokuta, Ogun State, Nigeria</p>
//               <p className="text-gray-500 text-sm mt-2">
//                 Modern 3-bedroom apartment with stunning city views and amenities.
//               </p>
//             </div>
//           </div>

//           {/* Property 2 */}
//           <div className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
//             <Image
//               src="/house2.jpg"
//               alt="Property 2"
//               width={400}
//               height={300}
//               className="w-full h-60 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg md:text-xl font-semibold">₦2,750,000</h3>
//               <p className="text-gray-600">5678 Orange Ave, Abeokuta, Ogun State, Nigeria</p>
//               <p className="text-gray-500 text-sm mt-2">
//                 Spacious family home with large garden and outdoor entertainment area.
//               </p>
//             </div>
//           </div>

//           {/* Property 3 */}
//           <div className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
//             <Image
//               src="/house3.jpg"
//               alt="Property 3"
//               width={400}
//               height={300}
//               className="w-full h-60 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg md:text-xl font-semibold">₦1,250,000</h3>
//               <p className="text-gray-600">9101 Pine Rd, Fair Haven, Ogun State Nigeria</p>
//               <p className="text-gray-500 text-sm mt-2">
//                 Cozy cottage perfect for first-time home buyers or as a rental investment.
//               </p>
//             </div>
//           </div>
//         </div>
        
//         {/* Additional content to demonstrate sticky header */}
//         <div className="mt-16">
//           <h3 className="text-xl font-semibold mb-4">More Properties</h3>
//           <div className="space-y-4">
//             {[1, 2, 3, 4, 5].map((item) => (
//               <div key={item} className="p-4 border rounded-lg">
//                 <h4 className="font-medium">Property Listing {item}</h4>
//                 <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }





















"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout>();

  const slides = [
    {
      id: "slide-1",
      src: "/house1.jpg",
      alt: "Luxury Home",
      title: "Find Your Dream Home",
      description: "Discover the perfect property for your needs. From modern apartments to spacious family homes."
    },
    {
      id: "slide-2",
      src: "/house2.jpg",
      alt: "Modern Villa",
      title: "Premium Properties",
      description: "Explore our exclusive collection of luxury homes with premium amenities and locations."
    },
    {
      id: "slide-3",
      src: "/house3.jpg",
      alt: "Country House",
      title: "Investment Opportunities",
      description: "Smart real estate investments with great returns. Start building your property portfolio today."
    },
  ];

  // Auto slide functionality
  useEffect(() => {
    const startSlideShow = () => {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    };

    const stopSlideShow = () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };

    startSlideShow();

    // Clean up on component unmount
    return () => stopSlideShow();
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <Header />
      
      {/* Hero Section with Sliding Background */}
      <section className="relative bg-gray-100 h-[500px] overflow-hidden">
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id} // Using unique ID instead of index
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-start">
          <div className="container px-6 text-white max-w-2xl text-left">
            
            {/* Animated Heading - Different for each slide */}
            <motion.h1
              key={slides[currentSlide].id} // Using unique ID instead of index
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Animated Paragraph - Different for each slide */}
            <motion.p
              key={`desc-${slides[currentSlide].id}`} // Using unique key with prefix
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="mb-6"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA Button - Same for all slides */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
            >
              Get Started
            </motion.a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
          {slides.map((slide, index) => (
            <button
              key={`indicator-${slide.id}`} // Using unique key with prefix
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white bg-black/30 p-2 rounded-full transition-colors"
          onClick={goToPrevSlide}
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white bg-black/30 p-2 rounded-full transition-colors"
          onClick={goToNextSlide}
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
          </svg>
        </button>
      </section>

      {/* Featured Properties */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Properties</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Property 1 */}
          <div key="property-1" className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
            <Image
              src="/house1.jpg"
              alt="Property 1"
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold">₦3,500,000</h3>
              <p className="text-gray-600">1234 Main St, Abeokuta, Ogun State, Nigeria</p>
              <p className="text-gray-500 text-sm mt-2">
                Modern 3-bedroom apartment with stunning city views and amenities.
              </p>
            </div>
          </div>

          {/* Property 2 */}
          <div key="property-2" className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
            <Image
              src="/house2.jpg"
              alt="Property 2"
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold">₦2,750,000</h3>
              <p className="text-gray-600">5678 Orange Ave, Abeokuta, Ogun State, Nigeria</p>
              <p className="text-gray-500 text-sm mt-2">
                Spacious family home with large garden and outdoor entertainment area.
              </p>
            </div>
          </div>

          {/* Property 3 */}
          <div key="property-3" className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
            <Image
              src="/house3.jpg"
              alt="Property 3"
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold">₦1,250,000</h3>
              <p className="text-gray-600">9101 Pine Rd, Fair Haven, Ogun State Nigeria</p>
              <p className="text-gray-500 text-sm mt-2">
                Cozy cottage perfect for first-time home buyers or as a rental investment.
              </p>
            </div>
          </div>
        </div>
        
        {/* Additional content to demonstrate sticky header */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-4">More Properties</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={`listing-${item}`} className="p-4 border rounded-lg"> {/* Added unique key with prefix */}
                <h4 className="font-medium">Property Listing {item}</h4>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}