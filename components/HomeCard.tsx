"use client";

interface Category {
    label: string;
    value: string;
    isActive: boolean;
}

interface PortfolioItem {
    image: string;
    title: string;
    categories: string[];
}

const categories: Category[] = [
    { label: "All", value: "", isActive: false },
    { label: "Branding", value: "Branding", isActive: true },
    { label: "Code", value: "Code", isActive: false },
    { label: "Marketing", value: "Marketing", isActive: false },
    { label: "Photography", value: "Photography", isActive: false },
    { label: "Development", value: "Development", isActive: false },
];

const portfolioList: PortfolioItem[] = [
    {
        image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_1.png",
        title: "Photography",
        categories: ["Cinematography"],
    },
    
];

const HomeCard = () => {
    return (
        <section className="ezy__portfolio1_ofAlGAw1 py-14 md:py-24 bg-white dark:bg-[#0b1727] text-[#373572] dark:text-white">
            <div className="container px-4">
                <div className="grid grid-cols-12 justify-center mb-6 md:mb-12">
                    <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
                        <p className="mb-2">THIS IS WHAT WE DO</p>
                        <h2 className="text-3xl md:text-[45px] font-bold mb-6">My Latest Works</h2>
                    </div>
                    <div className="col-span-12 text-center mt-6">
                        {categories.map((category, i) => (
                            <button
                                key={i}
                                className={`btn m-1 py-2 px-5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md ${category.isActive && "bg-blue-600 text-white"
                                    }`}
                                onClick={() => (category.isActive = !category.isActive)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    {portfolioList.map((portfolio, i) => (
                        <div className="col-span-12 md:col-span-6 lg:col-span-4" key={i}>
                            <div className="group relative text-center">
                                <img
                                    src={portfolio.image}
                                    alt={portfolio.title}
                                    className="max-w-full w-full h-auto rounded-xl"
                                />
                                <div className="absolute left-4 right-4 bottom-4 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-40 bg-blur-sm bg-saturate-200 translate-y-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 text-center p-6">
                                    <h5 className="text-xl font-medium mb-2">{portfolio.title}</h5>
                                    <p className="mb-0">{portfolio.categories.join(", ")}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeCard;
