import { useState } from "react";
import InputField from "../components/InputField/InputFiend";
import Button from "../components/Button/Button";
import WhitespaceCard from "../components/WhitespaceCard/WhitespaceCard";
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
        if (!isFormValid) return;
        const sanitizedData = {
            ...formData,
            name: formData.name.trim(),
            email: formData.email.trim(),
        };
        console.log("Form submitted:", sanitizedData);
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;

        const fieldValue =
            type === "checkbox"
                ? (e.target as HTMLInputElement).checked
                : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: fieldValue,
        }));

        // Validate Name
        if (name === "name") {
            const trimmedValue = value.trim();

            if (trimmedValue === "") {
                setError((prev) => ({
                    ...prev,
                    name: "Name is required",
                }));
            } else if (/<script.*?>.*?<\/script>/i.test(trimmedValue)) {
                setError((prev) => ({
                    ...prev,
                    name: "Script tags are not allowed",
                }));
            } else if (!/^[A-Za-z\s]+$/.test(trimmedValue)) {
                setError((prev) => ({
                    ...prev,
                    name: "Only letters and spaces are allowed",
                }));
            } else {
                setError((prev) => ({
                    ...prev,
                    name: "",
                }));
            }
        }

        // Validate Email
        if (name === "email") {
            const trimmedValue = value.trim();

            if (trimmedValue === "") {
                setError((prev) => ({
                    ...prev,
                    email: "Email is required",
                }));
            } else if (/<script.*?>.*?<\/script>/i.test(trimmedValue)) {
                setError((prev) => ({
                    ...prev,
                    email: "Script tags are not allowed",
                }));
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(trimmedValue)
            ) {
                setError((prev) => ({
                    ...prev,
                    email: "Invalid email address",
                }));
            } else {
                setError((prev) => ({
                    ...prev,
                    email: "",
                }));
            }
        }
    };


    return (
        <div className="mx-auto max-w-4xl p-6">
            <h1 className="mb-8 text-3xl font-bold">Settings</h1>

            <form
                className="space-y-8"
                onSubmit={handleSubmit}>
                {/* Profile */}
                <WhitespaceCard title ="Profile" >

                    <div className="grid gap-6 md:grid-cols-2">
                        <InputField
                            id="username"
                            label="Name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            error={error.name}
                            onChange={handleChange}
                        />


                        <InputField
                            id="email"
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            error={error.email}
                            onChange={handleChange}
                        />
                    </div>
                </WhitespaceCard>

                {/* Preferences */}
                <WhitespaceCard title="Preferences">

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
                </WhitespaceCard>

                {/* Notifications */}
                <WhitespaceCard title="Notifications">

                    <label htmlFor="email-notifications" className="flex items-center gap-3">
                        <input id="email-notifications"
                            name="notifications"
                            type="checkbox"
                            checked={formData.notifications}
                            onChange={handleChange}
                            className="h-4 w-4 transition-all duration-300 ease-in-out" />

                        <span>Email Notifications</span>
                    </label>
                </WhitespaceCard>

                <div className="flex justify-end">
                    <Button
                        type="submit"
                        disabled={!isFormValid}
                    >
                        Save Settings
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Settings;