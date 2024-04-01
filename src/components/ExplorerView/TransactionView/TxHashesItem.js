import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import TitleItem from "../TitleItem";

const TxHashesItem = ({ value }) => {
  return (
    <>
      <tr>
        <TitleItem title="Transactions" />
        <td className="text-left bg-transparent py-4 px-2 w-2/3 border-b-[1px] dark:border-darkColorSeparator border-colorSeparator">
          <div className="max-w-[700px] items-baseline flex flex-row w-full">
            <div className="flex flex-col items-start">
              {value && value.map((each, index) => (
                <div className="flex flex-row gap-1 items-center">
                  <CopyToClipboard text={each.transaction_hash}>
                    <Icon
                      icon="mingcute:copy-3-line"
                      rotate={3}
                      width={14}
                      height={14}
                      className="text-primary dark:text-darkViewColor mb-1 cursor-pointer"
                    />
                  </CopyToClipboard>
                  <Link to = {`/tx/${each.transaction_hash}`}>
                    <span className="text-[14px] text-primary dark:text-darkFontPrimary leading-[20px]" key={index}>
                      {each.transaction_hash}
                    </span>
                  </Link>
              </div>))}  
            </div>
          </div>
        </td>
      </tr>
      <tr></tr>
    </>
  );
};

export default TxHashesItem;
