import React from "react";

interface CardProps {
    id: string;
    image: string;
    title: string;
    description: string;
    location: string;
    type: string;
    subcategory: string;
}

const ProjectCard: React.FC<CardProps> = ({
    id,
    image,
    title,
    description,
    location,
    type,
    subcategory
}) => {
    return (
        <div className="w-full shadow-lg bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative group">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-64 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-4">
                        <button className="bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="w-6 h-6 text-gray-800"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" 
                                />
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" 
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                        {type}
                    </span>
                    <span className="text-sm font-medium text-gray-600">
                        {location}
                    </span>
                </div>
                
                <div className="mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
                        {title}
                    </h3>
                    <span className="inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full mb-2">
                        {subcategory}
                    </span>
                    <p className="text-sm text-gray-600 line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;