import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, PackageCheck, Award, Truck, Calendar } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-charcoal-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3029520/pexels-photo-3029520.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t('products.title')}
          </h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            {t('products.intro')}
          </p>
        </div>
      </section>

      {/* Product Varieties */}
      <section className="py-16 bg-white dark:bg-charcoal-900">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">{t('products.varieties.title')}</h2>
          
          <div className="space-y-24">
            {/* Hass Avocado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <div className="inline-block bg-avocado-100 dark:bg-avocado-900/40 text-avocado-700 dark:text-avocado-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Flagship Variety
                </div>
                <h3 className="text-2xl font-bold text-charcoal-800 dark:text-cream-50 mb-4">
                  {t('products.varieties.hass.name')}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 mb-6">
                  {t('products.varieties.hass.description')}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-avocado-600 dark:text-avocado-400" />
                    <p className="text-charcoal-700 dark:text-cream-200">
                      {t('products.varieties.hass.season')}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <PackageCheck size={20} className="text-avocado-600 dark:text-avocado-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-charcoal-700 dark:text-cream-200 font-medium mb-1">
                        {t('products.varieties.hass.sizes')}
                      </p>
                      <p className="text-charcoal-600 dark:text-cream-300 text-sm">
                        Size refers to the number of avocados that fit in a standard 4kg carton
                      </p>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => window.openContactModal()} 
                  className="btn btn-primary"
                >
                  {t('cta.quote')}
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/5945704/pexels-photo-5945704.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Hass Avocado" 
                    className="rounded-lg shadow-lg w-full h-96 object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-charcoal-900/90 backdrop-blur-sm p-3 rounded-lg shadow">
                    <span className="text-avocado-700 dark:text-avocado-400 font-medium">Premium Export Quality</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Fuerte Avocado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/2262450/pexels-photo-2262450.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Fuerte Avocado" 
                    className="rounded-lg shadow-lg w-full h-96 object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-charcoal-900/90 backdrop-blur-sm p-3 rounded-lg shadow">
                    <span className="text-avocado-700 dark:text-avocado-400 font-medium">Smooth Texture</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block bg-avocado-100 dark:bg-avocado-900/40 text-avocado-700 dark:text-avocado-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Popular Choice
                </div>
                <h3 className="text-2xl font-bold text-charcoal-800 dark:text-cream-50 mb-4">
                  {t('products.varieties.fuerte.name')}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 mb-6">
                  {t('products.varieties.fuerte.description')}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-avocado-600 dark:text-avocado-400" />
                    <p className="text-charcoal-700 dark:text-cream-200">
                      {t('products.varieties.fuerte.season')}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <PackageCheck size={20} className="text-avocado-600 dark:text-avocado-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-charcoal-700 dark:text-cream-200 font-medium mb-1">
                        {t('products.varieties.fuerte.sizes')}
                      </p>
                      <p className="text-charcoal-600 dark:text-cream-300 text-sm">
                        Size refers to the number of avocados that fit in a standard 4kg carton
                      </p>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => window.openContactModal()} 
                  className="btn btn-primary"
                >
                  {t('cta.quote')}
                </button>
              </motion.div>
            </div>
            
            {/* Bacon Avocado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <div className="inline-block bg-avocado-100 dark:bg-avocado-900/40 text-avocado-700 dark:text-avocado-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Early Season
                </div>
                <h3 className="text-2xl font-bold text-charcoal-800 dark:text-cream-50 mb-4">
                  {t('products.varieties.bacon.name')}
                </h3>
                <p className="text-charcoal-600 dark:text-cream-300 mb-6">
                  {t('products.varieties.bacon.description')}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-avocado-600 dark:text-avocado-400" />
                    <p className="text-charcoal-700 dark:text-cream-200">
                      {t('products.varieties.bacon.season')}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <PackageCheck size={20} className="text-avocado-600 dark:text-avocado-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-charcoal-700 dark:text-cream-200 font-medium mb-1">
                        {t('products.varieties.bacon.sizes')}
                      </p>
                      <p className="text-charcoal-600 dark:text-cream-300 text-sm">
                        Size refers to the number of avocados that fit in a standard 4kg carton
                      </p>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => window.openContactModal()} 
                  className="btn btn-primary"
                >
                  {t('cta.quote')}
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/4425124/pexels-photo-4425124.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Bacon Avocado" 
                    className="rounded-lg shadow-lg w-full h-96 object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-charcoal-900/90 backdrop-blur-sm p-3 rounded-lg shadow">
                    <span className="text-avocado-700 dark:text-avocado-400 font-medium">Mild Flavor</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Export Specifications */}
      <section className="py-16 bg-cream-50 dark:bg-charcoal-950">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">{t('products.specifications.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Packaging Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-8"
            >
              <h3 className="text-xl font-bold text-charcoal-800 dark:text-cream-50 mb-6 flex items-center gap-3">
                <PackageCheck size={24} className="text-avocado-600 dark:text-avocado-400" />
                {t('products.specifications.packaging')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-avocado-700 dark:text-avocado-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">Standard Cartons</h4>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      4kg and 10kg export-grade cartons with proper ventilation and cushioning
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-avocado-700 dark:text-avocado-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">Bulk Packaging</h4>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      Custom palletized solutions for large-scale distributors and wholesalers
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-avocado-700 dark:text-avocado-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">Retail Ready</h4>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      Consumer packaging options including nets, trays, and branded materials
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-avocado-100 dark:bg-avocado-900/50 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-avocado-700 dark:text-avocado-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">Custom Branding</h4>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      Private label options for retailers and distributors with custom specifications
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-8"
            >
              <h3 className="text-xl font-bold text-charcoal-800 dark:text-cream-50 mb-6 flex items-center gap-3">
                <Award size={24} className="text-avocado-600 dark:text-avocado-400" />
                {t('products.specifications.certifications')}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 border border-cream-200 dark:border-charcoal-700 rounded-lg text-center hover:border-avocado-400 dark:hover:border-avocado-600 transition-colors">
                  <h4 className="font-medium text-charcoal-800 dark:text-cream-50">Organic</h4>
                  <p className="text-sm text-charcoal-600 dark:text-cream-300">USDA & EU Certified</p>
                </div>
                
                <div className="p-4 border border-cream-200 dark:border-charcoal-700 rounded-lg text-center hover:border-avocado-400 dark:hover:border-avocado-600 transition-colors">
                  <h4 className="font-medium text-charcoal-800 dark:text-cream-50">GlobalG.A.P.</h4>
                  <p className="text-sm text-charcoal-600 dark:text-cream-300">GGN: 12345678</p>
                </div>
                
                <div className="p-4 border border-cream-200 dark:border-charcoal-700 rounded-lg text-center hover:border-avocado-400 dark:hover:border-avocado-600 transition-colors">
                  <h4 className="font-medium text-charcoal-800 dark:text-cream-50">BRC Food</h4>
                  <p className="text-sm text-charcoal-600 dark:text-cream-300">Grade A Certified</p>
                </div>
                
                <div className="p-4 border border-cream-200 dark:border-charcoal-700 rounded-lg text-center hover:border-avocado-400 dark:hover:border-avocado-600 transition-colors">
                  <h4 className="font-medium text-charcoal-800 dark:text-cream-50">ISO 22000</h4>
                  <p className="text-sm text-charcoal-600 dark:text-cream-300">Food Safety</p>
                </div>
              </div>
              
              <div className="bg-avocado-50 dark:bg-avocado-900/20 p-4 rounded-lg">
                <p className="text-charcoal-700 dark:text-cream-200">
                  Our certifications ensure that our avocados meet and exceed international quality and safety standards. Certification documentation is provided with every shipment and available upon request.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Shipping & Logistics */}
      <section className="py-16 bg-white dark:bg-charcoal-900">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-4">Shipping & Logistics</h2>
          <p className="text-lg text-charcoal-600 dark:text-cream-300 text-center max-w-3xl mx-auto mb-12">
            We handle every aspect of the export process, ensuring your avocados arrive in perfect condition regardless of destination.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="card p-6 border-t-4 border-avocado-500"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-semibold text-charcoal-800 dark:text-cream-50 mb-3">Cold Chain Management</h3>
              <p className="text-charcoal-600 dark:text-cream-300">
                Our advanced cold chain ensures avocados remain at optimal temperature from harvest to destination.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-6 border-t-4 border-avocado-500"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-semibold text-charcoal-800 dark:text-cream-50 mb-3">Documentation</h3>
              <p className="text-charcoal-600 dark:text-cream-300">
                We handle all export documentation including phytosanitary certificates and shipping manifests.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-6 border-t-4 border-avocado-500"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-semibold text-charcoal-800 dark:text-cream-50 mb-3">Quality Control</h3>
              <p className="text-charcoal-600 dark:text-cream-300">
                Multiple quality checkpoints throughout the supply chain ensure only the best avocados are shipped.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-6 border-t-4 border-avocado-500"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-semibold text-charcoal-800 dark:text-cream-50 mb-3">Logistics Partners</h3>
              <p className="text-charcoal-600 dark:text-cream-300">
                Our trusted logistics partners ensure reliable delivery to any global destination.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Seasonal Availability */}
      <section className="py-16 bg-avocado-50 dark:bg-charcoal-950">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Seasonal Availability</h2>
          
          <div className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-avocado-600 text-white">
                    <th className="py-4 px-4 text-left">Variety</th>
                    <th className="py-4 px-4 text-center">Jan</th>
                    <th className="py-4 px-4 text-center">Feb</th>
                    <th className="py-4 px-4 text-center">Mar</th>
                    <th className="py-4 px-4 text-center">Apr</th>
                    <th className="py-4 px-4 text-center">May</th>
                    <th className="py-4 px-4 text-center">Jun</th>
                    <th className="py-4 px-4 text-center">Jul</th>
                    <th className="py-4 px-4 text-center">Aug</th>
                    <th className="py-4 px-4 text-center">Sep</th>
                    <th className="py-4 px-4 text-center">Oct</th>
                    <th className="py-4 px-4 text-center">Nov</th>
                    <th className="py-4 px-4 text-center">Dec</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-cream-200 dark:border-charcoal-700">
                    <td className="py-4 px-4 font-medium text-charcoal-800 dark:text-cream-50">Hass</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                  </tr>
                  <tr className="border-b border-cream-200 dark:border-charcoal-700">
                    <td className="py-4 px-4 font-medium text-charcoal-800 dark:text-cream-50">Fuerte</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-charcoal-800 dark:text-cream-50">Bacon</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center">○</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                    <td className="py-4 px-4 text-center bg-avocado-100/50 dark:bg-avocado-900/30 text-avocado-800 dark:text-avocado-400">●</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-cream-50 dark:bg-charcoal-900 text-sm text-charcoal-600 dark:text-cream-300 flex gap-6">
              <div className="flex items-center gap-2">
                <span className="text-avocado-800 dark:text-avocado-400">●</span>
                <span>Peak Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <span>○</span>
                <span>Limited or No Availability</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-terracotta-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Order Premium Moroccan Avocados?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss your specific requirements and receive a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => window.openContactModal()} 
              className="btn bg-white text-terracotta-600 hover:bg-cream-100"
            >
              {t('cta.quote')}
            </button>
            <a 
              href="#" 
              className="btn bg-terracotta-700 hover:bg-terracotta-800 text-white"
            >
              {t('cta.catalog')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;