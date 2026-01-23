import styles from './Modal.module.css';
import React from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  title: string;
  message?: string;
  buttonText: string;
  onRestart: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  message,
  buttonText,
  onRestart,
}) => {
  return (
    isOpen &&
    createPortal(
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <h2>{title}</h2>
          {message && <p>{message}</p>}
          <button autoFocus onClick={onRestart}>
            {buttonText}
          </button>
        </div>
      </div>,
      document.body,
    )
  );
};

export default Modal;
