type ButtonProps = {
    children?: string;
    method: () => void;
    isPrimary?: boolean;
};

const msg = "Confirmar";

const Button = ({ children = msg, method, isPrimary }: ButtonProps) => {
    const color = isPrimary ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600";
    return (
        <button
            onClick={method}
            className={`mt-4 px-4 py-2 text-white font-bold rounded-lg shadow-md transition ${color
                } text-sm sm:text-base md:text-base`}
        >
            {children}
        </button>
    );
};

export default Button;
