import { Icon } from "@iconify/react";

const Searchboard = () => {
  return (
    <div className="w-full py-6">
      <div className="flex flex-row w-full relative">
        <div className="absolute top-1/2 flex translate-y-[-50%] left-3 pointer-events-none">
          <Icon
            icon="fluent:search-12-regular"
            width="24"
            height="24"
            className="text-primary dark:text-darkIconColor"
          />
        </div>
        <input
          className="p-[10px] pl-12 w-full rounded-lg font-medium text-[14px] border-colorSeparator dark:border-darkColorSeparator border-[1px] focus:outline-none bg-white dark:bg-transparent text-fontSecondary dark:text-darkFontPrimary"
          placeholder="Search by Address / Transaction Hash / Block / Token"
        ></input>
      </div>
    </div>
  );
};

export default Searchboard;
