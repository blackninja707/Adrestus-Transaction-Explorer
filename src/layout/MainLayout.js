import BlockBoard from "./BlockBoard";
import Dashboard from "./Dashboard";
import Searchboard from "./Searchboard";
import TxBoard from "./TxBoard";

const MainLayout = () => {
  return (
    <div className="w-full bg-board">
      <div className="max-w-[1408px] min-w-[343px] w-full flex flex-col justify-between items-center px-5 mx-auto pb-6">
        <Searchboard />
        <Dashboard />
        <div className="flex flex-row gap-6 w-full">
          <BlockBoard />
          <TxBoard />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
