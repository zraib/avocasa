import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-terracotta-600 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/7195160/pexels-photo-7195160.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white dark:bg-charcoal-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="heading-3 mb-6">Contact Information</h2>
              
              <div className="space-y-8 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-avocado-700 dark:text-avocado-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">
                      {t('contact.info.address')}
                    </h3>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      {t('contact.info.addressLine1')}
                    </p>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      {t('contact.info.addressLine2')}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-avocado-700 dark:text-avocado-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">
                      {t('contact.info.phone')}
                    </h3>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      +212 522 123 456
                    </p>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      +212 661 987 654
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-avocado-100 dark:bg-avocado-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-avocado-700 dark:text-avocado-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal-800 dark:text-cream-50 mb-1">
                      {t('contact.info.email')}
                    </h3>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      info@avocasa.com
                    </p>
                    <p className="text-charcoal-600 dark:text-cream-300">
                      sales@avocasa.com
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Chat Options */}
              <div className="bg-cream-50 dark:bg-charcoal-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle size={24} className="text-avocado-600 dark:text-avocado-400" />
                  <h3 className="font-semibold text-charcoal-800 dark:text-cream-50">
                    Chat with Us
                  </h3>
                </div>
                <p className="text-charcoal-600 dark:text-cream-300 mb-4">
                  Need a quick response? Our team is available for chat during business hours.
                </p>
                <a 
                  href="https://wa.me/212522123456" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline w-full"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div 
                className="bg-white dark:bg-charcoal-800 rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="heading-3 mb-6">Send Us a Message</h2>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-cream-50 dark:bg-charcoal-950">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Find Us</h2>
          
          <div className="bg-white dark:bg-charcoal-800 rounded-lg shadow-lg p-4 h-96 flex items-center justify-center">
            {/* Here you would normally include an iframe with a Google Map or similar */}
            <div className="text-center">
              <MapPin size={48} className="text-avocado-600 dark:text-avocado-400 mx-auto mb-4" />
              <p className="text-charcoal-700 dark:text-cream-200 font-medium">Interactive map would be loaded here</p>
              <p className="text-charcoal-600 dark:text-cream-300">Route de Marrakech, Km 15, Agadir, Morocco</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-white dark:bg-charcoal-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-8">Business Hours</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream-50 dark:bg-charcoal-800 rounded-lg p-6">
                <h3 className="font-semibold text-xl text-charcoal-800 dark:text-cream-50 mb-4">Office Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-cream-200 dark:border-charcoal-700 pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">Monday - Friday</span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">8:30 AM - 5:30 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-cream-200 dark:border-charcoal-700 pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">Saturday</span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">Sunday</span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">Closed</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-cream-50 dark:bg-charcoal-800 rounded-lg p-6">
                <h3 className="font-semibold text-xl text-charcoal-800 dark:text-cream-50 mb-4">Farm Tour Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-cream-200 dark:border-charcoal-700 pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">Monday - Friday</span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">10:00 AM - 3:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-cream-200 dark:border-charcoal-700 pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">Saturday</span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">10:00 AM - 12:00 PM</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span className="text-charcoal-700 dark:text-cream-200">Note</span>
                    <span className="text-charcoal-800 dark:text-cream-50 font-medium">By Appointment Only</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Distributors/Partners CTA */}
      <section className="py-16 bg-terracotta-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Distributor
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Interested in distributing our premium Moroccan avocados? We're always looking for reliable partners who share our commitment to quality.
          </p>
          <button 
            onClick={() => window.openContactModal()} 
            className="btn bg-white text-terracotta-600 hover:bg-cream-100"
          >
            {t('cta.quote')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;