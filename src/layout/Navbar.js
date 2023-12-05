import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import DropDownMenu from "../components/DropDownMenu";
import MobileDropDown from "../components/MobileDropDown";
import MenuItems from "../utilities/MenuItems";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const OpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    // if (windowWidth > 960) setIsMenuOpen(true);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [window.innerWidth]);

  return (
    <>
      <div className="w-full py-3 bg-primary shadow-[0px_4px_8px_rgba(0,0,0,0.12)]">
        <div className="max-w-[1408px] min-w-[343px] w-full flex flex-row justify-between items-center px-5 mx-auto">
          <div className="max-w-[384px] m-0 cursor-pointer text-white text-[16px] leading-[22px] font-semibold">
            <div className="flex flex-row max-w-full items-center">
              <img src="./Adrestus.svg" alt="logo" />
              <div className="flex-col items-start justify-between pl-[7px] pt-2 hidden min-[961px]:flex">
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
              <div className="pr-4 hidden min-[961px]:flex">
                <span className="text-white text-[14px] leading-[20px]">
                  Address Format
                </span>
              </div>
              <div className=""></div>
            </div>
            <div className="hidden items-center flex-row min-[961px]:flex">
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
            <div
              id="hamburger_menu"
              className="flex-end flex min-[961px]:hidden"
              onClick={OpenMenu}
            >
              {!isMenuOpen ? (
                <Icon
                  icon="solar:hamburger-menu-linear"
                  color="white"
                  width="32"
                  height="32"
                />
              ) : (
                <Icon
                  icon="ic:baseline-close"
                  width="32"
                  height="32"
                  color="white"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="w-full py-2 min-[961px]:hidden flex flex-col">
          <div className="py-1 px-4">
            <div className="p-2 flex flex-row justify-between items-center w-full">
              <span className="text-[18px] leading-[24px] text-fontSecondary">
                Home
              </span>
            </div>
          </div>
          {MenuItems.map((item, index) => {
            return (
              <MobileDropDown
                key={index}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
