import { Icon } from "@iconify/react";

const PaginationTemp = ({setCurrentPage, currentPage}) => {
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  }
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  }

  return (<div className="flex flex-row gap-[6px] items-center">
    <button className="h-7 py-1 px-2 text-center rounded-[4px] dark:bg-[rgb(3,9,33)] bg-[#f3f3f3] dark:border-[rgb(55,88,115)] border-[rgb(231,236,247)] cursor-pointer" onClick={prevPage} disabled={currentPage <= 0}>
      <Icon icon="material-symbols:keyboard-arrow-left" className="dark:text-white text-[rgb(102,102,102)] w-5 h-5" />
    </button>
    <button className="h-7 py-1 px-2 text-center rounded-[4px] dark:bg-[rgb(3,9,33)] bg-[#f3f3f3] dark:border-[rgb(55,88,115)] border-[rgb(231,236,247)] cursor-pointer" onClick={nextPage}>
      <Icon icon="material-symbols:keyboard-arrow-right" className="dark:text-white text-[rgb(102,102,102)] w-5 h-5" />
    </button>
  </div>)
}

export default PaginationTemp;