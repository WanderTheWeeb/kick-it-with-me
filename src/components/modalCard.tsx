import Button from './button';
import { Place } from '../interfaces/place';
import { X } from 'lucide-react';
import { handleAccept } from '../helper/message-sender';
import { motion } from 'framer-motion';
import { ActivityChips } from './activityChips';

export const ModalCard = ({ place, onClose }: { place: Place; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-start sm:items-center justify-center z-50 bg-black/20 pt-10 sm:pt-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl p-5 shadow-2xl w-11/12 sm:w-96"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <X size={20} className="text-gray-600" />
        </button>
        <img
          src={place.imageUrl}
          alt={place.name}
          className="w-full h-48 sm:h-56 object-cover rounded-xl"
        />
        <div className="mt-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{place.name}</h2>
          <ActivityChips activities={place.actividad!} />
          <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
            {place.description}
          </p>
        </div>
        <div className="mt-6 flex justify-end">
          <Button
            method={() => handleAccept(place)}
            isPrimary={false}
          >
            Confirmar
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
