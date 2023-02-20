import { Modal, Box } from '@mui/material';

interface IProps {
  isOpen: boolean;
  toggle: () => void;
  children?: React.ReactNode;
}

const ModalComponent = ({ isOpen, toggle, children }: IProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={toggle}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
