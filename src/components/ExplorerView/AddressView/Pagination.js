import { useMemo } from "react";
import { Icon } from "@iconify/react";

const Pagination = ({
  currentPage,
  totalCount,
  transactionsPerPage,
  setCurrentPage,
}) => {
  const movePrev = () => {
    if (currentPage <= 0) setCurrentPage(pageCount - 1);
    setCurrentPage(currentPage - 1);
  };

  const moveNext = () => {
    if (currentPage >= pageCount) setCurrentPage(0);
    setCurrentPage(currentPage + 1);
  };

  const moveNavigate = (page) => {
    setCurrentPage(page);
  };

  const moveFirst = () => {
    setCurrentPage(0);
  };

  const moveLast = () => {
    setCurrentPage(pageCount - 1);
  };

  const pageCount = useMemo(() => {
    return Math.ceil(totalCount / transactionsPerPage);
  }, [totalCount, currentPage]);

  return (
    <div className="flex flex-row pb-3 justify-between items-center">
      <div></div>
      <div className="flex-[0_0_auto] flex flex-row items-center gap-[5px]">
        <div
          className="page-button bg-[#f3f3f3] dark:bg-[#030921] border-[1px] border-[#375873] dark:border-[#375873] flex items-center"
          onClick={moveFirst}
        >
          <span className="text-[12px] leading-[18px] dark:text-darkFontPrimary text-fontSecondary">
            First
          </span>
        </div>
        <div
          className="page-button bg-[#f3f3f3] dark:bg-[#030921] border-[1px] border-[#375873] dark:border-[#375873] flex items-center"
          onClick={movePrev}
        >
          <span className="text-[12px] leading-[18px] dark:text-darkFontPrimary text-fontSecondary">
            <Icon icon="uiw:left" />
          </span>
        </div>

        <div
          className="page-button bg-[#f3f3f3] dark:bg-[#030921] border-[1px] border-[#375873] dark:border-[#375873] flex items-center"
          onClick={moveNavigate}
        >
          <span className="text-[12px] leading-[18px] dark:text-darkFontPrimary text-fontSecondary">
            Page {currentPage + 1} of {pageCount + 1}
          </span>
        </div>
        <div
          className="page-button bg-[#f3f3f3] dark:bg-[#030921] border-[1px] border-[#375873] dark:border-[#375873] flex items-center"
          onClick={moveNext}
        >
          <span className="text-[12px] leading-[18px] dark:text-darkFontPrimary text-fontSecondary">
            <Icon icon="uiw:right" />
          </span>
        </div>
        <div
          className="page-button bg-[#f3f3f3] dark:bg-[#030921] border-[1px] border-[#375873] dark:border-[#375873] flex items-center"
          onClick={moveLast}
        >
          <span className="text-[12px] leading-[18px] dark:text-darkFontPrimary text-fontSecondary">
            Last
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
