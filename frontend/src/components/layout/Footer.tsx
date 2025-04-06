import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-light border-t border-primary-blue/10">
      <div className="container-custom py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-xl font-serif font-bold gradient-text">Jethro</span>
              <span className="text-xl font-serif text-text ml-1">Solutions</span>
            </div>
            <p className="text-text-muted mb-6 max-w-md">
              Professional technology and financial solutions for small-medium businesses. 
              Custom development, financial modeling, and business optimization services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-muted hover:text-primary-blue transition-standard">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 5.795c-.081.377-.516.775-.942.893-1.155.322-1.674-.391-1.734-1.367 1.068-.091 1.728-.849 1.866-1.665-1.042.159-1.667.541-2.302.897-.201.124-.405.215-.605.215-.55-.003-.956-.242-1.307-.59-1.223-1.224-3.03-.65-4.299.153-1.043.655-1.547 1.873-1.688 3.07.003.36-.016.729-.05 1.089-3.092-.15-5.576-1.451-7.354-3.933-.448.765-.694 1.634-.694 2.527 0 1.069.68 2.143 1.769 2.888-.599-.017-1.488-.187-1.954-.571v.055c0 1.903 1.383 3.259 2.891 3.63-.323.088-.876.171-1.274.102.521 1.569 1.997 2.661 3.632 2.696-1.304 1.012-2.936 1.476-4.639 1.476-.304 0-.603-.018-.9-.053 1.676 1.055 3.672 1.526 5.65 1.526 6.786 0 10.493-5.579 10.493-10.416 0-.16-.004-.317-.011-.473.72-.508 1.153-1.149 1.452-1.913z" />
                </svg>
              </a>
              <a href="#" className="text-text-muted hover:text-primary-blue transition-standard">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.947 2H3.053C1.919 2 1 2.927 1 4.071v15.858C1 21.073 1.919 22 3.053 22h17.894C22.081 22 23 21.073 23 19.929V4.071C23 2.927 22.081 2 20.947 2zM8.67 18.691H5.536V9.877H8.67v8.814zm-1.565-10.01c-1.011 0-1.83-.82-1.83-1.83s.819-1.83 1.83-1.83c1.01 0 1.83.82 1.83 1.83s-.82 1.83-1.83 1.83zm12.834 10.01h-3.135v-4.289c0-1.17-.023-2.676-1.629-2.676-1.632 0-1.882 1.275-1.882 2.591v4.374h-3.135V9.877h3.001v1.379h.044c.399-.758 1.452-1.559 2.986-1.559 3.189 0 3.778 2.101 3.778 4.834v4.16z" />
                </svg>
              </a>
              <a href="#" className="text-text-muted hover:text-primary-blue transition-standard">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-text font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-text-muted hover:text-text transition-standard">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-text-muted hover:text-text transition-standard">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-text-muted hover:text-text transition-standard">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-text-muted hover:text-text transition-standard">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-muted hover:text-text transition-standard">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-text font-serif font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary-blue mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <span className="text-text-muted">contact@jethrosolutions.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-blue mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <span className="text-text-muted">(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-blue mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-text-muted">123 Business Ave, Suite 100<br />Cityville, State 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-primary-blue/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-subtle text-sm mb-4 md:mb-0">
            © {currentYear} Jethro Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-text-subtle hover:text-text text-sm transition-standard">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-subtle hover:text-text text-sm transition-standard">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 