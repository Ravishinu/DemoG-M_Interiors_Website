"use client";

import React from "react";

interface ReviewCardProps {
    name: string;
    role: string;
    location: string;
    project: string;
    rating: number;
    content: string;
    avatar: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
    name,
    role,
    location,
    project,
    rating,
    content,
    avatar
}) => {
    return (
        <div className="bg-white w-full border-[1px] border-gray-200 rounded-lg px-[1.5rem] py-[1.5rem] duration-150 hover:shadow-lg h-full flex flex-col">
            <div className="flex-grow">
                <div className="bg-amber-100 rounded-full w-fit p-[0.75rem] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-amber-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>
                </div>
                <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <svg 
                            key={index} 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill={index < rating ? "currentColor" : "none"} 
                            stroke="currentColor"
                            className={`size-5 ${index < rating ? 'text-amber-500' : 'text-gray-300'}`}
                        >
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                    ))}
                </div>
                <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed">"{content}"</p>
                </div>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                        <img 
                            src={avatar || "/profile-placeholder.svg"} 
                            alt={`${name}'s profile`} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/profile-placeholder.svg";
                            }}
                        />
                    </div>  
                    <div>
                        <h3 className="font-medium text-gray-900">{name}</h3>
                        <p className="text-sm text-gray-600">{role} • {location}</p>
                        <p className="text-xs font-medium text-amber-600 mt-0.5">{project}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;