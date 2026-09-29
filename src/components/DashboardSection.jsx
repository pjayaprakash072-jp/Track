import {NavLink} from 'react-router-dom'
const DashboardSection = () => {
    return (
        <section className="pt-0 bg-white dark:bg-gray-900">
            <div className="min-h-screen gap-8 items-center  px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">

                <img
                    className="w-full dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                    alt="dashboard"
                />

                <img
                    className="w-full hidden dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                    alt="dashboard"
                />

                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Let's create more tools and ideas that brings us together.
                    </h2>

                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        Flowbite helps you connect with friends and communities
                        of people who share your interests.
                    </p>

                    <NavLink
                        to="/calculate"
                        className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Calculate
                    </NavLink>

                    <NavLink
                        to="/signup"
                        className="ml-3 inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Register to save Records
                    </NavLink>
                </div>

            </div>
        </section>
    );
};

export default DashboardSection;