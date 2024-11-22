import { Canvas } from "@react-three/fiber";
import Experience from "@/components/3d/Experience";
import Button from "@/components/ui/Button";
import { store } from "@/config/xr.config";
import { XR } from "@react-three/xr";
// import Modal from "@/components/Modal/Modal";
// import { ModalMethods } from "@/components/Modal/Modal.types";
import { useState } from "react";
import { genWord, mockFiles } from "@/mocks/files";
import { FiMenu, FiBox, FiMove, FiFile } from "react-icons/fi";
import { colors } from "./config/colors.config";
import ObjectModal from "./components/global/ObjectModal";

const App = () => {
  const [open, setOpen] = useState(false);
  // const welcomeModalRef = useRef<ModalMethods>(null);
  const files = mockFiles(6);

  const folders = Array.from({ length: 6 }, () => genWord(2));

  // @ts-expect-error - This is a test component
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ARExperience = () => (
    <>
      <Canvas camera={{ fov: 84, position: [2.3, 1.5, 2.3] }}>
        <XR store={store}>
          <Experience />
        </XR>
      </Canvas>
      <Button
        className="absolute bottom-4 right-8"
        onClick={() => store.enterAR()}
      >
        Enter AR
      </Button>
    </>
  );

  return (
    <div
      id="app"
      className="relative flex flex-col h-svh bg-background overflow-hidden"
    >
      {/* <ARExperience /> */}
      <div className="p-4 flex items-center gap-3">
        <Button className="bg-surface-2 p-2 rounded-xl">
          <FiMenu color={colors.typography} />
        </Button>
        <h1 className="text-typography">{files[0].name}</h1>
      </div>
      <div className="bg-gradient-to-t to-blue-800 from-indigo-500 flex-grow flex">
        <ObjectModal open={open} />
        <ul className="m-8 flex flex-wrap border-typography/40 border rounded-lg px-4 py-8 gap-x-1.5 gap-y-2 h-fit bg-gradient-to-tr from-typography-negative/30 to-typography/20 shadow-lg shadow-surface/40">
          {folders.map((f) => {
            return (
              <li key={f}>
                <button className="flex flex-col items-center hover:bg-typography/10 transition-all pt-2 pb-1 px-1 rounded-xl ease-linear">
                  <FiFile color={colors.typography} className="mb-1" />
                  <p className="text-typography text-sm text-center line-clamp-3 min-w-20 max-w-20">
                    {f}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-4 flex items-center gap-2">
        <Button className="bg-surface-2 p-2 rounded-xl">
          <FiMove color={colors.typography} />
        </Button>
        <Button
          onClick={() => setOpen((p) => !p)}
          className="bg-surface-2 p-2 rounded-xl"
        >
          <FiBox color={colors.typography} />
        </Button>
      </div>
      {/* // TODO: Do not use, create bottom sheet for mobile */}
      {/* <Modal ref={welcomeModalRef} showSeparator={false}>
        <div className="w-32 h-32 bg-surface-2 rounded-xl mx-auto mt-6 mb-2" />
        <h1 className="text-center text-2xl font-bold text-typography">
          Lupuna Studio
        </h1>
        <ul className="flex flex-wrap flex-col md:flex-row w-full justify-start mt-6">
          {files.slice(-5).map((file) => {
            const { name, id } = file;
            return (
              <li key={id} className="w-full md:w-1/2 p-2">
                <p className="truncate text-accent underline">{name}</p>
              </li>
            );
          })}
          <li>
            <p className="underline text-typography/50 p-2">Ver más...</p>
          </li>
        </ul>
        <Button className="text-typography bg-accent rounded-full mt-6 py-2 px-6 mx-auto">
          Crear
        </Button>
      </Modal> */}
    </div>
  );
};

export default App;
