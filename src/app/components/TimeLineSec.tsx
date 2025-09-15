"use client";

import React, { useState } from "react";
import TimeLineCard from "./TimelineCard";

const projects = [
  {
    id: 1,
    date: "March 2024",
    title: "Luxury Penthouse Overlooking the City",
    description: "A stunning 5,000 sq ft penthouse with panoramic city views, featuring custom Italian furniture, smart home automation, and a rooftop garden.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    tags: ["Luxury", "Residential", "Smart Home"],
    client: "Private Client",
    location: "Race Course, Coimbatore"
  },
  {
    id: 2,
    date: "January 2024",
    title: "Modern Tech Office Space",
    description: "Collaborative workspace for a leading tech startup, featuring open-plan workstations, soundproof meeting pods, and vibrant breakout areas.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    tags: ["Commercial", "Office", "Ergonomic"],
    client: "TechNova Solutions",
    location: "RS Puram, Coimbatore"
  },
  {
    id: 3,
    date: "November 2023",
    title: "Boutique Hotel Lobby & Suites",
    description: "Elegant 20-room boutique hotel featuring a fusion of contemporary and traditional South Indian design elements in its lobby and guest suites.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Hospitality", "Luxury", "Boutique"],
    client: "The Heritage Group",
    location: "Gandhipuram, Coimbatore"
  },
  {
    id: 4,
    date: "August 2023",
    title: "Minimalist Family Residence",
    description: "4,200 sq ft family home with clean lines, natural materials, and seamless indoor-outdoor living spaces, designed for modern family life.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4df0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    tags: ["Residential", "Minimalist", "Family Home"],
    client: "The Sharma Family",
    location: "Saibaba Colony, Coimbatore"
  },
  {
    id: 5,
    date: "May 2023",
    title: "Fine Dining Restaurant",
    description: "Upscale restaurant featuring an open kitchen, private dining rooms, and a sophisticated bar area with custom lighting and bespoke furniture.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Commercial", "Restaurant", "Luxury"],
    client: "Spice Route Dining",
    location: "Brookefields, Coimbatore"
  }
];

const TimelineSec: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase())
      );

  const filterOptions = ["All", "Luxury", "Residential", "Commercial", "Hospitality"];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-6 py-2 mb-4 bg-white rounded-full shadow-sm">
            <span className="text-sm font-semibold tracking-wider text-amber-600 uppercase">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Design Excellence <span className="text-amber-600">Showcase</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Discover our curated collection of exceptional spaces that blend functionality with aesthetic appeal, 
            each reflecting our commitment to quality and innovation in interior design.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter.toLowerCase())}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeFilter === filter.toLowerCase() 
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-100' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Decorative elements */}
          <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-amber-400 via-amber-300 to-transparent -ml-px"></div>
          
          <ol className="relative space-y-24">
            {filteredProjects.map((project, index) => (
              <TimeLineCard
                key={project.id}
                date={project.date}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                client={project.client}
                location={project.location}
                index={index}
              />
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to transform your space?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Let's collaborate to create a space that perfectly reflects your style and meets your needs. 
              Our expert designers are ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-300 hover:shadow-lg">
                Book a Free Consultation
              </button>
              <button className="px-8 py-3.5 bg-white text-gray-700 font-medium rounded-xl border-2 border-gray-200 hover:border-amber-300 transition-all duration-300 hover:shadow-md">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSec;