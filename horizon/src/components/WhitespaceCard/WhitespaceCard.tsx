import { memo, type ReactNode } from "react";

interface WorkspaceCardProps {
    title: string;
    children: ReactNode;
    className?: string;
}

function WorkspaceCard({
    title,
    children,
    className = "",
}: WorkspaceCardProps) {
    return (
        <section className={`rounded-lg border bg-white p-6 shadow-sm ${className}`}>
            <h2 className="mb-6 text-xl font-semibold">
                {title}
            </h2>

            {children}
        </section>
    );
}

export default memo(WorkspaceCard);