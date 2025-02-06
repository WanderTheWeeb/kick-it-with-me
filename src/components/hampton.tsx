import hampton from "../assets/hampton.png"; // Replace with the path to your pet
import dance from "../assets/hampton-hamster.gif"; // Replace with the path to your dancing pet

export const Hampton = () => {
    return (
        <img
            src={hampton} 
            alt="Mascota virtual"
            className="w-16 h-16 sm:w-20 sm:h-20 hover:scale-110 transition"
        />
    );
};

export const HamptonDancing = () => {
    return (
        <img
            src={dance} 
            alt="hampton dancing"
            className="w-28 h-28 sm:w-35 sm:h-35 hover:scale-110 transition"
        />
    );
};