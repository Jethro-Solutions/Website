import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary-blue/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 bg-primary-orange/20 rounded-full blur-[80px]"></div>
          <div className="absolute top-1/3 right-1/4 w-1/4 h-1/4 bg-primary-red/20 rounded-full blur-[60px]"></div>
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              Jethro Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl text-text-muted">
              Innovative technology and financial solutions for forward-thinking businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="gradient-bg px-8 py-3 rounded-full text-white font-medium transition-standard hover:shadow-lg hover:shadow-primary-blue/20">
                Explore Services
              </button>
              <button className="bg-background-light border border-primary-blue/30 px-8 py-3 rounded-full text-white font-medium transition-standard hover:bg-background-lighter">
                Contact Us
              </button>
            </div>
            
            {/* Demo Links */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/design-system" 
                className="text-text-muted hover:text-text transition-colors"
              >
                Design System
              </Link>
              <Link 
                href="/icon-animations" 
                className="text-text-muted hover:text-text transition-colors"
              >
                Icon Animations
              </Link>
              <Link 
                href="/loading-demos" 
                className="text-text-muted hover:text-text transition-colors"
              >
                Loading Animations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-background-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center gradient-text">
            Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technology Solutions Card */}
            <div className="bg-background p-8 rounded-xl border border-primary-blue/20 transition-standard hover:border-primary-blue/50 hover:shadow-lg hover:shadow-primary-blue/10">
              <h3 className="text-2xl font-serif font-bold mb-4 text-text">Technology Solutions</h3>
              <p className="text-text-muted mb-6">
                Custom web and application development, software implementations, and seamless integrations 
                tailored to your business needs.
              </p>
              <button className="text-primary-blue-light hover:text-primary-blue font-medium flex items-center transition-standard">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Financial Solutions Card */}
            <div className="bg-background p-8 rounded-xl border border-primary-orange/20 transition-standard hover:border-primary-orange/50 hover:shadow-lg hover:shadow-primary-orange/10">
              <h3 className="text-2xl font-serif font-bold mb-4 text-text">Financial Solutions</h3>
              <p className="text-text-muted mb-6">
                Data visualization dashboards, predictive modeling, auditing automation, 
                and forecasting tools to optimize your financial operations.
              </p>
              <button className="text-primary-orange-light hover:text-primary-orange font-medium flex items-center transition-standard">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
