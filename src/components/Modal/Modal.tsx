// import { motion } from "framer-motion";
import { forwardRef, useImperativeHandle, useState } from "react";
import { jn } from "../../utils/styles.utils";
import { ModalMethods as Methods, ModalProps as Props } from "./Modal.types";

const Modal = forwardRef<Methods, Props>((props, ref) => {
  const { title, subtitle } = props;
  const { children, showClose = true } = props;
  const { showBackdrop = true, showSeparator = true } = props;
  const { className, containerClassName, backdropClassName } = props;
  const [open, setOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      openModal: () => setOpen(true),
      closeModal: () => setOpen(false),
    }),
    []
  );

  return (
    <dialog
      open={open}
      onClose={() => setOpen(false)}
      className="absolute top-0 left-0 bottom-0 right-0 bg-transparent"
    >
      <div
        className={jn(
          "w-1/2 m-auto flex flex-col items-center justify-center relative",
          containerClassName
        )}
      >
        {showBackdrop ? (
          <div
            className={jn(
              "bg-slate-800/30 absolute h-screen w-screen animate-fade-in",
              backdropClassName
            )}
          />
        ) : null}
        <div
          className={jn("bg-white p-6 rounded-2xl z-[1] shadow-md", className)}
        >
          <header className="flex flex-row justify-between">
            <div>
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
            </div>
            <div>
              {showClose ? (
                <button onClick={() => setOpen(false)}>&times;</button>
              ) : null}
            </div>
          </header>
          {showSeparator ? <hr /> : null}
          {children}
          <footer className="flex flex-row justify-between">
            <button>cancelar</button>
            <button>aceptar</button>
          </footer>
        </div>
      </div>
    </dialog>
  );
});

export default Modal;
