"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Testimonials() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const testimonials = [
    t.testimonials.testimonialsItems.layane,
    t.testimonials.testimonialsItems.myria,
    t.testimonials.testimonialsItems.ellen,
    t.testimonials.testimonialsItems.carlos,
  ];

  return (
    <section id="testimonials" className="py-20 min-h-screen">
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
              {t.testimonials.title}
            </h2>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <Card className="h-full p-6 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-card to-muted/20 border-primary/20">
                  <CardContent className="flex flex-col h-full">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-primary opacity-50" />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-1">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Person Info */}
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-primary/20">
                        <Image
                          src={testimonial.photo}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
