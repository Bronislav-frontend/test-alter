import { Modal, Box } from '@mui/material';

interface IProps {
  isOpen: boolean;
  modalClose: () => void;
  children?: React.ReactNode;
}

const ModalComponent = ({ isOpen, modalClose, children }: IProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={modalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          overflowY: 'auto',
          maxHeight: '80vh',
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
