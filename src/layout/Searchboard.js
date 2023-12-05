import { Icon } from "@iconify/react";

const Searchboard = () => {
  return (
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
  );
};

export default Searchboard;
