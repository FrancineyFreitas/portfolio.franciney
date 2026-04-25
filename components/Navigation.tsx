"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe, Home, User, Briefcase, Code, Mail, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  // Função para gerar o href correto baseado na página atual
  const getHref = (key: string, baseHref: string) => {
    // Se estamos na página home, usar âncora simples
    if (pathname === '/' || pathname === '/eng') {
      return baseHref;
    }
    
    // Se estamos em outra página, usar caminho completo
    if (baseHref.startsWith('#')) {
      return locale === 'en' ? `/eng${baseHref}` : `/${baseHref}`;
    }
    
    return baseHref;
  };

  const navItems = [
    { key: 'home', href: locale === 'en' ? '/eng' : '/', icon: Home },
    { key: 'about', href: getHref('about', locale === 'en' ? '/eng#about' : '#about'), icon: User },
    { key: 'experience', href: getHref('experience', locale === 'en' ? '/eng#experience' : '#experience'), icon: Briefcase },
    { key: 'skills', href: getHref('skills', locale === 'en' ? '/eng#skills' : '#skills'), icon: Code },
    { key: 'landingPages', href: locale === 'en' ? '/eng/landing-pages' : '/landing-pages', icon: Layout },
    { key: 'contact', href: getHref('contact', locale === 'en' ? '/eng#contact' : '#contact'), icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-0 w-full flex justify-center z-50"
    >
      {/* Modern Navigation Bar */}
      <div className="bg-background/90 backdrop-blur-lg border border-border rounded-full px-4 py-2 shadow-xl dark:shadow-2xl dark:shadow-black/50">
        <div className="flex items-center space-x-2">
          {/* Logo Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={locale === 'en' ? '/eng' : '/'}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Home className="h-5 w-5" />
            </Link>
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden sm:flex items-center space-x-1">
            {navItems.slice(1).map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-3 py-2 rounded-full text-foreground hover:bg-muted transition-colors duration-200 group"
                  >
                    <IconComponent className="h-4 w-4 group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      {t.nav[item.key as keyof typeof t.nav]}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-1">
            {/* Language Toggle */}
            <div className="hidden md:flex items-center space-x-1 px-2 py-1 rounded-full bg-muted/50">
              <Globe className="h-3 w-3 text-muted-foreground" />
              <Switch
                checked={locale === 'en'}
                onCheckedChange={() => setLocale(locale === 'en' ? 'pt' : 'en')}
                className="scale-75"
              />
              <span className="text-xs font-medium text-muted-foreground">
                {locale === 'en' ? 'EN' : 'PT'}
              </span>
            </div>

            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  console.log('Theme toggle clicked, current theme:', theme);
                  toggleTheme();
                }}
                className="w-10 h-10 rounded-full hover:bg-muted"
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-full"
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full mt-2 left-0 right-0 sm:hidden"
          >
            <div className="bg-background/95 backdrop-blur-lg border border-border rounded-2xl px-4 py-3 shadow-xl">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.key}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 px-3 py-2 rounded-full text-foreground hover:bg-muted transition-colors duration-200 group"
                      >
                        <IconComponent className="h-4 w-4 group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          {t.nav[item.key as keyof typeof t.nav]}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Mobile Controls */}
                <div className="flex items-center justify-between px-3 py-2 mt-3 pt-3 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <Switch
                      checked={locale === 'en'}
                      onCheckedChange={() => setLocale(locale === 'en' ? 'pt' : 'en')}
                      className="scale-75"
                    />
                    <span className="text-sm font-medium text-muted-foreground">
                      {locale === 'en' ? 'EN' : 'PT'}
                    </span>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      console.log('Mobile theme toggle clicked, current theme:', theme);
                      toggleTheme();
                    }}
                    className="w-8 h-8 rounded-full"
                    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                  >
                    {theme === 'light' ? (
                      <Moon className="h-4 w-4" />
                    ) : (
                      <Sun className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
