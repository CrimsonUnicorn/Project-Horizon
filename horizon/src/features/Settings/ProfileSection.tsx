import InputField from "../../components/InputField/InputFiend";
import WorkspaceCard from "../../components/WhitespaceCard/WhitespaceCard";


interface ProfileSectionProps {
    formData: {
        name: string;
        email: string;
    };
    error: {
        name: string;
        email: string;
    };
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function ProfileSection({
    formData,
    error,
    onChange,
}: ProfileSectionProps) {
    return (
        <WorkspaceCard title="Profile">
            <div className="grid gap-6 md:grid-cols-2">
                <InputField
                    id="username"
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    error={error.name}
                    onChange={onChange}
                />

                <InputField
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    error={error.email}
                    onChange={onChange}
                />
            </div>
        </WorkspaceCard>
    );
}

export default ProfileSection;