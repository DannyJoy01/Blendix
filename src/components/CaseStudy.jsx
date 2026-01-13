import { useState } from "react";

const CaseStudyImage = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="w-full max-w-5xl bg-gray-800/40 rounded-2xl shadow-2xl overflow-hidden relative flex items-center justify-center min-h-[250px] sm:min-h-[400px]">
            {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10 space-y-4 px-4 text-center">
                    <p className="text-dix_white text-sm sm:text-base md:text-lg font-medium">
                        Please wait. Case Study loading...
                    </p>
                    <div
                        className="rounded-full animate-spin"
                        style={{
                            width: 48,
                            height: 48,
                            borderWidth: 4,
                            borderStyle: "solid",
                            borderColor: "white",
                            borderTopColor: "transparent",
                            boxSizing: "border-box",
                        }}
                    />
                </div>
            )}

            <img
                src={src}
                alt={alt}
                className={`w-full h-auto object-cover rounded-2xl transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                onLoad={() => setIsLoaded(true)}
                loading="lazy"
            />
        </div>
    );
};

export default CaseStudyImage;
