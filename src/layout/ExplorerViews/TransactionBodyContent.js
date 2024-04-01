import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { timestampConverter } from "../../utils/timestampConverter";

const TransactionBodyContent = ({
 item
}) => {
  return (
    <tr>
      <td className="px-2 py-4 m-0 border-t-[1px] text-start dark:border-darkColorSeparator border-colorSeparator">
        <div className="flex text-start">
          <div className="max-w-[125px] text-fontPrimary flex flex-row gap-1 items-center">
                          {item?.zoneFrom}<span><Icon icon="tdesign:arrow-right" className="text-[#69FABD]" />
                      </span>{item?.zoneTo}
          </div>
        </div>
      </td>
      <th className="px-2 py-4 text-start m-0 border-t-[1px] dark:border-darkColorSeparator border-colorSeparator">
        <div className="flex flex-row items-center gap-[5px]">
          <CopyToClipboard text="">
            <Icon
              icon="mingcute:copy-3-line"
              rotate={3}
              width={14}
              height={14}
              className="text-primary dark:text-[#69FABD] mb-1 cursor-pointer"
            />
          </CopyToClipboard>
          <Link to={`/tx/${item?.transaction_hash}`}>
            <span className="text-[14px] text-primary dark:text-[#69FABD] leading-[20px] w-[170px] text-ellipsis overflow-hidden whitespace-nowrap block">
              {item?.transaction_hash}
            </span>
          </Link>
        </div>
      </th>
      <td className="px-2 py-4 m-0 border-t-[1px] text-start dark:border-darkColorSeparator border-colorSeparator">
        <div className="flex text-start">
          <p className="w-[100px] block rounded px-1 py-[2px] text-center whitespace-nowrap overflow-hidden text-ellipsis text-[12px] leading-[24px] bg-[#eff8ff] dark:bg-[#3660ad] text-fontSecondary dark:text-darkFontPrimary">
            {item?.statusType}
          </p>
        </div>
      </td>
      <td className="px-2 py-4 m-0 border-t-[1px] text-start dark:border-darkColorSeparator border-colorSeparator">
        <div className="flex text-start">
          <p className="w-[100px] block rounded px-1 py-[2px] text-start whitespace-nowrap overflow-hidden text-ellipsis text-[12px] leading-[24px] text-fontSecondary dark:text-darkFontPrimary">
            {item?.blockHeight}
          </p>
        </div>
      </td>
      <td className="px-2 py-4 text-start m-0 border-t-[1px] dark:border-darkColorSeparator border-colorSeparator">
        <div className="flex flex-row items-center gap-[5px]">
          <CopyToClipboard text="">
            <Icon
              icon="mingcute:copy-3-line"
              rotate={3}
              width={14}
              height={14}
              className="text-primary dark:text-[#69FABD] mb-1 cursor-pointer"
            />
          </CopyToClipboard>
          <Link to={`/address/${item?.fromAddress}`}>
            <span className="text-[14px] text-fontSecondary dark:text-darkFontPrimary leading-[20px] w-[180px] text-ellipsis overflow-hidden whitespace-nowrap block">
              {item?.fromAddress}
            </span>
          </Link>
        </div>
      </td>
      <td className="px-2 py-4 text-start m-0 border-t-[1px] dark:border-darkColorSeparator border-colorSeparator">
        <div className="flex flex-row items-center gap-[5px]">
          <CopyToClipboard text="">
            <Icon
              icon="mingcute:copy-3-line"
              rotate={3}
              width={14}
              height={14}
              className="text-primary dark:text-[#69FABD] mb-1 cursor-pointer"
            />
          </CopyToClipboard>
          <Link to={`/address/${item?.toAddress}`}>
            <span className="text-[14px] text-primary dark:text-[#69FABD] leading-[20px] w-[180px] text-ellipsis overflow-hidden whitespace-nowrap block">
              {item?.toAddress}
            </span>
          </Link>
        </div>
      </td>
      <td className="px-2 py-4 m-0 border-t-[1px] text-start dark:border-darkColorSeparator border-colorSeparator">
        <div className="flex text-start">
          <span className="w-full rounded font-bold text-[14px] leading-[20px] text-start text-fontSecondary dark:text-darkFontPrimary">
            {item?.amount}&nbsp;ADR
          </span>
        </div>
      </td>
      <td className="px-2 py-4 m-0 border-t-[1px] text-start dark:border-darkColorSeparator border-colorSeparator">
        <div className="flex text-start">
          <span className="w-full min-w-[125px] rounded font-normal text-[14px] leading-[20px] text-start text-[#5f98c7]">
            {timestampConverter(item?.creationDate)}
          </span>
        </div>
      </td>
    </tr>
  );
};

export default TransactionBodyContent;
