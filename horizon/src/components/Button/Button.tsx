import type { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

function Button({
    children,
    type = "button",
    disabled = false,
}: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className="rounded-md bg-blue-600 px-6 py-3 text-white transition-all duration-300 ease-in-out hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
            {children}
        </button>
    );
}

export default Button;