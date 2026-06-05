"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Zap, Palette, Clock, Scale, ArrowRight, Newspaper, Globe, TrendingUp, Users, Shield, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function LandingPages() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: Smartphone,
      title: t.landingPages.features.responsive,
      description: "Design adaptável para todos os dispositivos"
    },
    {
      icon: Zap,
      title: t.landingPages.features.optimized,
      description: "Estratégias comprovadas de conversão"
    },
    {
      icon: Palette,
      title: t.landingPages.features.modern,
      description: "Interface moderna e profissional"
    },
    {
      icon: Clock,
      title: t.landingPages.features.fast,
      description: "Performance otimizada para velocidade"
    }
  ];

  const professionalProjects = [
    {
      id: "konneqt",
      title: t.landingPages.konneqt.title,
      description: t.landingPages.konneqt.description,
      category: t.landingPages.konneqt.category,
      url: "https://konneqt.io/",
      icon: Shield,
      color: "from-cyan-600 to-blue-700",
      role: t.landingPages.konneqt.role,
      period: t.landingPages.konneqt.period,
      available: true
    }
  ];

  const newsSites = [
    {
      id: "ac24horas",
      title: "AC24Horas",
      description: "Portal de notícias do Acre com mais de 712 mil visitas mensais. Desenvolvido com foco em performance e experiência do usuário.",
      category: "Portal de Notícias",
      url: "https://ac24horas.com/",
      icon: Newspaper,
      color: "from-red-600 to-red-700",
      visits: "712 mil/mês",
      available: true
    },
    {
      id: "ecosdanoticia",
      title: "Ecos da Notícia",
      description: "Site de notícias com 27 mil visitas mensais. Interface moderna e responsiva para máxima engajamento.",
      category: "Site de Notícias",
      url: "https://ecosdanoticia.net/",
      icon: Globe,
      color: "from-blue-600 to-blue-700",
      visits: "27 mil/mês",
      available: true
    },
    {
      id: "fatoscomnoticias",
      title: "Fatos com Notícias",
      description: "Portal de notícias focado em fatos e informações relevantes. Design limpo e navegação intuitiva.",
      category: "Portal de Notícias",
      url: "https://fatoscomnoticias.com/",
      icon: TrendingUp,
      color: "from-green-600 to-green-700",
      visits: "Em crescimento",
      available: true
    },
    {
      id: "acreagora",
      title: "Acre Agora",
      description: "Portal de notícias do Acre com 10 mil visitas mensais. Foco em notícias locais e regionais.",
      category: "Portal Regional",
      url: "https://acreagora.com/",
      icon: Users,
      color: "from-purple-600 to-purple-700",
      visits: "10 mil/mês",
      available: true
    }
  ];

  const landingPageModels = [
    {
      id: "google-ads-course",
      title: "Google Ads Descomplicado 2.0",
      description: "Landing page de vendas para curso online com alta conversão e design profissional.",
      category: "Curso Online",
      image: "/api/placeholder/400/250",
      icon: TrendingUp,
      color: "from-green-600 to-blue-600",
      href: "/landing-pages/google-ads-course",
      available: true,
      price: "R$ 19,90",
      badge: "Mais Vendido"
    },
    {
      id: "lawyer",
      title: t.landingPages.models.lawyer.title,
      description: t.landingPages.models.lawyer.description,
      category: t.landingPages.models.lawyer.category,
      image: "/api/placeholder/400/250",
      icon: Scale,
      color: "from-blue-600 to-indigo-700",
      href: "/landing-pages/lawyer",
      available: true
    },
    {
      id: "coming-soon-1",
      title: "Consultoria Empresarial",
      description: "Landing page para consultores empresariais e coaches executivos.",
      category: "Serviços Profissionais",
      image: "/api/placeholder/400/250",
      icon: ExternalLink,
      color: "from-gray-400 to-gray-500",
      href: "#",
      available: false
    },
    {
      id: "coming-soon-2",
      title: "Clínica Médica",
      description: "Página de conversão para clínicas e consultórios médicos.",
      category: "Saúde",
      image: "/api/placeholder/400/250",
      icon: ExternalLink,
      color: "from-gray-400 to-gray-500",
      href: "#",
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-\[\#fafafa\] dark:bg-\[\#000000\] transition-colors">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-4xl md:text-6xl font-black mb-6 text-foreground tracking-tight">
                {t.landingPages.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t.landingPages.subtitle}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t.landingPages.description}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full text-center p-6 hover:shadow-xl transition-all duration-300 group-hover:border-primary/50 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
                    <CardContent className="space-y-4">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.landingPages.professionalProjects}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.landingPages.professionalProjectsSubtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:border-primary/50 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
                    <div className="relative">
                      <div className={`h-40 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                        <project.icon className="h-16 w-16 text-white opacity-90" />
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary text-white font-semibold">
                          {project.role}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                      <Badge variant="outline" className="w-fit text-xs">
                        {project.category}
                      </Badge>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Building2 className="h-3 w-3" />
                        <span>{project.period}</span>
                      </div>

                      <div className="pt-4">
                        <Button
                          asChild
                          variant="outline"
                          className="w-full group-hover:scale-105 transition-transform"
                        >
                          <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            {t.landingPages.visitSite}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Sites Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sites de Notícias Desenvolvidos
              </h2>
              <p className="text-lg text-muted-foreground">
                Portais de notícias com alta performance e milhões de acessos mensais
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newsSites.map((site, index) => (
                <motion.div
                  key={site.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:border-primary/50 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
                    <div className="relative">
                      <div className={`h-32 bg-gradient-to-r ${site.color} flex items-center justify-center`}>
                        <site.icon className="h-12 w-12 text-white opacity-90" />
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800 font-semibold">
                          {site.visits}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {site.title}
                        </CardTitle>
                      </div>
                      <Badge variant="outline" className="w-fit text-xs">
                        {site.category}
                      </Badge>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">
                        {site.description}
                      </p>

                      <div className="pt-4">
                        <Button
                          asChild
                          variant="outline"
                          className="w-full group-hover:scale-105 transition-transform"
                        >
                          <a 
                            href={site.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            Visitar Site
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Landing Page Models */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Modelos Disponíveis
              </h2>
              <p className="text-lg text-muted-foreground">
                Escolha o modelo ideal para seu negócio
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {landingPageModels.map((model, index) => (
                <motion.div
                  key={model.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:border-primary/50 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
                    <div className="relative">
                      <div className={`h-48 bg-gradient-to-r ${model.color} flex items-center justify-center`}>
                        <model.icon className="h-16 w-16 text-white opacity-80" />
                      </div>
                      {model.badge && model.available && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-green-600 text-white font-semibold">
                            {model.badge}
                          </Badge>
                        </div>
                      )}
                      {!model.available && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-gray-500 text-white">
                            {t.landingPages.comingSoon}
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {model.title}
                        </CardTitle>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {model.category}
                      </Badge>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">
                        {model.description}
                      </p>

                      {model.price && (
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-green-600">
                            {model.price}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            Preço promocional
                          </span>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {features.slice(0, 2).map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="secondary" className="text-xs">
                            {feature.title}
                          </Badge>
                        ))}
                      </div>

                      <div className="pt-4">
                        {model.available ? (
                          <Button
                            asChild
                            variant="modern"
                            className="w-full group-hover:scale-105 transition-transform"
                          >
                            <Link href={model.href} className="flex items-center justify-center gap-2">
                              {t.landingPages.viewDemo}
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            disabled
                            className="w-full"
                          >
                            {t.landingPages.comingSoon}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
                <CardContent>
                  <h2 className="text-3xl font-bold mb-4">
                    Precisa de uma Landing Page Personalizada?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Entre em contato para desenvolvermos uma solução exclusiva para seu negócio.
                  </p>
                  <Button
                    asChild
                    variant="modern"
                    size="lg"
                    className="px-8 py-3 text-lg font-semibold"
                  >
                    <Link href="/#contact" className="flex items-center gap-2">
                      Solicitar Orçamento
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
