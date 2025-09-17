import React from "react";

interface CardProps {
    id: string;
    image: string;
    subcategory: string;
}

const ProjectCard: React.FC<CardProps> = ({
    id,
    image,
    subcategory
}) => {
    return (
        <div className="w-full aspect-square overflow-hidden rounded-lg">
            <img 
                src={image} 
                alt={subcategory} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                loading="lazy"
            />
        </div>
    );
};

export default ProjectCard;