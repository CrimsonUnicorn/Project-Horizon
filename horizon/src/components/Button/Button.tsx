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
            className="rounded-md bg-blue-600 px-6 py-3 text-white transition-all duration-300 ease-in-out hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
            {children}
        </button>
    );
}

export default memo(Button);