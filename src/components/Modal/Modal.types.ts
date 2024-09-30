import { ReactNode } from "react";

export interface ModalProps {
  title?: string;
  subtitle?: string;
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  showClose?: ReactNode;
  showSeparator?: boolean;
  showBackdrop?: boolean;
  className?: string;
  containerClassName?: string;
  backdropClassName?: string;
}

export interface ModalMethods {
  openModal: () => void;
  closeModal: () => void;
}
