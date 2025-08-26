


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
//       id: "slide-1",
//       src: "/house1.jpg",
//       alt: "Luxury Home",
//       title: "Find Your Dream Home",
//       description: "Discover the perfect property for your needs. From modern apartments to spacious family homes."
//     },
//     {
//       id: "slide-2",
//       src: "/house2.jpg",
//       alt: "Modern Villa",
//       title: "Premium Properties",
//       description: "Explore our exclusive collection of luxury homes with premium amenities and locations."
//     },
//     {
//       id: "slide-3",
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
//               key={slide.id} // Using unique ID instead of index
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
//               key={slides[currentSlide].id} // Using unique ID instead of index
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="text-4xl md:text-5xl font-bold mb-4"
//             >
//               {slides[currentSlide].title}
//             </motion.h1>

//             {/* Animated Paragraph - Different for each slide */}
//             <motion.p
//               key={`desc-${slides[currentSlide].id}`} // Using unique key with prefix
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
//           {slides.map((slide, index) => (
//             <button
//               key={`indicator-${slide.id}`} // Using unique key with prefix
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
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
//           </svg>
//         </button>
//       </section>

//       {/* Featured Properties */}
//       <section className="px-6 md:px-12 py-16 bg-white">
//         <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Properties</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {/* Property 1 */}
//           <div key="property-1" className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
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
//           <div key="property-2" className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
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
//           <div key="property-3" className="shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
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
//               <div key={`listing-${item}`} className="p-4 border rounded-lg"> {/* Added unique key with prefix */}
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




















// app/page.tsx
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

  const moreProperties = [
    {
      id: 4,
      title: "Luxury Apartment",
      price: "₦420,200,000",
      location: "Victoria Island, Lagos",
      image: "/house4.jpg",
      description: "Modern luxury apartment with premium finishes and amenities in a prime location."
    },
    {
      id: 5,
      title: "Beachfront Home",
      price: "₦770,800,000",
      location: "Ikeja, Lagos",
      image: "/house5.jpg",
      description: "Spacious beachfront home with a spacious parking space and modern amenities for comfortable living."
    },
    {
      id: 6,
      title: "Beach House",
      price: "₦950,500,000",
      location: "Epe, Lagos",
      image: "/house6.jpg",
      description: "Beautiful beachfront property with stunning ocean views and direct beach access."
    },
    {
      id: 7,
      title: "Townhouse",
      price: "₦130,900,000",
      location: "Surulere, Lagos",
      image: "/house1.jpg",
      description: "Modern townhouse in a convenient urban location with easy access to amenities."
    },
    {
      id: 8,
      title: "Duplex",
      price: "₦190,200,000",
      location: "GRA, Ibadan",
      image: "/house2.jpg",
      description: "Elegant duplex with spacious rooms and modern design features throughout."
    },
    {
      id: 9,
      title: "Modern Duplex",
      price: "₦480,800,000",
      location: "Abeokuta, Ogun State",
      image: "/house3.jpg",
      description: "Charming bungalow with character and ample outdoor space for relaxation."
    }
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
              key={slide.id}
              className={`absolute inset-极 transition-opacity duration-1000 ${
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
              key={slides[currentSlide].id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Animated Paragraph - Different for each slide */}
            <motion.p
              key={`desc-${slides[currentSlide].id}`}
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
              className="inline-block bg-green-600 hover极bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
            >
              Get Started
            </motion.a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space极-2 z-10">
          {slides.map((slide, index) => (
            <button
              key={`indicator-${slide.id}`}
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
              <h3 className="text-lg md:text-xl font-semibold">₦130,500,000</h3>
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
              <h3 className="text-lg md:text-xl font-semibold">₦210,750,000</h3>
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
              <h3 className="text-lg md:text-xl font-semibold">₦450,250,000</h3>
              <p className="text-gray-600">9101 Pine Rd, Fair Haven, Ogun State Nigeria</p>
              <p className="text-gray-500 text-sm mt-2">
                Cozy cottage perfect for first-time home buyers or as a rental investment.
              </p>
            </div>
          </div>
        </div>
        
        {/* More Properties Section - Updated to Cards */}
        <div className="mt-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8"
          >
            More Properties
          </motion.h3>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {moreProperties.map((property) => (
              <motion.div
                key={property.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 relative">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    New
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{property.title}</h3>
                  <p className="text-blue-600 font-bold mb-2">{property.price}</p>
                  <p className="text-gray-600 text-sm mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}
                  </p>
                  <p className="text-gray-500 text-sm">{property.description}</p>
                  <a href="/properties/housing"><button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-colors text-sm">
                    View Details
                  </button></a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

// Add this section to your existing home page (app/page.tsx)

// After the More Properties section and before the Footer, add:

{/* Testimonials Section */}
<section className="py-16 px-4 md:px-8 bg-gray-50">
  <div className="container mx-auto max-w-6xl">
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
    >
      What Our Clients Say
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
    >
      Don't just take our word for it. Here's what our satisfied clients have to say about their experience with ACEEstate.
    </motion.p>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          id: 1,
          name: "Adewale Babajide",
          role: "Home Owner",
          image: "/guy3.jpeg",
          content: "ACEEstate helped me find my dream home in just two weeks! Their team was professional, responsive, and truly understood what I was looking for. I couldn't be happier with my new place.",
          rating: 5
        },
        {
          id: 2,
          name: "Uche Austin",
          role: "Property Investor",
          image: "/guy2.jpeg",
          content: "As a real estate investor, I've worked with many agencies, but ACEEstate stands out. Their market knowledge and negotiation skills helped me secure a great investment property at an excellent price.",
          rating: 5
        },
        {
          id: 3,
          name: "Funmi Adebayo",
          role: "First-time Buyer",
          image: "/woman1.jpeg",
          content: "The process of buying my first home was made so easy by the ACEEstate team. They guided me through every step and answered all my questions patiently. Highly recommended!",
          rating: 5
        }
      ].map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          {/* Rating Stars */}
          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          {/* Testimonial Content */}
          <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
          
          {/* Client Info */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA for testimonials */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="text-center mt-12"
    >
      <p className="text-gray-600 mb-6">Want to share your experience with ACEEstate?</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Share Your Story
      </motion.button>
    </motion.div>
  </div>
</section>

      <Footer />
    </div>
  );
}