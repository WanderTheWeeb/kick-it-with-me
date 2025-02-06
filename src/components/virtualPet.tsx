import { Place } from "../interfaces/place";
import { Hampton, HamptonDancing } from "./hampton";
import { useHamptonMessage } from "../hooks/useHamptonMessage";
import { useHamptonLoading } from "../hooks/useHamptonDanceLoading";

type VirtualPetProps = {
    selectedPlace: Place | null;
};

export const VirtualPet = ({ selectedPlace }: VirtualPetProps) => {
    const { message } = useHamptonMessage(selectedPlace);
    const { isLoading } = useHamptonLoading(selectedPlace);

    return (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col items-center z-50">
            {message && (
                <div className="bg-white text-gray-700 text-xs sm:text-sm px-3 py-2 rounded-lg shadow-lg mb-2 animate-fade max-w-[150px] sm:max-w-[200px] text-center break-words">
                    {message}
                </div>
            )}
            {isLoading ? <HamptonDancing /> : <Hampton />}
        </div>
    );
};

