import React from 'react';
import { PumpDetail } from './types/pumpTypes';
import { pumpDetails } from './data/pumpData';

interface PumpDetailModalProps {
    pump: PumpDetail;
    onClose: () => void;
    onSelectPump: (pumpId: string) => void;
}

const PumpDetailModal: React.FC<PumpDetailModalProps> = ({ pump, onClose, onSelectPump }) => {
    return (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="fixed top-4 right-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-slate-100 transition"
                aria-label="Close"
            >
                <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 md:p-12">
                <div className="max-w-[1400px] mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{pump.title}</h1>
                    <p className="text-blue-100 text-lg">{pump.fullDescription}</p>
                </div>
            </div>

            {/* Large Image */}
            <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
                <img
                    src={pump.detailImage}
                    alt={pump.title}
                    className="max-w-full max-h-full object-contain"
                />
            </div>

            {/* Content Section */}
            <div className="max-w-[1400px] mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Table of Contents */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-4 bg-slate-50 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-slate-800 mb-4">Table of Contents</h3>
                            <ul className="space-y-2">
                                {pump.tableOfContents.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={`#section-${index}`}
                                            className="text-blue-600 hover:text-blue-800 text-sm transition block py-1"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-12">
                        {pump.sections.map((section, index) => (
                            <div key={index} id={`section-${index}`} className="scroll-mt-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{section.title}</h2>
                                <p className="text-slate-600 leading-relaxed text-lg">{section.content}</p>
                            </div>
                        ))}

                        {/* Related Blogs Section */}
                        <div className="mt-16 pt-8 border-t">
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Related Blogs</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {pumpDetails
                                    .filter(p => p.id !== pump.id)
                                    .slice(0, 3)
                                    .map((relatedPump) => (
                                        <div
                                            key={relatedPump.id}
                                            onClick={() => onSelectPump(relatedPump.id)}
                                            className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition group"
                                        >
                                            <div className="h-40 overflow-hidden bg-white flex items-center justify-center p-4">
                                                <img
                                                    src={relatedPump.cardImage}
                                                    alt={relatedPump.title}
                                                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h4 className="font-semibold text-slate-800 text-sm mb-2 line-clamp-2">
                                                    {relatedPump.title}
                                                </h4>
                                                <button className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-800">
                                                    Read More <span className="ml-1">→</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* Back to Top Button */}
                        <div className="mt-12 text-center pb-8">
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                            >
                                Back to Top
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PumpDetailModal;
