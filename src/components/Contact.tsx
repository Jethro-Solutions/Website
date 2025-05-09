import React, { useState, useEffect, useRef } from 'react';
import { Mail, CheckCircle, AlertCircle, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Add ref for Google Calendar button
  const calendarButtonRef = useRef<HTMLDivElement>(null);

  // Load Google Calendar scripts and initialize the button
  useEffect(() => {
    // Add CSS
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    document.head.appendChild(linkElement);

    // Add script
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    scriptElement.async = true;
    
    // Initialize the calendar button after script loads
    scriptElement.onload = () => {
      if (window.calendar && window.calendar.schedulingButton && calendarButtonRef.current) {
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2zKnuw2GKwxML9JrT7UPRK7bnLQZR9V95SODT0cDhujv2HPcOphsxw_2niPyxfofVSyYb1u9MZ?gv=true',
          color: '#0B8043',
          label: "Schedule a Consultation",
          target: calendarButtonRef.current,
        });
      }
    };
    
    document.head.appendChild(scriptElement);

    // Cleanup
    return () => {
      document.head.removeChild(linkElement);
      if (document.head.contains(scriptElement)) {
        document.head.removeChild(scriptElement);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Using the provided Formspree ID
      const response = await fetch('https://formspree.io/f/xjkwgbda', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        console.error('Form submission error:', await response.text());
      }
    } catch (error) {
      setStatus('error');
      console.error('Form submission error:', error);
    }
  };

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
            
            {/* Add calendar scheduling button */}
            <div className="mb-8 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-jethro-blue/10 flex items-center justify-center text-jethro-blue">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm text-jethro-black/60">Or Schedule Directly</p>
                  <p className="text-jethro-black font-medium">Book a consultation time that works for you</p>
                </div>
              </div>
              <div 
                ref={calendarButtonRef} 
                className="inline-block ml-16"
              ></div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-jethro-blue/10 flex items-center justify-center text-jethro-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-jethro-black/60">Email Us At</p>
                  <p className="text-jethro-black font-medium">jethrofounders@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-jethro-cream p-8 rounded-lg border border-jethro-gray/20 shadow-sm">
            <h3 className="text-xl font-playfair font-medium mb-6">Send Us a Message</h3>
            
            {status === 'success' && (
              <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6 flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Thank you for your message! We'll get back to you soon.</span>
              </div>
            )}
            
            {status === 'error' && (
              <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6 flex items-center gap-2">
                <AlertCircle size={20} />
                <span>There was an error submitting your message. Please try again.</span>
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-jethro-black/70 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 rounded border border-jethro-gray/30 bg-white focus:outline-none focus:ring-2 focus:ring-jethro-blue/20"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-jethro-black/70 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 rounded border border-jethro-gray/30 bg-white focus:outline-none focus:ring-2 focus:ring-jethro-blue/20"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-jethro-black/70 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full p-3 rounded border border-jethro-gray/30 bg-white focus:outline-none focus:ring-2 focus:ring-jethro-blue/20"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add type definition for window object
declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (config: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

export default Contact;
