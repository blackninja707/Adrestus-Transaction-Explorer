import { Icon } from "@iconify/react";
import { BlockPanelHeaderParams } from "../../utils/constants/BlockParams";

const BlockHeader = () => {
  return (
    <thead>
      <tr>
      <th className="font-bold py-4 px-2 m-0 text-start border-t-[1px] dark:bg-[#1b3e7f] bg-[#f4f7f9] border-colorSeparator dark:border-darkColorSeparator">
          <div className="flex flex-col text-start">
            <span className="w-12 text-[14px] leading-[20px] text-[#5f98c7] font-bold text-start">
              Shard
            </span>
          </div>
        </th>
        <th className="font-bold py-4 px-2 m-0 text-start border-t-[1px] dark:bg-[#1b3e7f] bg-[#f4f7f9] border-colorSeparator dark:border-darkColorSeparator">
          <div className="flex flex-col text-start">
            <span className="w-[95px] text-[14px] leading-[20px] text-[#5f98c7] font-bold text-start">
              Hash
            </span>
          </div>
        </th>
        <th className="font-bold py-4 px-2 m-0 text-start border-t-[1px] dark:bg-[#1b3e7f] bg-[#f4f7f9] border-colorSeparator dark:border-darkColorSeparator">
          <div className="flex flex-col text-start">
            <span className="text-[14px] leading-[20px] text-[#5f98c7] font-bold text-start">
              Height
            </span>
          </div>
        </th>
        <th className="font-bold py-4 px-2 m-0 text-start border-t-[1px] dark:bg-[#1b3e7f] bg-[#f4f7f9] border-colorSeparator dark:border-darkColorSeparator">
          <div className="flex flex-col text-start">
            <span className="w-[200px] text-[14px] leading-[20px] text-[#5f98c7] font-bold text-start">
              Timestamp
            </span>
          </div>
        </th>
        <th className="font-bold py-4 px-2 m-0 text-start border-t-[1px] dark:bg-[#1b3e7f] bg-[#f4f7f9] border-colorSeparator dark:border-darkColorSeparator">
          <div className="flex flex-col text-start">
            <span className="w-[380px] text-[14px] leading-[20px] text-[#5f98c7] font-bold text-start">
              Miner
            </span>
          </div>
        </th>
        <th className="font-bold py-4 px-2 m-0 text-start border-t-[1px] dark:bg-[#1b3e7f] bg-[#f4f7f9] border-colorSeparator dark:border-darkColorSeparator">
          <div className="flex flex-col text-start">
            <div className="w-[180px] flex flex-row gap-2 items-center">
              <span className="text-[14px] leading-[20px] text-[#5f98c7] font-bold text-start">
                Transactions
              </span>
            </div>
          </div>
        </th>      
      </tr>
    </thead>
  );
};

export default BlockHeader;
