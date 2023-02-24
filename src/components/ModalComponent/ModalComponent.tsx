import { Modal, Box, useMediaQuery, useTheme } from '@mui/material';

interface IProps {
  isOpen: boolean;
  modalClose: () => void;
  children?: React.ReactNode;
}

const styles = {
  modal: {
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
  },
  mobModal: {
    padding: '20px 5px',
    minWidth: '80vw',
  },
};

const ModalComponent = ({ isOpen, modalClose, children }: IProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Modal
      open={isOpen}
      onClose={modalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={[styles.modal, matches && styles.mobModal]}>{children}</Box>
    </Modal>
  );
};

export default ModalComponent;
