import { forwardRef, useImperativeHandle, useState } from "react";
import { jn } from "@/utils/styles.utils";
import { ModalMethods as Methods, ModalProps as Props } from "./Modal.types";

const Modal = forwardRef<Methods, Props>((props, ref) => {
  const { title, subtitle } = props;
  const { footer } = props;
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
          "flex flex-col items-center justify-center relative",
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
          className={jn(
            "bg-white p-6 rounded-2xl z-[1] shadow-md animate-modal w-11/12 lg:w-3/4",
            className
          )}
        >
          <header className="flex flex-row justify-between">
            <div>
              <h1 className="text-2xl font-semibold">{title}</h1>
              <h2 className="text-lg">{subtitle}</h2>
            </div>
            <div>
              {showClose ? (
                <button onClick={() => setOpen(false)}>&times;</button>
              ) : null}
            </div>
          </header>
          {showSeparator ? <hr className="mt-1 mb-2" /> : null}
          {children}
          {footer}
        </div>
      </div>
    </dialog>
  );
});

Modal.displayName = "Modal";

export default Modal;
