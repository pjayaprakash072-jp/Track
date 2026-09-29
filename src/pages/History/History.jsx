import HistoryCard from "../../components/HistoryCard";
import { useState } from "react";
const History = () => {

    const [items] = useState([
        {
            id: 1,
            name: "Bonnie Green",
            role: "CEO & Web Developer",
            description: "Bonnie drives the technical strategy.",
            image: "https://...",
        },
        {
            id: 2,
            name: "Jese Leos",
            role: "CTO",
            description: "Jese drives the technical strategy.",
            image: "https://...",
        },
    ]);

    return (
        <section className="bg-white dark:bg-gray-900 h-screen">

            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">

                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Our Team
                    </h2>

                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Explore our team and learn more about the people
                        behind our platform.
                    </p>

                </div>

                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

                    {items.map((item) => (
                        <HistoryCard
                            key={item.id}
                            item={item}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
};

export default History;