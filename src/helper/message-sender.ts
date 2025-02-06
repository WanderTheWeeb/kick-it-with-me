import { Place } from "../interfaces/place";

const PHONE_NUMBER = "9211212110"; // Replace with your phone number

const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=`;

export const handleAccept = (selected: Place): void => {
    if (!selected) return;
    // Create the message
    const message = `¡Hola! Me gustaría que nuestra próxima anécdota sea en un ${selected.name} ${selected.emoji}. ¿Qué opinas?`;
    window.open(`${whatsappLink}${encodeURIComponent(message)}`, "_blank");
};