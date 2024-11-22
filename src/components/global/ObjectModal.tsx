import Filters from "./Filters/Filters";
import { FiGrid, FiColumns } from "react-icons/fi";
import { colors } from "@/config/colors.config";
import CategoryList from "./Categories/CategoryList";
import AlphabeticScroll from "./AlphabeticScroll";
import { useState } from "react";

export interface ObjectModalProps {
  open: boolean;
}

type ShowAs = "grid" | "list";

const iconProps = { size: 24, color: colors.typography };

const ObjectModal = (props: ObjectModalProps) => {
  const { open } = props;

  const [showAs, setShowAs] = useState<ShowAs>("list");
  const isList = showAs === "list";

  if (!open) return null;

  return (
    // TODO: add new modal component someday
    <div className="newModal bg-surface pt-4 pr-4 rounded-xl shadow-md animate-modal m-auto">
      {/* OBJECTS MODAL STARTS HERE */}
      <div className="flex flex-row-reverse">
        <AlphabeticScroll className="ml-8" />
        <div className="flex-grow">
          <header className="flex flex-row gap-4 justify-between items-center ml-4">
            <h2 className="text-typography text-2xl font-semibold">Objetos</h2>
            <button onClick={() => setShowAs(isList ? "grid" : "list")}>
              {isList ? (
                <FiColumns {...iconProps} className="rotate-90" />
              ) : (
                <FiGrid {...iconProps} />
              )}
            </button>
          </header>
          <div className="searchBar" />
          <Filters className="mb-2 mt-4 ml-4" />
          <div className="scrollingContent overflow-auto w-[30rem] h-[40rem]">
            <CategoryList />
          </div>
        </div>
      </div>
      {/* OBJECTS MODAL ENDS HERE */}
    </div>
  );
};

export default ObjectModal;
