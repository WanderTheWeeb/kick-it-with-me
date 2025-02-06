import { Place } from "../interfaces/place";


// Path: src/helper/change-fact.ts
// Here we are creating a function that will update the message that the virtual pet will say based on the place selected.
export const updateMessage = ({ selectedPlace, setMessage }: { selectedPlace: Place, setMessage: (msg: string) => void }) => {
    // Aqui puedes cambiar los mensajes que quieras que tu mascota virtual diga
    const messages: { [key: number]: string } = {
        1: "¡Leo, nunca ha ido 👀! ¿ te gustaria ir? ", 
        2: "A Leo no le gusta el sushi 🍣, pero ¡hey, el no se quiere perder la anecdota! 😆",
        3: "¿Que tal si esta vez si terminan una pelicula 👀?",
        4: "¿Que te parece a dar el roll por la plaza 🎬?",
        5: "¿Alguna vez has ido al museo 🏛️?",
    };

    const defaultMessage = "¡Hola! Soy tu mascota virtual";

    setMessage(selectedPlace?.id !== undefined ? messages[selectedPlace.id] : defaultMessage);
};