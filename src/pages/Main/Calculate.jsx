import { useState } from "react";

const Calculate = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        website: "",
        visitors: "",
        email: "",
        password: "",
        confirmPassword: "",
        remember: false
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [id]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log("Form Data:", formData);
    };

    return (
<div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6 transition-colors">

    <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl
                   bg-white dark:bg-gray-950
                   p-8
                   rounded-2xl
                   shadow-lg dark:shadow-black/30
                   border border-gray-200 dark:border-gray-800
                   transition-colors"
    >

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Registration Form
        </h1>

        <div className="grid gap-6 mb-6 md:grid-cols-2">

            <div>
                <label
                    htmlFor="firstName"
                    className="block mb-2.5 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                    First name
                </label>

                <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="bg-gray-50 dark:bg-gray-800
                               border border-gray-300 dark:border-gray-600
                               text-gray-900 dark:text-white
                               placeholder-gray-500 dark:placeholder-gray-400
                               rounded-lg
                               focus:ring-primary-500 focus:border-primary-500
                               block w-full px-3 py-2.5
                               transition-colors"
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="lastName"
                    className="block mb-2.5 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                    Last name
                </label>

                <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="bg-gray-50 dark:bg-gray-800
                               border border-gray-300 dark:border-gray-600
                               text-gray-900 dark:text-white
                               placeholder-gray-500 dark:placeholder-gray-400
                               rounded-lg
                               focus:ring-primary-500 focus:border-primary-500
                               block w-full px-3 py-2.5
                               transition-colors"
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="company"
                    className="block mb-2.5 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                    Company
                </label>

                <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Flowbite"
                    className="bg-gray-50 dark:bg-gray-800
                               border border-gray-300 dark:border-gray-600
                               text-gray-900 dark:text-white
                               placeholder-gray-500 dark:placeholder-gray-400
                               rounded-lg
                               focus:ring-primary-500 focus:border-primary-500
                               block w-full px-3 py-2.5
                               transition-colors"
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="phone"
                    className="block mb-2.5 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                    Phone number
                </label>

                <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="123-45-678"
                    className="bg-gray-50 dark:bg-gray-800
                               border border-gray-300 dark:border-gray-600
                               text-gray-900 dark:text-white
                               placeholder-gray-500 dark:placeholder-gray-400
                               rounded-lg
                               focus:ring-primary-500 focus:border-primary-500
                               block w-full px-3 py-2.5
                               transition-colors"
                    required
                />
            </div>

        </div>

        <div className="mb-6">
            <label
                htmlFor="email"
                className="block mb-2.5 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
                Email address
            </label>

            <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@company.com"
                className="bg-gray-50 dark:bg-gray-800
                           border border-gray-300 dark:border-gray-600
                           text-gray-900 dark:text-white
                           placeholder-gray-500 dark:placeholder-gray-400
                           rounded-lg
                           focus:ring-primary-500 focus:border-primary-500
                           block w-full px-3 py-2.5
                           transition-colors"
                required
            />
        </div>

        <div className="mb-6">
            <label
                htmlFor="password"
                className="block mb-2.5 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
                Password
            </label>

            <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="bg-gray-50 dark:bg-gray-800
                           border border-gray-300 dark:border-gray-600
                           text-gray-900 dark:text-white
                           placeholder-gray-500 dark:placeholder-gray-400
                           rounded-lg
                           focus:ring-primary-500 focus:border-primary-500
                           block w-full px-3 py-2.5
                           transition-colors"
                required
            />
        </div>

        <div className="flex items-start mb-6">
            <input
                id="remember"
                type="checkbox"
                checked={formData.remember}
                onChange={handleChange}
                className="w-4 h-4 rounded
                           border-gray-300 dark:border-gray-600
                           bg-gray-50 dark:bg-gray-700
                           focus:ring-primary-500"
                required
            />

            <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
                I agree with the{" "}
                <a
                    href="#"
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                    terms and conditions
                </a>
                .
            </label>
        </div>

        <button
            type="submit"
            className="text-white
                       bg-primary-600
                       hover:bg-primary-700
                       dark:bg-primary-600 dark:hover:bg-primary-500
                       focus:ring-4 focus:ring-primary-300
                       dark:focus:ring-primary-800
                       font-medium
                       rounded-lg
                       text-sm
                       px-5 py-2.5
                       transition-colors"
        >
            Submit
        </button>

    </form>
</div>
    );
};

export default Calculate;