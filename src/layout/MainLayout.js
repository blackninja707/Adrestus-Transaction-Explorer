import { Icon } from "@iconify/react";

const MainLayout = () => {
  return (
    <div className="w-full bg-board">
      <div className="max-w-[1408px] min-w-[343px] w-full flex flex-col justify-between items-center px-5 mx-auto">
        <div className="w-full py-6">
          <div className="flex flex-row w-full relative">
            <div className="absolute top-1/2 flex translate-y-[-50%] left-3 pointer-events-none">
              <Icon
                icon="fluent:search-12-regular"
                color="#00aee9"
                width="24"
                height="24"
              />
            </div>
            <input
              className="p-[10px] pl-12 w-full rounded-lg font-medium text-[14px] border-[#E7ECF7] border-[1px] focus:outline-none"
              placeholder="Search by Address / Transaction Hash / Block / Token"
            ></input>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row justify-between rounded-lg overflow-hidden w-full mb-6 p-6 border-[#E7ECF7] border-[1px] bg-white"></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
