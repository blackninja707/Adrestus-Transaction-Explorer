import { Icon } from "@iconify/react";
import TitleItem from "../TitleItem";

const StateItem = ({ title, value }) => {
  return (
    <tr>
      <TitleItem title={title} />
      <td className="text-left bg-transparent py-4 px-2 w-2/3 border-b-[1px] dark:border-darkColorSeparator border-colorSeparator">
        <div className="max-w-[700px] items-baseline flex flex-row w-full">
          <div
            className={`rounded-md py-[3px] flex flex-row items-center ${
              value === "Success"
                ? "dark:bg-[#6afabc3b] bg-[#6afabc70] gap-[5px]"
                : "gap-[5px]"
            }`}
          >
            {value === "Success" ? (
              <>
                <Icon
                  icon="gg:check-o"
                  width={12}
                  height={12}
                  className="text-[#14a266] dark:text-[#69FABD]"
                />
                <span className="text-[14px] text-[#14a266] dark:text-[#69FABD] leading-[20px]">
                  {value}
                </span>
              </>
            ) : value === "FAILED" ? (
              <>
                <Icon
                  icon="gg:check-o"
                  width={12}
                  height={12}
                  className="text-[#14a266] dark:text-[#00d67b]"
                />
                <span className="text-[14px] text-[#14a266] dark:text-[#00d67b] leading-[20px]">
                  {value}
                </span>
              </>
            ) : (
              <>
                <Icon
                  icon="ant-design:question-circle-outlined"
                  width={12}
                  height={12}
                  className="text-[#14a266] dark:text-[#00d67b]"
                />
                <span className="text-[14px] text-[#14a266] dark:text-[#00d67b] leading-[20px]">
                  {value}
                </span>
              </>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default StateItem;
