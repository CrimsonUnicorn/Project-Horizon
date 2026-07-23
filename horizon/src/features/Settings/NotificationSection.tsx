import { memo } from "react";
import WhitespaceCard from "../../components/WhitespaceCard/WhitespaceCard";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setNotifications } from "./settingSlice";

function NotificationSection() {
    const dispatch = useAppDispatch();
    const {notifications} = useAppSelector((state) => state.settings);
    return (
        <WhitespaceCard title="Notifications">
            <label
                htmlFor="email-notifications"
                className="flex items-center gap-3"
            >
                <input
                    id="email-notifications"
                    name="notifications"
                    type="checkbox"
                    checked={notifications}
                    onChange={(e) => dispatch(setNotifications(e.target.checked))}
                    className="h-4 w-4 transition-all duration-300 ease-in-out"
                />

                <span>Email Notifications</span>
            </label>
        </WhitespaceCard>
    );
}

export default memo(NotificationSection);