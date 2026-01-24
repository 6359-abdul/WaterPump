import React from 'react';

interface FeaturedPumpCardProps {
    title: string;
    imageUrl: string;
    features: string[];
    gradientFrom: string;
    gradientTo: string;
    onKnowMore: () => void;
}

const FeaturedPumpCard: React.FC<FeaturedPumpCardProps> = ({
    title,
    imageUrl,
    features,
    gradientFrom,
    gradientTo,
    onKnowMore
}) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg border p-6 hover:shadow-xl transition">
            <div className={`h-48 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-lg mb-6 flex items-center justify-center p-4`}>
                <img
                    src={imageUrl}
                    alt={title}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
            <h4 className="font-bold text-slate-800 mb-4 text-lg">
                {title}
            </h4>
            <div className="space-y-3">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-0.5">✓</span>
                        <span className="text-slate-600">{feature}</span>
                    </div>
                ))}
            </div>
            <button
                onClick={onKnowMore}
                className="mt-6 text-blue-600 font-semibold flex items-center hover:text-blue-800 transition"
            >
                Know More <span className="ml-2">→</span>
            </button>
        </div>
    );
};

export default FeaturedPumpCard;
