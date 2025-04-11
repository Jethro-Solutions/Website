
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-jethro-blue font-medium tracking-wide">CONTACT US</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mt-3 mb-6">
              Begin Your Journey Toward Optimization
            </h2>
            <p className="text-jethro-black/70 leading-relaxed mb-8">
              Reach out to discuss how we can serve as your trusted first advisor 
              in technology implementation and optimization.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-jethro-blue/10 flex items-center justify-center text-jethro-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-jethro-black/60">Email Us At</p>
                  <p className="text-jethro-black font-medium">contact@jethrosolutions.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-jethro-blue/10 flex items-center justify-center text-jethro-blue">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-jethro-black/60">Call Us At</p>
                  <p className="text-jethro-black font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-jethro-blue/10 flex items-center justify-center text-jethro-blue">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-jethro-black/60">Visit Our Office</p>
                  <p className="text-jethro-black font-medium">123 Wisdom Way, Tech Valley, CA 94103</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-jethro-cream p-8 rounded-lg border border-jethro-gray/20 shadow-sm">
            <h3 className="text-xl font-playfair font-medium mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-jethro-black/70 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 rounded border border-jethro-gray/30 bg-white focus:outline-none focus:ring-2 focus:ring-jethro-blue/20"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-jethro-black/70 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 rounded border border-jethro-gray/30 bg-white focus:outline-none focus:ring-2 focus:ring-jethro-blue/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-jethro-black/70 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 rounded border border-jethro-gray/30 bg-white focus:outline-none focus:ring-2 focus:ring-jethro-blue/20"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-jethro-black/70 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full p-3 rounded border border-jethro-gray/30 bg-white focus:outline-none focus:ring-2 focus:ring-jethro-blue/20"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
