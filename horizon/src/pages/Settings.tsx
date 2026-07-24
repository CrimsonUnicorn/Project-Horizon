import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import PreferenceSection from "../features/Settings/PreferenceSection";
import ProfileSection from "../features/Settings/ProfileSection";
import NotificationSection from "../features/Settings/NotificationSection";
import api from "../services/api";
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

/*
    // TEMP: FE-12.2 MSW mock API test
useEffect(() => {
  console.log("Settings useEffect ran");

  async function fetchProfile() {
    try {
      console.log("Fetching profile...");

      const response = await api.get("/profile");

      console.log("Mock profile:", response.data);
    } catch (error) {
      console.error("Failed to fetch mock profile:", error);
    }
  }

  fetchProfile();
}, []);
*/

    return (
        <div className="mx-auto max-w-5xl p-6 sm:p-8">
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-slate-800">Settings</h1>

            <form
                className="space-y-8"
                onSubmit={handleSubmit}>
                {/* Profile */}
                <ProfileSection
                    name={formData.name}
                    email={formData.email}
                    errname={error.name}
                    erremail={error.email}
                    onChange={handleChange}
                />

                {/* Preferences */}
                <PreferenceSection/>


                {/* Notifications */}
                <NotificationSection/>

                {/* Submit Button */}
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