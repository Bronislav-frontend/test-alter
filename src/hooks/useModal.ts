import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalToggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return {
    isOpen,
    modalToggle,
  };
};
