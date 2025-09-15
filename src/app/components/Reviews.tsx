"use client";

import React from "react";
import ReviewCard from "./ReviewCard";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner",
    location: "Coimbatore",
    project: "Modern Apartment Makeover",
    rating: 5,
    content: "G&M Interiors transformed our 3BHK into a modern masterpiece. Their attention to detail and understanding of our needs was exceptional. Every corner reflects their craftsmanship.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Arjun Kapoor",
    role: "Restaurant Owner",
    location: "Race Course",
    project: "Fine Dining Restaurant",
    rating: 5,
    content: "The team's ability to blend aesthetics with functionality is remarkable. Our restaurant's new look has received countless compliments from customers. Truly professional service!",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    name: "Meera Nair",
    role: "CEO, TechStart",
    location: "RS Puram",
    project: "Corporate Office",
    rating: 4,
    content: "Working with G&M was a game-changer for our office space. They created a vibrant yet professional environment that boosts productivity. Their project management was flawless.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Vikram Menon",
    role: "Hotelier",
    location: "Gandhipuram",
    project: "Boutique Hotel Lobby",
    rating: 5,
    content: "The lobby redesign has significantly enhanced our guests' first impression. The team's creativity and attention to detail are unmatched in Coimbatore. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg"
  },
  {
    name: "Ananya Reddy",
    role: "Doctor",
    location: "Saibaba Colony",
    project: "Clinic Interior",
    rating: 4,
    content: "Our clinic needed a complete makeover that was both welcoming and functional. G&M delivered beyond our expectations. The space is now more efficient and patient-friendly.",
    avatar: "https://randomuser.me/api/portraits/women/53.jpg"
  },
  {
    name: "Rahul Iyer",
    role: "IT Professional",
    location: "Tatabad",
    project: "Smart Home Setup",
    rating: 5,
    content: "The smart home integration they did is seamless. They understood our techie requirements perfectly and delivered a modern, automated living space that's both beautiful and functional.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 text-sm font-medium text-amber-700 bg-amber-100 rounded-full mb-4">
            Client Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ReviewCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Ready to transform your space? Join our growing list of satisfied clients.
          </p>
          <button className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;