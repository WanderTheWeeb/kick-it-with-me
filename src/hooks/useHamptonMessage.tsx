import { useEffect, useState } from "react";
import { updateMessage } from "../helper/change-fact";
import { Place } from "../interfaces/place";

// This is the initial message that your virtual pet will say
// Este es el mensaje inicial que dirá tu mascota virtual
const initialMessage = "¡Hola Amigo, soy hampton!\n ¿En qué puedo ayudarte?";

export function useHamptonMessage(selectedPlace: Place | null) {
    const [message, setMessage] = useState(initialMessage);

    useEffect(() => {
        if (selectedPlace) {
            updateMessage({ selectedPlace, setMessage });
        } else {
            setMessage(initialMessage);
        }
    }, [selectedPlace]);

    return { message };
}
