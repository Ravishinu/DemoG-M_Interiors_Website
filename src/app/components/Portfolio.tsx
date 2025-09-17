"use client"

import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

interface CardData {
    id: string;
    image: string;
    location?: string;
    title?: string;
    description?: string;
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
                id: 'res-1',
                image: '/Residential/IMG_20231211_183215282.jpg',
                category: 'residential',
                subcategory: 'TV Unit'
            },
            {
                id: 'res-2',
                image: '/Residential/IMG_20250308_232455.jpg',
                category: 'residential',
                subcategory: 'Bedroom Wardrobe'
            },
            {
                id: 'res-3',
                image: '/Residential/IMG_20250308_232004.jpg',
                category: 'residential',
                subcategory: 'False Ceiling Design'
            },
            {
                id: 'res-4',
                image: '/Residential/IMG_20250308_231654.jpg',
                category: 'residential',
                subcategory: 'Modular Kitchen'
            },
            {
                id: 'res-5',
                image: '/Residential/IMG_20250307_213349.jpg',
                category: 'residential',
                subcategory: 'Dining Partition'
            },
            {
                id: 'res-6',
                image: '/Residential/IMG_20250307_213229.jpg',
                category: 'residential',
                subcategory: 'Pooja Room'
            },
            {
                id: 'res-7',
                image: '/Residential/IMG-20240927-WA0017.jpg',
                category: 'residential',
                subcategory: 'Texture / Wallpaper'
            },
            {
                id: 'res-8',
                image: '/Residential/IMG-20240927-WA0026.jpg',
                category: 'residential',
                subcategory: 'Restroom Variety Box'
            },
            {
                id: 'res-9',
                image: '/Residential/IMG_20231221_150640607.jpg',
                category: 'residential',
                subcategory: 'TV Unit'
            },
            {
                id: 'res-10',
                image: '/Residential/IMG_20250129_174051.jpg',
                category: 'residential',
                subcategory: 'Bedroom Wardrobe'
            },
            {
                id: 'res-11',
                image: '/Residential/IMG_20250307_213106.jpg',
                category: 'residential',
                subcategory: 'False Ceiling Design'
            },
            {
                id: 'res-12',
                image: '/Residential/IMG_20250307_213122.jpg',
                category: 'residential',
                subcategory: 'Modular Kitchen'
            },
            {
                id: 'res-13',
                image: '/Residential/IMG-20240927-WA0008.jpg',
                category: 'residential',
                subcategory: 'Dining Partition'
            }
        ]
    },
    commercial: {
        datas: [
            // Commercial images from public/Commercial directory
            {
                id: 'com-1',
                image: '/Commercial/Commercial_1.jpg',
                title: 'Commercial Project 1',
                description: 'Professional commercial interior design',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'All'
            },
            {
                id: 'com-2',
                image: '/Commercial/Commercial_2.jpg',
                title: 'Commercial Project 2',
                description: 'Professional commercial interior design',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'All'
            },
            {
                id: 'com-3',
                image: '/Commercial/Commercial_3.jpg',
                title: 'Commercial Project 3',
                description: 'Professional commercial interior design',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'All'
            },
            {
                id: 'com-4',
                image: '/Commercial/Commercial_4.jpg',
                title: 'Commercial Project 4',
                description: 'Professional commercial interior design',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'All'
            },
            {
                id: 'com-5',
                image: '/Commercial/IMG-20230820-WA0013.jpg',
                title: 'Commercial Project 5',
                description: 'Professional commercial interior design',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'All'
            },
            {
                id: 'com-6',
                image: '/Commercial/IMG-20230820-WA0016.jpg',
                title: 'Commercial Project 6',
                description: 'Professional commercial interior design',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'All'
            },
            {
                id: 'com-7',
                image: '/Commercial/IMG-20230820-WA0022.jpg',
                title: 'Commercial Project 7',
                description: 'Professional commercial interior design',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'All'
            },
            {
                id: 'com-8',
                image: '/Commercial/IMG-20230820-WA0027.jpg',
                title: 'Commercial Project 8',
                description: 'Professional commercial interior design',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'All'
            },
            {
                id: 'com-9',
                image: '/Commercial/IMG-20230820-WA0028.jpg',
                title: 'Commercial Project 9',
                description: 'Professional commercial interior design',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'All'
            },
            {
                id: 'com-10',
                image: '/Commercial/IMG-20230820-WA0032.jpg',
                title: 'Commercial Project 10',
                description: 'Professional commercial interior design',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'All'
            },
            {
                id: 'com-11',
                image: '/Commercial/IMG_20230821_132358268.jpg',
                title: 'Commercial Project 11',
                description: 'Professional commercial interior design',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'All'
            },
            {
                id: 'c2',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-2.jpg',
                title: 'Executive Conference Room',
                description: 'Professional conference room with premium finishes',
                location: 'Mumbai',
                category: 'commercial',
                subcategory: 'Conference Hall'
            },
            {
                id: 'c3',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-3.jpg',
                title: 'Luxury Office Lobby',
                description: 'Grand lobby with modern lighting and furniture',
                location: 'Delhi',
                category: 'commercial',
                subcategory: 'Reception/Tables'
            },
            {
                id: 'c4',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-4.jpg',
                title: 'Modern Workspace',
                description: 'Open office layout with ergonomic workstations',
                location: 'Hyderabad',
                category: 'commercial',
                subcategory: 'Meeting Area'
            },
            {
                id: 'c5',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-5.jpg',
                title: 'Executive Office',
                description: 'Luxurious private office with premium finishes',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'MD Rooms/Tables'
            },
            {
                id: 'c6',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-6.jpg',
                title: 'Modern Conference Hall',
                description: 'State-of-the-art conference facility',
                location: 'Mumbai',
                category: 'commercial',
                subcategory: 'Conference Hall'
            },
            {
                id: 'c7',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-7.jpg',
                title: 'Contemporary Office Space',
                description: 'Sleek and functional workspace design',
                location: 'Delhi',
                category: 'commercial',
                subcategory: 'Meeting Area'
            },
            {
                id: 'c8',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-8.jpg',
                title: 'Executive Boardroom',
                description: 'Elegant boardroom with premium furnishings',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'Conference Hall'
            },
            {
                id: 'c9',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-9.jpg',
                title: 'Modern Office Interior',
                description: 'Contemporary workspace with clean lines',
                location: 'Mumbai',
                category: 'commercial',
                subcategory: 'Meeting Area'
            },
            {
                id: 'c10',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-10.jpg',
                title: 'Luxury Office Space',
                description: 'High-end office with premium finishes',
                location: 'Delhi',
                category: 'commercial',
                subcategory: 'MD Rooms/Tables'
            },
            {
                id: 'c11',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-11.jpg',
                title: 'Executive Meeting Room',
                description: 'Sophisticated meeting space with modern design',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'Conference Hall'
            },
            {
                id: 'c12',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-12.jpg',
                title: 'Modern Office Design',
                description: 'Contemporary workspace with natural light',
                location: 'Mumbai',
                category: 'commercial',
                subcategory: 'Meeting Area'
            },
            {
                id: 'c13',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-13.jpg',
                title: 'Luxury Office Reception',
                description: 'Grand reception with elegant design elements',
                location: 'Delhi',
                category: 'commercial',
                subcategory: 'Reception/Tables'
            },
            {
                id: 'c14',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-14.jpg',
                title: 'Modern Conference Facility',
                description: 'State-of-the-art conference room design',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'Conference Hall'
            },
            {
                id: 'c15',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-15.jpg',
                title: 'Executive Workspace',
                description: 'Luxurious office with premium finishes',
                location: 'Mumbai',
                category: 'commercial',
                subcategory: 'MD Rooms/Tables'
            },
            {
                id: 'c16',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-16.jpg',
                title: 'Modern Office Interior',
                description: 'Contemporary design with clean lines',
                location: 'Delhi',
                category: 'commercial',
                subcategory: 'Meeting Area'
            },
            {
                id: 'c17',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-17.jpg',
                title: 'Luxury Boardroom',
                description: 'Elegant boardroom with premium furnishings',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'Conference Hall'
            },
            {
                id: 'c18',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-18.jpg',
                title: 'Modern Office Space',
                description: 'Contemporary workspace design',
                location: 'Mumbai',
                category: 'commercial',
                subcategory: 'Meeting Area'
            },
            {
                id: 'c19',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-19.jpg',
                title: 'Executive Office Interior',
                description: 'Luxurious office with modern design',
                location: 'Delhi',
                category: 'commercial',
                subcategory: 'MD Rooms/Tables'
            },
            {
                id: 'c20',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-20.jpg',
                title: 'Modern Conference Room',
                description: 'State-of-the-art meeting space',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'Conference Hall'
            },
            {
                id: 'c21',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-21.jpg',
                title: 'Contemporary Office Design',
                description: 'Sleek and functional workspace',
                location: 'Mumbai',
                category: 'commercial',
                subcategory: 'Meeting Area'
            },
            {
                id: 'c22',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-22.jpg',
                title: 'Luxury Office Space',
                description: 'Elegant design with premium finishes',
                location: 'Delhi',
                category: 'commercial',
                subcategory: 'MD Rooms/Tables'
            },
            {
                id: 'c23',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-23.jpg',
                title: 'Modern Boardroom',
                description: 'Contemporary meeting space design',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'Conference Hall'
            },
            {
                id: 'c24',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-24.jpg',
                title: 'Executive Workspace',
                description: 'Luxurious office with modern design',
                location: 'Mumbai',
                category: 'commercial',
                subcategory: 'MD Rooms/Tables'
            },
            {
                id: 'c25',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-25.jpg',
                title: 'Modern Office Interior',
                description: 'Contemporary workspace with clean lines',
                location: 'Delhi',
                category: 'commercial',
                subcategory: 'Meeting Area'
            },
            {
                id: 'c26',
                image: '/assets/portfolio/commercial/IMG-20240915-212500-26.jpg',
                title: 'Luxury Conference Hall',
                description: 'Elegant conference facility',
                location: 'Bangalore',
                category: 'commercial',
                subcategory: 'Conference Hall'
            }
        ]
    },
    restaurant: {
        datas: [
            {
                id: 'r1',
                image: '/Restaurant/Res_1.jpg',
                title: 'Modern Restaurant Interior',
                description: 'Contemporary restaurant design with elegant lighting',
                location: 'Bangalore',
                category: 'restaurant',
                subcategory: 'Reception / Tables'
            },
            {
                id: 'r2',
                image: '/Restaurant/IMG-20240919-WA0026.jpg',
                title: 'Luxury Dinning Area',
                description: 'Sophisticated dining space with premium finishes',
                location: 'Bangalore',
                category: 'restaurant',
                subcategory: 'Furniture Works'
            },
            {
                id: 'r3',
                image: '/Restaurant/IMG-20240919-WA0027.jpg',
                title: 'Elegant Bar Counter',
                description: 'Stylish bar area with modern seating',
                location: 'Bangalore',
                category: 'restaurant',
                subcategory: 'Kitchen Unit'
            },
            {
                id: 'r4',
                image: '/Restaurant/IMG-20240919-WA0028.jpg',
                title: 'Contemporary Cafe Space',
                description: 'Chic and modern cafe interior',
                location: 'Bangalore',
                category: 'restaurant',
                subcategory: 'Partition Units'
            }
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