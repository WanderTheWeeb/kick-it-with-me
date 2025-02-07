import { useEffect } from 'react';
import Button from './components/button';
import { places } from './interfaces/place';
import { useFlippedSelection } from './hooks/useFlippedSelection';
import { useRandomSelection } from './hooks/useRandomSelection';
import { CardGrid } from './components/cardGrid';
import { VirtualPet } from './components/virtualPet';
import { ModalCard } from './components/modalCard';
import { flipSelectedCard } from './helper/flipSelectedCard';
import { AnimatePresence } from 'framer-motion';

//This is my prove on neon vim
function SanValentinInvite() {
  const { selected, flipped, handleFlip, setSelected } = useFlippedSelection(places);
  const { randomized, handleRandom } = useRandomSelection(places);

  useEffect(() => {
    flipSelectedCard(places, handleFlip, randomized);
  }, [randomized]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6">
        ¿Dónde crearemos nuestra próxima anécdota?✨
      </h1>
      <div className="mb-4 md:mb-6 w-full md:w-[80%] lg:w-[60%] xl:w-[50%] flex justify-center">
        <CardGrid cards={places} flipped={flipped} handleFlip={handleFlip} />
      </div>
      <Button method={handleRandom} isPrimary={true}>
        ¡Elige por mí! 🎲
      </Button>
      <AnimatePresence>
        {selected && <ModalCard place={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      <VirtualPet selectedPlace={selected} />
    </div>
  );
}

export default SanValentinInvite;
