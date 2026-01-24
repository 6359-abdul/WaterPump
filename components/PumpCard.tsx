import React from 'react';

interface PumpCardProps {
    title: string;
    imageUrl: string;
}

const PumpCard: React.FC<PumpCardProps> = ({ title, imageUrl }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition p-6 cursor-pointer">
            <div className="h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded mb-4 flex items-center justify-center p-4">
                <img src={imageUrl} alt={title} className="max-w-full max-h-full object-contain" />
            </div>
            <h3 className="font-semibold text-slate-800 text-lg">{title}</h3>
            <p className="text-sm text-slate-500 mt-2">
                Reliable pumps built for durability and performance.
            </p>
            <button className="mt-4 text-blue-600 font-medium text-sm flex items-center hover:text-blue-800">
                Read More <span className="ml-2">→</span>
            </button>
        </div>
    );
};

export default PumpCard;
