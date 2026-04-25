"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t, locale } = useLanguage();
  
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "francineysfreitas@gmail.com",
      href: "mailto:francineysfreitas@gmail.com"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Cascavel - PR",
      href: "https://www.google.com/maps/place/Cascavel+-+PR/@-25.0126853,-53.5256493,146408m/data=!3m1!1e3!4m6!3m5!1s0x94f17f64f7507c29:0xfa1220399425243c!8m2!3d-24.9541356!4d-53.4802406!16zL20vMDRuZHh0?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Franciney Freitas",
      href: "https://www.linkedin.com/in/franciney-freitas-098410173/"
    }
  ];

  const quickLinks = [
    { name: t.nav.home, href: locale === 'en' ? '/eng' : '/' },
    { name: t.nav.about, href: locale === 'en' ? '/eng#about' : '#about' },
    { name: t.nav.experience, href: locale === 'en' ? '/eng#experience' : '#experience' },
    { name: t.nav.skills, href: locale === 'en' ? '/eng#skills' : '#skills' },
    { name: t.nav.landingPages, href: locale === 'en' ? '/eng/landing-pages' : '/landing-pages' },
    { name: t.nav.contact, href: locale === 'en' ? '/eng#contact' : '#contact' },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Franciney</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              {contactInfo.slice(0, 2).map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <info.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">{t.footer.navigation}</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <motion.a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <info.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{info.value}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center text-muted-foreground">
            <span>{t.footer.developedBy}</span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 {t.footer.rights}
            </p>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="h-8 w-8"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
