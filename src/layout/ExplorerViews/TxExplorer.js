import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getTransactionByHash } from "../../actions/transactionAction";

import HashItem from "../../components/ExplorerView/TransactionView/HashItem";
import BlockNumberItem from "../../components/ExplorerView/TransactionView/BlockNumberItem";
import TimestampItem from "../../components/ExplorerView/TransactionView/TimestampItem";
import StateItem from "../../components/ExplorerView/TransactionView/StateItem";
import AddressItem from "../../components/ExplorerView/TransactionView/AddressItem";
import ValueItem from "../../components/ExplorerView/TransactionView/ValueItem";
import TxFeeItem from "../../components/ExplorerView/TransactionView/TxFeeItem";

const TxExplorer = () => {
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  console.log("transaction id:", id);

  async function fetchData() {
    setLoading(true); // Begin loading
    try {
      const fetchedTransaction = await getTransactionByHash(id);
      setTransaction(fetchedTransaction); // Set the transaction state with the fetched data
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

  return (
    <>
      <div className="max-w-[1408px] min-w-[343px] w-full flex flex-col px-5 mx-auto pb-6 min-h-[calc(100vh-270px)]">
        <div className="pb-6">
          <h1 className="text-[34px] font-semibold max-w-[816px] leading-[40px] dark:text-darkFontPrimary text-fontSecondary text-left">
            Transaction
          </h1>
        </div>

        <div className="rounded-lg overflow-x-auto flex flex-col bg-white dark:bg-darkPrimary p-6 border-[1px] dark:border-darkColorSeparator border-colorSeparator">
          <div className="flex flex-col">
            <div className=""></div>
            <div className="flex flex-start overflow-auto" id="Scrollbar">
              <table className="w-full min-w-[698px] relative border-spacing-0 border-separate h-auto">
                <thead className="none"></thead>
                <tbody className="">
                  {transaction && (
                    <>
                      <StateItem title="Status" value={transaction.status} />
                      <HashItem
                        title="Hash"
                        value={transaction.transactionhash}
                      />
                      <BlockNumberItem
                        title="Block Hash"
                        value={transaction.blockModel.blockhash}
                      />
                      <TimestampItem
                        title="Timestamp"
                        value={transaction.timestamp}
                      />
                      <AddressItem title="From" value={transaction.from} />
                      <AddressItem title="To" value={transaction.to} />
                      <ValueItem title="Value" value={transaction.amount} />
                      <TxFeeItem
                        title="Transaction Fee"
                        value={transaction.amountWithTransactionFee}
                      />
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TxExplorer;
