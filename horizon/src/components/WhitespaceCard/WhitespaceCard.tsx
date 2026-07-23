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
        <section className={`rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg ${className}`}>
            <h2 className="mb-6 text-xl font-semibold text-slate-800">
                {title}
            </h2>

            {children}
        </section>
    );
}

export default memo(WorkspaceCard);