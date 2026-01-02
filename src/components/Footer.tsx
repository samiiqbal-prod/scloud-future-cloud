import { motion } from 'framer-motion';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Enterprise', 'Security'],
  Resources: ['Documentation', 'API Reference', 'Status', 'Support'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'Compliance'],
};

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50 relative">
      <div className="section-container">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-glow-sm">
                <span className="font-display font-bold text-primary-foreground text-sm">S</span>
              </div>
              <span className="font-display font-semibold text-lg text-foreground">SCloud</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Intelligent Cloud Platform.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SCloud. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span className="text-primary/50">|</span>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <span className="text-primary/50">|</span>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
