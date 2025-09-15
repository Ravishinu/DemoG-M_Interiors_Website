"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Luxury Interior Design & Build",
      description: "From concept to completion, we create stunning spaces that reflect your personality and lifestyle.",
      image: "/assets/images/luxury-interior.jpg",
      cta: "Explore Our Work"
    },
    {
      title: "Modern Interiors for Contemporary Living",
      description: "Discover innovative design solutions that blend functionality with aesthetic appeal.",
      image: "https://images.unsplash.com/photo-1616486338818-3dcdc5e36841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      cta: "View Our Portfolio"
    },
    {
      title: "Elevate Your Space with Timeless Design",
      description: "Transform your home with our expert interior design services tailored to your unique style and needs.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      cta: "Start Your Design Journey"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="banner" className="relative h-screen max-h-[900px] overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 -z-10">
        <div key={currentSlide} className="absolute inset-0">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover w-full h-full transition-opacity duration-1000"
            priority
            style={{ opacity: 1 }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl text-white">
          {/* Tagline */}
          <div className="text-sm font-semibold tracking-wider text-amber-400 uppercase mb-4">
            Luxury Interior Design
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {slides[currentSlide].title}
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            {slides[currentSlide].description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => console.log('CTA clicked')}
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
            >
              {slides[currentSlide].cta}
            </button>
            <button
              onClick={() => console.log('Learn more clicked')}
              className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full border border-white/20 transition-colors duration-300"
            >
              Learn More
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="text-sm text-white/80 mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
    );
};


export default Banner;