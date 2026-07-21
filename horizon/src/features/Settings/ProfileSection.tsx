import { memo } from "react";
import InputField from "../../components/InputField/InputFiend";
import WorkspaceCard from "../../components/WhitespaceCard/WhitespaceCard";


interface ProfileSectionProps {
    name: string;
    email: string;
    
        errname: string;
        erremail: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function ProfileSection({
    name,
    email,
    errname,
    erremail,
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
                    value={name}
                    error={errname}
                    onChange={onChange}
                />

                <InputField
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    error={erremail}
                    onChange={onChange}
                />
            </div>
        </WorkspaceCard>
    );
}

export default memo(ProfileSection);