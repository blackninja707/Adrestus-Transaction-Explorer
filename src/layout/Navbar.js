import DropDownMenu from "../components/DropDownMenu";

import MenuItems from "../utilities/MenuItems";

const Navbar = () => {
  return (
    <div className="w-full py-3 bg-primary shadow-[0px_4px_8px_rgba(0,0,0,0.12)]">
      <div className="max-w-[1408px] min-w-[343px] w-full flex flex-row justify-between items-center px-5 mx-auto">
        <div className="max-w-[384px] m-0 cursor-pointer text-white text-[16px] leading-[22px] font-semibold">
          <div className="flex flex-row max-w-full items-center">
            <img src="./Adrestus.svg" alt="logo" />
            <div className="flex flex-col items-start justify-between pl-[7px] pt-2">
              <span className="text-[1.2em] leading-[0.5em] m-0 p-0">
                Adrestus
              </span>
              <span className="text-[14px] leading-[20px] m-0 pt-[3px]">
                Block Explorer
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row max-w-full min-w-0 min-h-0">
          <div className="flex items-center flex-row">
            <div className="pr-4">
              <span className="text-white text-[14px] leading-[20px]">
                Address Format
              </span>
            </div>
            <div className=""></div>
          </div>
          <div className="flex items-center flex-row">
            {MenuItems.map((item, index) => {
              return (
                <DropDownMenu
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
