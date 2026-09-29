const HistoryCard = ({ item }) => {
    return (
        <div
            className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
        >
            {/* <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg sm:w-48"
                src={item.image}
                alt={item.name}
            /> */}

            <div className="p-5">

                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                </h3>

                <span className="text-gray-500 dark:text-gray-400">
                    {item.role}
                </span>

                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {item.description}
                </p>

                <ul className="flex space-x-4">
                    <li>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            Facebook
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            Twitter
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            GitHub
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default HistoryCard;