import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const WHATSAPP_LINK =
  "https://wa.me/6285861821370?text=Halo%20SEPROX,%20saya%20ingin%20konsultasi%20project%20aplikasi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Navbar shadow when scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-card py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/seprox_logo.png" alt="SEPROX" className="h-10 w-auto" />
              <span className="text-xl font-bold text-foreground">SEPROX</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-accent hover:bg-seprox-gold-hover text-accent-foreground font-semibold shadow-gold transition-all hover:scale-105"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat WhatsApp
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[999] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background overlay */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Panel */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative mx-auto mt-4 w-[92%] rounded-2xl bg-white/90 backdrop-blur-xl shadow-xl border border-black/5 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4">
                <Link
                  to="/"
                  onClick={handleClose}
                  className="flex items-center gap-2"
                >
                  <img
                    src="/seprox_logo.png"
                    alt="SEPROX"
                    className="h-9 w-auto"
                  />
                  <span className="text-lg font-bold text-foreground">
                    SEPROX
                  </span>
                </Link>

                <button
                  onClick={handleClose}
                  className="p-2 rounded-lg hover:bg-black/5"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-foreground" />
                </button>
              </div>

              {/* Links */}
              <div className="px-5 pb-5">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={handleClose}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        location.pathname === link.path
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-black/5 hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <Button
                    asChild
                    className="mt-3 bg-accent hover:bg-seprox-gold-hover text-accent-foreground font-semibold w-full py-6 rounded-xl"
                  >
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
