import { Modal, Box, Avatar, useMediaQuery, useTheme } from '@mui/material';
import closeIcon from 'assets/images/cross.svg';

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
    borderRadius: '4px',
  },
  mobModal: {
    padding: '20px 5px',
    minWidth: '80vw',
  },
  closeIcon: {
    backgroundColor: 'grey',
    position: 'absolute',
    width: '20px',
    height: '20px',
    top: '8px',
    right: '8px',
    cursor: 'pointer',
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
      <Box sx={[styles.modal, matches && styles.mobModal]}>
        <Avatar src={closeIcon} onClick={modalClose} sx={styles.closeIcon} />
        {children}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
