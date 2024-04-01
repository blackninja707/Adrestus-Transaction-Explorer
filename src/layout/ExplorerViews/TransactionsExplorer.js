import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";

import { findAllTransactionsBetweenRange } from "../../actions/transactionAction";
import PaginationTemp from "../../components/PaginationTemp";
import AddressHeader from "../../components/ExplorerView/AddressView/AddressHeader";
import AddressBodyContent from "../../components/ExplorerView/AddressView/AddressBodyContent";
import CSVExport from "../../components/ExplorerView/AddressView/CSVExport";

const TransactionsExplorer = () => {
  const id = useParams();

  const [transactions, setTransactions] = useState(null);
  const [txPerPage, setTxPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  } ,[currentPage])

  async function fetchData() {
    setLoading(true); // Begin loading
    try {
      const fetchedTransactions = await findAllTransactionsBetweenRange(currentPage, 10);
      setTransactions(fetchedTransactions)
      console.log("Tx:", transactions);
    } catch (error) {
      console.error("Error fetching transaction: ", error);
      setError(error); // Set the error state
    } finally {
      setLoading(false); // End loading
    }
  }

  return (
    <div className="w-full justify-start max-w-[1408px] min-w-[343px] flex flex-col items-start px-5 mx-auto pb-10">
      <h2 className="dark:text-white text-black text-[34px] leading-[1.2em] font-semibold text-left">Transactions</h2>
      <div className="pt-4 w-full">
          <div className="rounded-lg overflow-x-auto flex flex-col bg-white dark:bg-darkPrimary p-6 border-[1px] dark:border-darkColorSeparator border-colorSeparator">
            <div className="flex flex-col">
              {/* Tab Index */}
              <div className=""></div>
              {/* MainBoard */}
              <div className="p-[10px] flex flex-col gap-3">
                <div className="flex flex-row justify-between w-full">
                  <span className="text-[18px] leading-[1.5em] text-[rgb(85,98,109)] dark:text-white">
                    {txPerPage}&nbsp;transactions shown
                  </span>
                  <PaginationTemp currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>
              </div>
              <div
                className="overflow-auto transition-all duration-100 min-h-[600px] flex flex-col"
                id="Scrollbar"
              >
                <table className="w-full min-w-[1266px] table-auto relative border-spacing-0 border-separate h-full max-h-[1266px] overflow-y-hidden">
                  <AddressHeader />
                  <tbody className="max-h-[1266px] overflow-y-hidden">
                    {transactions &&
                      transactions
                        .map((item, index) => (
                          <AddressBodyContent
                            key={index}
                            hash={item.transaction_hash}
                            method={item.statusType}
                            from={item.fromAddress}
                            state="OUT"
                            to={item.toAddress}
                            value={item.amount}
                            timestamp={item.creationDate}
                          />
                        ))}
                  </tbody>
                </table>
              </div>
              <div className="pt-6 flex flex-row justify-between items-center">
                <div className="flex flex-row gap-4">
                  <div className=""></div>
                  <span className="dark:text-white text-[14px] leading-[1.5em] text-[#55626D]">records per page</span>
                </div>
                <PaginationTemp currentPage={currentPage} setCurrentPage={setCurrentPage} />
              </div>
              <CSVExport id={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default TransactionsExplorer;
