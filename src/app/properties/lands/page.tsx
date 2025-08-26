// app/properties/lands/page.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Lands = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const landProperties = [
    {
      id: 1,
      title: "Beachfront Land",
      price: "₦25,000,000",
      location: "Epe, Lagos",
      image: "/land1.jpeg",
      size: "2.5 Acres",
      description: "Prime beachfront land with direct access to the beach, perfect for luxury resort development.",
      features: ["Beach Access", "Waterfront", "Clear Title", "Surveyed", "Road Access"]
    },
    {
      id: 2,
      title: "Commercial Plot",
      price: "₦12,500,000",
      location: "Lekki Phase 1, Lagos",
      image: "/land2.jpeg",
      size: "1,000 sqm",
      description: "Prime commercial land in a developing area with high potential for appreciation.",
      features: ["Commercial Zone", "Main Road Access", "High Potential", "Clear Title", "Surveyed"]
    },
    {
      id: 3,
      title: "Agricultural Land",
      price: "₦8,000,000",
      location: "Ogun State",
      image: "/land3.jpeg",
      size: "10 Acres",
      description: "Fertile agricultural land suitable for crop cultivation or livestock farming.",
      features: ["Fertile Soil", "Water Source", "Access Road", "Rural Setting", "Expansive"]
    },
    {
      id: 4,
      title: "Residential Plot",
      price: "₦7,200,000",
      location: "Ibeju-Lekki, Lagos",
      image: "/land4.jpeg",
      size: "600 sqm",
      description: "Well-located residential plot in a developing area with great potential for growth.",
      features: ["Residential Zone", "Good Drainage", "Clear Title", "Surveyed", "Access Road"]
    },
    {
      id: 5,
      title: "Industrial Land",
      price: "₦18,000,000",
      location: "Ota, Ogun State",
      image: "/land5.jpeg",
      size: "5 Acres",
      description: "Strategic industrial land located near major transportation routes and industrial areas.",
      features: ["Industrial Zone", "Near Expressway", "Utilities Available", "Expansive", "Clear Title"]
    },
    {
      id: 6,
      title: "Hilltop Property",
      price: "₦15,500,000",
      location: "Abeokuta, Ogun State",
      image: "/land6.jpeg",
      size: "3 Acres",
      description: "Scenic hilltop land with panoramic views, perfect for luxury residential development.",
      features: ["Hilltop", "Panoramic Views", "Exclusive Area", "Clear Title", "Surveyed"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/land1.jpeg"
            alt="Land Properties"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-green-900/60"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Land Properties</h1>
            <p className="text-xl md:text-2xl">Invest in prime land parcels with high appreciation potential</p>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Available Land Parcels
          </motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {landProperties.map((property) => (
              <motion.div
                key={property.id}
                variants={fadeIn}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-56 relative">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    For Sale
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
                  <p className="text-green-600 font-bold text-lg mb-2">{property.price}</p>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-600 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 极.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {property.location}
                    </p>
                    <p className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {property.size}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-4">{property.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment Benefits Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          >
            Why Invest in Land?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Land investment offers unique advantages that make it an attractive option for both individual and institutional investors.
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Appreciation Potential",
                description: "Land values tend to increase over time, especially in developing areas with growing infrastructure.",
                icon: (
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                title: "Low Maintenance",
                description: "Unlike buildings, land requires minimal maintenance and has no recurring costs for repairs or renovations.",
                icon: (
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              {
                title: "Flexible Use",
                description: "Land can be used for various purposes - residential, commercial, agricultural, or held as a long-term investment.",
                icon: (
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-green-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3极 md:text-4xl font-bold mb-6">Ready to Invest in Land?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our land specialists will help you find the perfect parcel that meets your investment goals and budget.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white hover:bg-gray-100 text-green-900 font-semibold px-8 py-3 rounded-lg shadow-md transition-colors"
          >
            Contact a Land Specialist
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Lands;