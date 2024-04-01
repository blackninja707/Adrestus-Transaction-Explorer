import { Icon } from "@iconify/react";

const PaginationTemp = (setCurrentPage, currentPage) => {
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  }
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  }

  return (<>
    <button className="h-7 py-1 px-2 text-center rounded-[4px] bg-[rgb(3,9,33)] border-[rgb(55,88,115)] cursor-pointer" onClick={nextPage}>
      <Icon icon="material-symbols:keyboard-arrow-left" className="text-white w-5 h-5" />
    </button>
    <button className="h-7 py-1 px-2 text-center rounded-[4px] bg-[rgb(3,9,33)] border-[rgb(55,88,115)] cursor-pointer" onClick={prevPage}>
      <Icon icon="material-symbols:keyboard-arrow-right" className="text-white w-5 h-5" />
    </button>
  </>)
}

export default PaginationTemp;