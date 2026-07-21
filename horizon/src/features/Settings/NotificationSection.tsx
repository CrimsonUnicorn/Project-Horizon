import WhitespaceCard from "../../components/WhitespaceCard/WhitespaceCard";

interface NotificationSectionProps {
    notifications: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function NotificationSection({
    notifications,
    onChange,
}: NotificationSectionProps) {
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
                    onChange={onChange}
                    className="h-4 w-4 transition-all duration-300 ease-in-out"
                />

                <span>Email Notifications</span>
            </label>
        </WhitespaceCard>
    );
}

export default NotificationSection;