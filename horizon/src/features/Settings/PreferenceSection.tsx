import { memo } from "react";
import WhitespaceCard from "../../components/WhitespaceCard/WhitespaceCard";

interface PreferenceSectionProps {

    theme: string;
    language: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
}

function PreferenceSection({
    theme,
    language,
    onChange,
}: PreferenceSectionProps) {
    return (
        <WhitespaceCard title="Preferences">

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label htmlFor="theme" className="mb-2 block text-sm font-medium">
                        Theme
                    </label>

                    <select id="theme"
                        name="theme"
                        value={theme}
                        onChange={onChange}
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
                        value={language}
                        onChange={onChange}
                        className="w-full rounded-md border p-3">
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                    </select>
                </div>
            </div>
        </WhitespaceCard>
    );
}

export default memo(PreferenceSection);
