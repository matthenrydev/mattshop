import adImage from '../assets/ad.png';

export default function MockAd({ variant = "text" }) {
    // Text ad variant (horizontal banner style)
    if (variant === "text") {
        return (
            <a 
                href="https://tecobit.cloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full max-w-[728px] mx-auto bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:shadow-lg transition-shadow overflow-hidden"
            >
                {/* Ad content - Responsive flex */}
                <div className="flex-1 p-3 sm:p-2 flex flex-col justify-center min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-200 leading-tight">
                            Join the MERN Class Today
                        </h3>
                        <button className="shrink-0 bg-blue-600 dark:bg-blue-800 hover:bg-blue-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors">
                            More
                        </button>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-snug mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-3">
                        Master MongoDB, Express, React, and Node.js.
                        Start your full-stack journey now.
                    </p>
                </div>
            </a>
        );
    }

    // Image ad variant (with product image)
    return (
        <a 
            href="https://tecobit.cloud" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full max-w-[600px] mx-auto bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:shadow-lg transition-shadow overflow-hidden"
        >
            {/* Ad content - Responsive layout */}
            <div className="flex flex-col sm:flex-row items-stretch">
                {/* Image - Full width on mobile, fixed on desktop */}
                <div className="w-full sm:w-32 md:w-80 shrink-0 h-24 sm:h-auto">
                    <img 
                        src={adImage} 
                        alt="MERN Class" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 p-3 sm:p-4 flex flex-col justify-center min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-200 mb-1 leading-tight">
                        Join the MERN Class Today
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-snug mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-3">
                        Master MongoDB, Express, React, and Node.js. 
                        Start your full-stack journey now.
                    </p>
                    <button className="self-start sm:self-auto bg-blue-600 dark:bg-blue-800 hover:bg-blue-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors">
                        More
                    </button>
                </div>
            </div>
        </a>
    );
}
