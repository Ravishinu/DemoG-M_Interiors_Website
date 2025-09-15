import React from "react";
import ServiceCard from "./ServiceCard";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactElement<IconProps>;
    features: string[];
}

const Services: React.FC = () => {
    const services: Service[] = [
        {
            id: 1,
            title: "Residential Design",
            description: "Transform your home into a beautiful, functional space that reflects your personal style and enhances your daily living experience.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            ),
            features: [
                "Space planning & layout optimization",
                "Custom furniture & decor selection",
                "Color scheme & material selection",
                "Lighting design & implementation"
            ]
        },
        {
            id: 2,
            title: "Commercial Design",
            description: "Create inspiring workspaces that boost productivity, reflect your brand identity, and impress clients and employees alike.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18m-10.5 0v-9m0 0H9m3 0h3m-3 0V3" />
                </svg>
            ),
            features: [
                "Office space planning & design",
                "Reception & common area design",
                "Brand integration & wayfinding",
                "Furniture specification & procurement"
            ]
        },
        {
            id: 3,
            title: "Restaurant Design",
            description: "Design dining spaces that create memorable experiences, optimize workflow, and maximize seating capacity and comfort.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
            ),
            features: [
                "Dining area layout & design",
                "Kitchen workflow optimization",
                "Bar & waiting area design",
                "Branding & atmosphere creation"
            ]
        }
    ];

    return (
        <section id="services" className="flex justify-center bg-gray-100 py-16">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <header className="text-center mb-12">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-200 text-gray-800 rounded-full mb-4">
                        Our Services
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Offer</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        From initial concept to final installation, we provide comprehensive interior design services tailored to transform your space into something extraordinary.
                    </p>
                </header>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-white text-center py-8 px-4 border border-gray-300 rounded-lg max-w-4xl mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Transform Your Space?</h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Let's discuss your project and create a design solution that exceeds your expectations.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button 
                            className="px-6 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                            aria-label="Schedule a consulting session"
                        >
                            Schedule Consulting
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>
                        <button 
                            className="px-6 py-2 border border-gray-600 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                            aria-label="Get a free quote"
                        >
                            Get Free Quote
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;