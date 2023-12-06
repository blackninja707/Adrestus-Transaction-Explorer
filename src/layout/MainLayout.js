import BlockBoard from "./BlockBoard";
import Dashboard from "./Dashboard";
import Searchboard from "./Searchboard";
import TxBoard from "./TxBoard";

const MainLayout = () => {
  return (
    <div className="w-full bg-board dark:bg-[#030921]">
      <div className="max-w-[1408px] min-w-[343px] w-full flex flex-col justify-between items-center px-5 mx-auto">
        <Searchboard />
        <Dashboard />
      </div>
      <div className="w-full max-w-[1408px] min-w-[343px] px-5 mx-auto pb-6 block">
        <div className="w-full flex flex-row items-center justify-between">
          <BlockBoard />
          <TxBoard />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
