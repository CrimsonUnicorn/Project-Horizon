import { type ReactNode, type ButtonHTMLAttributes, memo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

function Button({
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className="rounded-lg bg-violet-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-lg disabled:bg-slate-400"
        >
            {children}
        </button>
    );
}

export default memo(Button);