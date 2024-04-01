import { useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../../components/ExplorerView/AddressView/Pagination";
import AddressHeader from "../../components/ExplorerView/AddressView/AddressHeader";
import AddressBodyContent from "../../components/ExplorerView/AddressView/AddressBodyContent";
import CSVExport from "../../components/ExplorerView/AddressView/CSVExport";


const BlocksExplorer = () => {
  const id = useParams();

  const [transactions, setTransactions] = useState(null);
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [transactionsPerPage] = useState(10);

  console.log("ID:", id);

  return (
  
    <div className="w-full justify-start max-w-[1408px] min-w-[343px] flex flex-col items-start px-5 mx-auto pb-10">
      <h2 className="dark:text-white text-black text-[34px] leading-[1.2em] font-semibold text-left">Blocks</h2>
      <div className="pt-4">
          <div className="rounded-lg overflow-x-auto flex flex-col bg-white dark:bg-darkPrimary p-6 border-[1px] dark:border-darkColorSeparator border-colorSeparator">
            <div className="flex flex-col">
              {/* Tab Index */}
              <div className=""></div>
              {/* MainBoard */}
              <div className="p-[10px] flex flex-col">
                <Pagination
                  currentPage={currentPage}
                  totalCount={transactions && transactions.length}
                  setCurrentPage={setCurrentPage}
                  transactionsPerPage={transactionsPerPage}
                />
                <div
                  className="overflow-auto transition-all duration-100 min-h-[600px] flex flex-col"
                  id="Scrollbar"
                >
                  <table className="w-full min-w-[1266px] table-auto relative border-spacing-0 border-separate h-full max-h-[1266px] overflow-y-hidden">
                    <AddressHeader />
                    <tbody className="max-h-[1266px] overflow-y-hidden">
                      {transactions &&
                        transactions
                          .slice(
                            currentPage * transactionsPerPage,
                            (currentPage + 1) * transactionsPerPage
                          )
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
                  <div></div>
                </div>
                <CSVExport id={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default BlocksExplorer;
