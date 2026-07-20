import { useState } from "react";
function Settings() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        theme: "light",
        language: "english",
        notifications: false,
    });
    const [error, setError] = useState({
        name: "",
        email: "",
    });
    const isFormValid =
        formData.name.trim() !== "" &&
        formData.email.trim() !== "" &&
        error.name === "" &&
        error.email === "";
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isFormValid)  return; 
        console.log("Form submitted:", formData);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {

        const { name, value, type } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox"
                ? (e.target as HTMLInputElement).checked
                : value,
        }));
        if (name === "name" && value.trim() === "") {
            setError((prevError) => ({
                ...prevError,
                name: "Name is required",
            }));
        } else if (name === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            setError((prevError) => ({
                ...prevError,
                email: "Invalid email address",
            }));
        } else {
            setError((prevError) => ({
                ...prevError,
                [name]: "",
            }));
        }
    }


    return (
        <div className="mx-auto max-w-4xl p-6">
            <h1 className="mb-8 text-3xl font-bold">Settings</h1>

            <form 
            className="space-y-8"
            onSubmit = {handleSubmit}>
                {/* Profile */}
                <section className="rounded-lg border bg-white p-6 shadow-sm">
                    <h2 className="mb-6 text-xl font-semibold">Profile</h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="username" className="mb-2 block text-sm font-medium">
                                Name
                            </label>

                            <input
                                id="username"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full rounded-md border p-3"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {error.name && <p className="mt-2 text-sm text-red-600">{error.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-md border p-3"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {error.email && <p className="mt-2 text-sm text-red-600">{error.email}</p>}
                        </div>
                    </div>
                </section>

                {/* Preferences */}
                <section className="rounded-lg border bg-white p-6 shadow-sm">
                    <h2 className="mb-6 text-xl font-semibold">Preferences</h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="theme" className="mb-2 block text-sm font-medium">
                                Theme
                            </label>

                            <select id="theme"
                                name="theme"
                                value={formData.theme}
                                onChange={handleChange}
                                className="w-full rounded-md border p-3">
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="language" className="mb-2 block text-sm font-medium">
                                Language
                            </label>

                            <select id="language"
                                name="language"
                                value={formData.language}
                                onChange={handleChange}
                                className="w-full rounded-md border p-3">
                                <option value="english">English</option>
                                <option value="hindi">Hindi</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Notifications */}
                <section className="rounded-lg border bg-white p-6 shadow-sm">
                    <h2 className="mb-6 text-xl font-semibold">
                        Notifications
                    </h2>

                    <label htmlFor="email-notifications" className="flex items-center gap-3">
                        <input id="email-notifications"
                            name="notifications"
                            type="checkbox"
                            checked={formData.notifications}
                            onChange={handleChange}
                            className="h-4 w-4 transition-all duration-300 ease-in-out" />

                        <span>Email Notifications</span>
                    </label>
                </section>

                <div className="flex justify-end">
                    <button
                    type="submit"
                     disabled={!isFormValid}
                     className="rounded-md bg-blue-600 px-6 py-3 text-white transition-all duration-300 ease-in-out hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400">
                        Save Settings
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Settings;