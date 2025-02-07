import { useState } from "react";
import { Place } from "../interfaces/place";

//Another test
export function useFlippedSelection(options: Place[]) {
  const [selected, setSelected] = useState<Place | null>(null);
  const [flipped, setFlipped] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlipped(index);
    setSelected(options[index]);
  };

  return { selected, flipped, handleFlip , setSelected};
}
