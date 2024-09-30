import { useRef } from "react";
import Modal from "./components/Modal/Modal";
import { ModalMethods } from "./components/Modal/Modal.types";

function App() {
  const modalRef = useRef<ModalMethods>(null);

  return (
    <>
      <button onClick={() => modalRef.current?.openModal()}>Presioname</button>
      <Modal
        className="animate-slide-from-bottom"
        ref={modalRef}
        showSeparator={false}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          veritatis totam, accusantium quis tempora alias, quasi iste dolorem
          ullam possimus nulla nemo incidunt. Voluptates laboriosam explicabo
          molestias? Libero consequatur dolorem recusandae perspiciatis error
          doloremque corporis in dolor id suscipit tenetur quis quo fugit quasi
          sapiente quisquam, aperiam corrupti eos optio.
        </p>
      </Modal>
    </>
  );
}

export default App;
