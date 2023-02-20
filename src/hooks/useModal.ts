import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggler = () => {
    setIsOpen(prevState => !prevState);
  };

  return {
    isOpen,
    toggler,
  };
};
