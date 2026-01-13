import { useParams, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import projects from "../../data/products";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/Footer";

const CaseStudyImage = lazy(() => import("../../components/CaseStudy"));

const CaseStudyPage = () => {
    const { id } = useParams();
    const study = projects.find((p) => p.id === id);

    if (!study) {
        return (
            <>
                <Nav />
                <div className="flex flex-col items-center justify-center h-screen text-center text-gray-400">
                    <h2 className="text-2xl font-bold text-dix_white">
                        Case Study Not Found
                    </h2>
                    <Link
                        to="/"
                        className="mt-4 text-white hover:text-white underline transition"
                    >
                        Back to Projects
                    </Link>

                </div>
            </>
        );
    }

    return (
        <>
            <Nav />
            <div
                className="w-full mt-20 min-h-screen flex flex-col items-center px-4 md:px-16 py-20 
        bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white 
        overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
            >
                {/* Title */}
                <h1 className="text-3xl text-dix_white md:text-5xl font-extrabold mb-6 text-center tracking-wide">
                    {study.title}
                </h1>

                {/* Description */}
                <p className="text-dix_white max-w-2xl text-center text-gray-300 mb-12 text-sm md:text-lg leading-relaxed">
                    {study.description}
                </p>

                {/* Lazy-loaded Case Study Image */}
                <Suspense
                    fallback={
                        <div className="flex items-center justify-center w-full max-w-5xl min-h-[250px] sm:min-h-[400px] bg-gray-800/40 rounded-2xl shadow-2xl text-dix_white">
                            Please wait. Loading Case Study...
                        </div>
                    }
                >
                    <CaseStudyImage src={study.image} alt={study.title} />
                </Suspense>

                {/* Back Button */}
                <Link
                    to="/"
                    className="text-dix_white mt-12 px-8 py-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-full 
          text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
                >
                    ← Back to Home
                </Link>
            </div>
            <Footer />
        </>
    );
};

export default CaseStudyPage;
