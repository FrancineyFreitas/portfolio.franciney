"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
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

  const education = [
    {
      degree: t.about.educationItems.softwareEngineering.degree,
      institution: t.about.educationItems.softwareEngineering.institution,
      period: t.about.educationItems.softwareEngineering.period,
      status: t.about.ongoing,
    },
    {
      degree: t.about.educationItems.systemsAnalysis.degree,
      institution: t.about.educationItems.systemsAnalysis.institution,
      period: t.about.educationItems.systemsAnalysis.period,
      status: t.about.completed,
    },
    {
      degree: t.about.educationItems.mba.degree,
      institution: t.about.educationItems.mba.institution,
      period: t.about.educationItems.mba.period,
      status: t.about.completed,
    },
    {
      degree: t.about.educationItems.physiotherapy.degree,
      institution: t.about.educationItems.physiotherapy.institution,
      period: t.about.educationItems.physiotherapy.period,
      status: t.about.completed,
    },
  ];

  const certifications = [
    {
      name: t.about.certificationsItems.cloudComputing,
      year: "2026",
    },
    {
      name: t.about.certificationsItems.databaseAdmin,
      year: "2026",
    },
    {
      name: t.about.certificationsItems.dataModeling,
      year: "2026",
    },
    {
      name: "Linkedin e Tiktok Ads: criação e estratégias de campanhas - Alura",
      year: "2025",
    },
    {
      name: "ChatGPT: Otimizando a qualidade dos resultados - Alura",
      year: "2025",
    },
    {
      name: "Engenharia de Prompt: Criando Prompts eficazes com IA generativa - Alura",
      year: "2025",
    },
    {
      name: t.about.certificationsItems.astfc,
      year: "2025",
    },
    {
      name: t.about.certificationsItems.cypress,
      year: "2024",
    },
    {
      name: "JavaScript para QAs - QAxperience",
      year: "2024",
    },
    {
      name: t.about.certificationsItems.security,
      year: "2024",
    },
    {
      name: t.about.certificationsItems.scrum,
      year: "2024",
    },
    {
      name: t.about.certificationsItems.cypressExpress,
      year: "2023",
    },
    {
      name: t.about.certificationsItems.ai,
      year: "2023",
    },
    {
      name: t.about.certificationsItems.fullstack,
      year: "2022",
    },
  ];


  return (
    <section id="about" className="py-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 text-foreground tracking-tight">
              {t.about.title}
            </h2>
          </motion.div>

          {/* Main Description */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t.about.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>


          {/* Education and Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    {t.about.education}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-l-4 border-primary pl-4 py-2"
                      >
                        <h4 className="font-semibold text-lg">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          edu.status === t.about.ongoing 
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        }`}>
                          {edu.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Award className="h-6 w-6 text-primary" />
                    {t.about.certifications}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{cert.name}</h4>
                          <p className="text-xs text-muted-foreground">{cert.year}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
