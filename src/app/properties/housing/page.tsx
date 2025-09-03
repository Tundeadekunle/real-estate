// app/properties/housing/page.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Housing = () => {
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

  const housingProperties = [
    {
      id: 1,
      title: "Family Villa",
      price: "₦82,000,000",
      location: "Ikeja, Lagos",
      image: "/house1.jpg",
      description: "Spacious 5-bedroom family villa with modern amenities and garden.",
      features: ["5 Bedrooms", "4 Bathrooms", "Garden", "Parking"]
    },
    {
      id: 2,
      title: "Modern Apartment",
      price: "₦90,500,000",
      location: "GRA, Abeokuta",
      image: "/house2.jpg",
      description: "Contemporary 5-bedroom apartment with stunning city views and modern finishes.",
      features: ["5 Bedrooms", "5 Bathrooms", "Balcony", "Modern Kitchen", "Security"]
    },
    {
      id: 3,
      title: "Luxury Duplex",
      price: "₦106,200,000",
      location: "Lekki, Lagos",
      image: "/house3.jpg",
      description: "Comfortable 5-bedroom duplex perfect for families, with ample outdoor space.",
      features: ["4 Bedrooms", "5 Bathrooms", "Swimming Pool", "Outdoor Space", "Quiet Neighborhood", "Parking", "Security"]
    },
    {
      id: 4,
      title: "Executive Duplex",
      price: "₦120,750,000",
      location: "GRA, Ibadan",
      image: "/house4.jpg",
      description: "Elegant duplex with executive finishes, perfect for entertaining guests.",
      features: ["4 Bedrooms", "4 Bathrooms", "Study", "Entertainment Area", "Garden"]
    },
    {
      id: 5,
      title: "Beachfront House",
      price: "₦802,000,000",
      location: "Ikoyi, Lagos",
      image: "/house5.jpg",
      description: "Exclusive beachfront property with direct access to the beach and panoramic ocean views.",
      features: ["6 Bedrooms", "6 Bathrooms", "Beach Access", "Ocean Views", "Private Pool"]
    },
    {
      id: 6,
      title: "Townhouse",
      price: "₦900,800,000",
      location: "Ikoyi, Lagos",
      image: "/house6.jpg",
      description: "Modern townhouse in a convenient location with easy access to amenities.",
      features: ["6 Bedrooms", "6 Bathrooms", "Beach Access", "Ocean Views", "Private Pool"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/house5.jpg"
            alt="Housing Properties"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Housing Properties</h1>
            <p className="text-xl md:text-2xl">Find your dream home from our curated collection of houses</p>
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
            Available Houses
          </motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {housingProperties.map((property) => (
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
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    For Sale
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
                  <p className="text-blue-600 font-bold text-lg mb-2">{property.price}</p>
                  <p className="text-gray-600 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}
                  </p>
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
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-blue-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our housing specialists who will help you find the perfect home that meets all your requirements.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-colors"
          >
            Contact a Housing Specialist
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Housing;