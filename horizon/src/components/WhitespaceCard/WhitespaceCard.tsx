import type { ReactNode } from "react";

interface WorkspaceCardProps {
    title: string;
    children: ReactNode;
}

function WorkspaceCard({
    title,
    children,
}: WorkspaceCardProps) {
    return (
        <section className="rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">
                {title}
            </h2>

            {children}
        </section>
    );
}

export default WorkspaceCard;