import { Link } from 'react-router-dom';
import {
  MessageCircle,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Github,
} from 'lucide-react';

const WHATSAPP_LINK =
  'https://wa.me/6285861821370?text=Halo%20SEPROX,%20saya%20ingin%20konsultasi%20project%20aplikasi';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { name: 'Website Development', path: '/services' },
  { name: 'Mobile App', path: '/services' },
  { name: 'API & Backend', path: '/services' },
  { name: 'Skripsi & Tugas', path: '/services' },
];

export const Footer = () => {
  return (
    <footer className="bg-seprox-blue-900 text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/seprox_logo.png"
                alt="SEPROX"
                className="h-12 w-auto brightness-0 invert"
              />
              <span className="text-2xl font-bold">SEPROX</span>
            </Link>

            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Jasa pembuatan aplikasi profesional. Website, mobile app, API, dan
              solusi digital untuk bisnis Anda.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <MessageCircle className="h-5 w-5 text-accent" />
                  +62 858-6182-1370
                </a>
              </li>

              <li>
                <a
                  href="mailto:hello@seprox.id"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  hello@seprox.id
                </a>
              </li>

              <li>
                <div className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  Karawang, Indonesia
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} SEPROX. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Built with by SEPROX Team
          </p>
        </div>
      </div>
    </footer>
  );
};
