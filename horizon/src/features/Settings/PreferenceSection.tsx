import { memo } from "react";
import WhitespaceCard from "../../components/WhitespaceCard/WhitespaceCard";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setLanguage, setTheme } from "./settingSlice";


function PreferenceSection() {

    const dispatch = useAppDispatch();
    const {theme, language} = useAppSelector((state) => state.settings);
    return (
        <WhitespaceCard title="Preferences">

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label htmlFor="theme" className="mb-2 block text-sm font-semibold text-slate-700">
                        Theme
                    </label>

                    <select id="theme"
                        name="theme"
                        value={theme}
                        onChange={(e) => dispatch(setTheme(e.target.value))}
                        className="w-full rounded-lg border border-slate-300 bg-white p-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200">
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="language" className="mb-2 block text-sm font-semibold text-slate-700">
                        Language
                    </label>

                    <select id="language"
                        name="language"
                        value={language}
                        onChange={(e) => dispatch(setLanguage(e.target.value))}
                        className="w-full rounded-lg border border-slate-300 bg-white p-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200">
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                    </select>
                </div>
            </div>
        </WhitespaceCard>
    );
}

export default memo(PreferenceSection);
