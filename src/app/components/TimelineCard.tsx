"use client";

import React, { useState } from "react";
import Image from 'next/image';

interface TimelineCardProps {
  date: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  client: string;
  location: string;
  index?: number;
}

const TimeLineCard: React.FC<TimelineCardProps> = ({
  date,
  title,
  description,
  image,
  tags,
  client,
  location,
  index = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li 
      className="relative mb-16 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 -translate-x-1/2 z-10">
        <div className={`
          w-4 h-4 rounded-full border-4 border-white shadow-lg
          transition-all duration-300 ease-out
          ${isHovered ? 'bg-amber-500 scale-125' : 'bg-white'}
        `}></div>
      </div>
      
      {/* Animated line connector */}
      <div className="absolute left-0 top-6 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2">
        <div 
          className={`
            absolute top-0 left-0 w-full h-0 bg-amber-400
            transition-all duration-1000 ease-out
            ${isHovered ? 'h-full' : 'h-0'}
          `}
        ></div>
      </div>

      {/* Card */}
      <div className={`
        relative ml-12 transition-all duration-300 ease-out
        ${index % 2 === 0 ? 'md:ml-0 md:mr-12 md:flex-row-reverse' : ''}
      `}>
        {/* Image */}
        <div className={`
          relative h-80 overflow-hidden rounded-xl shadow-lg
          md:flex-1 md:max-w-md
          ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}
        `}>
          <div className="relative h-full w-full">
            <Image 
              src={image} 
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className={`object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
              priority={index < 2}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/placeholder-project.jpg';
              }}
            />
          </div>
          <div className={`
            absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500
            flex items-end p-6
          `}>
            <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-2 text-amber-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">{location}</span>
              </div>
              <h4 className="text-xl font-bold">{title}</h4>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className={`
          bg-white p-8 rounded-xl shadow-lg border border-gray-100 mt-6
          md:flex-1 md:mt-0 md:flex md:flex-col md:justify-center
          ${index % 2 === 0 ? 'md:items-start md:text-right' : ''}
        `}>
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <time className="inline-block px-3 py-1 text-sm font-medium text-amber-600 bg-amber-50 rounded-full">
                {date}
              </time>
              <span className="ml-2 text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                {client}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              {title}
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {description}
            </p>
            
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs px-3 py-1.5 bg-gray-50 text-gray-600 rounded-full 
                    border border-gray-100 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-100
                    transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="
                inline-flex items-center text-amber-600 font-medium text-sm 
                group-hover:text-amber-700 transition-colors
                hover:underline underline-offset-4
              ">
                View Project
                <svg 
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TimeLineCard;