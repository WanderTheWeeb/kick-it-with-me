import { useState, useEffect } from "react";

export function useRandomSelection(options: { name: string; emoji: string }[]) {
  const [randomized, setRandomized] = useState<{ name: string; emoji: string } | null>(null);

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    if (options[randomIndex].name === randomized?.name) {
      handleRandom();
      return;
    }
    setRandomized(options[randomIndex]);
  };

  useEffect(() => {
  }, [randomized]);

  return { randomized, handleRandom };
}
