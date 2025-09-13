"use client"

import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

interface CardData {
    id: string;
    image: string;
    location: string;
    title: string;
    description: string;
    category: string;
    subcategory: string;
}

const subcategories = {
    residential: [
        "TV Unit",
        "False Ceiling Design",
        "Bedroom Wardrobe",
        "Modular Kitchen",
        "Dining Partition",
        "Pooja Room",
        "Restroom Variety Box",
        "Texture / Wallpaper"
    ],
    commercial: [
        "MD Rooms/Tables",
        "Conference Hall",
        "Meeting Area",
        "Reception/Tables",
        "Party Unit",
        "Pooja Room",
        "False Ceiling Design",
        "Texture / Wallpaper"
    ],
    restaurant: [
        "Reception / Tables",
        "Kitchen Unit",
        "Partition Units",
        "False Ceiling",
        "Furniture Works",
        "Texture / Wallpaper"
    ]
};

// Sample data structure for demonstration
const sampleData: Record<string, { datas: CardData[] }> = {
    residential: {
        datas: [
            {
                id: '1',
                image: '/placeholder-residential.jpg',
                title: 'Modern Living Room',
                description: 'Elegant living room with modern furniture',
                location: 'Bangalore',
                category: 'residential',
                subcategory: 'TV Unit'
            },
            // Add more sample data as needed
        ]
    },
    commercial: {
        datas: [
            {
                id: 'c1',
                image: '/placeholder-commercial.jpg',
                title: 'Office Space',
                description: 'Modern office interior design',
                location: 'Mumbai',
                category: 'commercial',
                subcategory: 'Conference Hall'
            },
            // Add more sample data as needed
        ]
    },
    restaurant: {
        datas: [
            {
                id: 'r1',
                image: '/placeholder-restaurant.jpg',
                title: 'Fine Dining',
                description: 'Elegant restaurant interior',
                location: 'Delhi',
                category: 'restaurant',
                subcategory: 'Reception / Tables'
            },
            // Add more sample data as needed
        ]
    }
};

const Portfolio: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<keyof typeof subcategories>('residential');
    const [activeSubcategory, setActiveSubcategory] = useState<string>('All');
    const [cardDatas, setCardDatas] = useState<CardData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                // In a real app, you would fetch from an API
                // const response = await axios.get(`/api/portfolio/${activeCategory}`);
                // setCardDatas(response.data);
                
                // For now, using sample data
                setTimeout(() => {
                    setCardDatas(sampleData[activeCategory]?.datas || []);
                    setIsLoading(false);
                }, 500);
            } catch (error) {
                console.error('Error fetching portfolio data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [activeCategory]);

    const filteredCards = activeSubcategory === 'All' 
        ? cardDatas 
        : cardDatas.filter(card => card.subcategory === activeSubcategory);

    const handleCategoryChange = (category: keyof typeof subcategories) => {
        setActiveCategory(category);
        setActiveSubcategory('All');
    };

    const handleSubcategoryChange = (subcategory: string) => {
        setActiveSubcategory(subcategory);
    };

    return (
        <section id="portfolio" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 text-sm font-medium text-gray-800 bg-gray-200 rounded-full mb-4">
                        Our Work
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Portfolio
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our collection of interior design projects across residential, commercial, and restaurant spaces.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
                        {Object.keys(subcategories).map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category as keyof typeof subcategories)}
                                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                                    activeCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Subcategory Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => handleSubcategoryChange('All')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            activeSubcategory === 'All'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        All
                    </button>
                    {subcategories[activeCategory]?.map((subcategory) => (
                        <button
                            key={subcategory}
                            onClick={() => handleSubcategoryChange(subcategory)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                activeSubcategory === subcategory
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {subcategory}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : filteredCards.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCards.map((card) => (
                            <ProjectCard
                                key={card.id}
                                id={card.id}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                location={card.location}
                                type={card.category}
                                subcategory={card.subcategory}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No projects found in this category.</p>
                    </div>
                )}

                {/* View All Button */}
                <div className="mt-10 text-center">
                    <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;