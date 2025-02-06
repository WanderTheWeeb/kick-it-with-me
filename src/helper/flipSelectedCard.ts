import { Place } from "../interfaces/place";

export function flipSelectedCard(options: Place[], handleFlip: (index: number) => void, randomized: Place | null) {
    if (randomized) {
        handleFlip(options.findIndex((option) => option.name === randomized.name
        ));
    }
}