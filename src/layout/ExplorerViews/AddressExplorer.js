import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { GetTransactionsByFromAddress } from "../../actions/transactionAction";
import { getTotalAccountBalanceByAddressZone } from "../../actions/accountAction";
import AddressView from "../../components/ExplorerView/AddressView/AddressView";
import BalanceView from "../../components/ExplorerView/AddressView/BalanceView";
import StakedView from "../../components/ExplorerView/AddressView/StakedView";
import TokenView from "../../components/ExplorerView/AddressView/TokenView";
import Pagination from "../../components/ExplorerView/AddressView/Pagination";
import AddressHeader from "../../components/ExplorerView/AddressView/AddressHeader";
import AddressBodyContent from "../../components/ExplorerView/AddressView/AddressBodyContent";
import CSVExport from "../../components/ExplorerView/AddressView/CSVExport";

import filter_address from "../../utils/filterParams/filter_address";

const AddressExplorer = () => {
  const { id } = useParams();

  const [transactions, setTransactions] = useState(null);
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [transactionsPerPage] = useState(10);

  async function fetchData() {
    setLoading(true); // Begin loading
    try {
      const fetchedTransaction = await GetTransactionsByFromAddress(id);
      const fetchedAccount = await getTotalAccountBalanceByAddressZone(id);
      setTransactions(fetchedTransaction); // Set the transaction state with the fetched data
      setAccount(fetchedAccount);
    } catch (error) {
      console.error("Error fetching transaction: ", error);
      setError(error); // Set the error state
    } finally {
      setLoading(false); // End loading
    }
  }

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const handlePageClick = (data) => {
    let selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <>
      <div className="max-w-[1408px] min-w-[343px] w-full flex flex-col px-5 mx-auto pb-6">
        <div className="pb-6">
          <h1 className="text-[26px] font-semibold max-w-[1200px] leading-normal dark:text-darkFontPrimary text-fontSecondary text-left">
            Address
          </h1>
        </div>
        <div className="rounded-lg overflow-x-auto flex flex-col bg-white dark:bg-darkPrimary p-6 border-[1px] dark:border-darkColorSeparator border-colorSeparator">
          <div className="flex flex-col">
            {account && account[0] && (
              <>
                <AddressView value={id} />
                <BalanceView value={account[0].balance} />
                <StakedView value={account[0].staked} />
                <TokenView value="ADR" />
              </>
            )}
          </div>
        </div>
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
    </>
  );
};

export default AddressExplorer;
