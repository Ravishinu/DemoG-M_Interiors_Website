"use client";

import React, { useState } from "react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { title, description, icon, features } = service;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white rounded-2xl overflow-hidden border border-gray-100 relative transition-all duration-300 ${
        isHovered ? 'shadow-lg -translate-y-1' : 'shadow-md'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-8">
        {/* Icon and Title */}
        <div className="flex items-start mb-6">
          <div className={`p-4 rounded-xl text-amber-600 transition-transform duration-300 ${
            isHovered ? 'bg-amber-100 scale-110' : 'bg-amber-50'
          }`}>
            {React.isValidElement(icon) && 
              React.cloneElement(icon, { 
                className: 'w-8 h-8',
              })
            }
          </div>
          <h3 className="ml-5 text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        {/* Features */}
        <div className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">What's Included</h4>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg 
                    className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Button */}
        <div className="mt-8">
          <button
            className={`w-full py-3.5 px-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
              isHovered || isExpanded 
                ? 'bg-amber-600 text-white' 
                : 'bg-gray-50 text-amber-600 hover:bg-amber-50'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Hover Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-transparent pointer-events-none"
        style={{ 
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </div>
  );
};

export default ServiceCard;