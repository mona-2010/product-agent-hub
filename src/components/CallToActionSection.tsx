import React from 'react';

const CallToActionSection = ({ onGetStarted }) => {
    return (
        <section className="relative py-8 px-6 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-12 gap-4 h-full">
                    {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className="border border-purple-400/30"></div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto text-center">
                {/* Logo/Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Unlock
                    <br />
                    Smarter Marketing?        
                </h2>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-purple-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                    From content creation to campaign optimization,
                    <br />
                     our AI Assistant helps you maximize impact, save time, and scale effortlessly.
                </p>

                {/* CTA Button */}
                <button
                    onClick={onGetStarted}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                >
                    Get Started
                    <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400/10 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-400/10 rounded-full blur-lg"></div>
            </div>
        </section>
    );
};

export default CallToActionSection;