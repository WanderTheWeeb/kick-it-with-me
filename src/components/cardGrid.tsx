import { motion } from "motion/react";
import { Place } from "../interfaces/place";

type CardGridProps = {
    cards: Place[];
    flipped: number | null;
    handleFlip: (index: number) => void;
};

export const CardGrid = ({ cards, flipped, handleFlip }: CardGridProps) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    className="w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 bg-white shadow-lg rounded-xl flex items-center justify-center text-2xl cursor-pointer"
                    onClick={() => handleFlip(index)}
                    animate={{ rotateY: flipped === index ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {flipped === index ? card.emoji : "❓"}
                </motion.div>
            ))}
        </div>
    );
};