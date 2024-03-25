import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getBlockByHash } from "../../actions/blockAction";

import TimestampItem from "../../components/ExplorerView/TransactionView/TimestampItem";
import TxItem from "../../components/ExplorerView/TransactionView/TxItem";
import AddressItem from "../../components/ExplorerView/TransactionView/AddressItem";
import HeightItem from "../../components/ExplorerView/TransactionView/HeightItem";
import StakingTxItem from "../../components/ExplorerView/TransactionView/StakingTxItem";
import BlockHashItem from "../../components/ExplorerView/BlockView/BlockHashItem";
import BlockGasLimitItem from "../../components/ExplorerView/BlockView/BlockGasLimit";
import BlockGasUsedItem from "../../components/ExplorerView/BlockView/BlockGasUsedItem";
import BlockSizeItem from "../../components/ExplorerView/BlockView/BlockSizeItem";

import filter_block from "../../utils/filterParams/filter_block";
import { abbreviateString } from "../../utils/abbreviateString";
import { timestampConverter } from "../../utils/timestampConverter";

const BlockExplorer = () => {
  const { id } = useParams();
  const [blocks, setBlocks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let content = filter_block(id);

  async function fetchData() {
    setLoading(true); // Begin loading
    try {
      const fetchedBlocks = await getBlockByHash(id);
      setBlocks(fetchedBlocks); // Set the transaction state with the fetched data
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
      <div className="max-w-[1408px] min-w-[343px] w-full flex flex-col px-5 mx-auto pb-6">
        <div className="pb-6">
          {content.length !== 0 ? (
            <h1 className="text-[28px] font-semibold max-w-[1200px] leading-normal dark:text-darkFontPrimary text-fontSecondary text-left">
              Block # {abbreviateString(id)}
            </h1>
          ) : (
            <h1 className="text-[28px] font-semibold max-w-[1200px] leading-normal dark:text-darkFontPrimary text-fontSecondary text-left">
              Block Doesn't Exist
            </h1>
          )}
        </div>
        <div className="rounded-lg overflow-x-auto flex flex-col bg-white dark:bg-darkPrimary p-6 border-[1px] dark:border-darkColorSeparator border-colorSeparator">
          <div className="flex flex-col">
            <div className=""></div>
            <div className="flex flex-start overflow-auto" id="Scrollbar">
              <table className="w-full min-w-[698px] relative border-spacing-0 border-separate">
                <thead className="none"></thead>
                <tbody className="">
                  {blocks && (
                    <>
                      <BlockHashItem title="Hash" value={blocks.blockhash} />
                      <HeightItem title="Height" value={blocks.height} />
                      <TimestampItem
                        title="Timestamp"
                        value={timestampConverter(blocks.timestamp)}
                      />
                      <TxItem title="Transactions" value="-" />
                      <StakingTxItem title="Staking Transactions" value="-" />
                      <AddressItem
                        title="Proposer"
                        value={blocks.transactionProposer}
                      />
                      <BlockGasLimitItem title="Gas Limit" value="30,00000" />
                      <BlockGasUsedItem title="Gas Used" value="0" />
                      <BlockSizeItem title="Size" value={blocks.size} />
                      <TxItem title="Extra Data" value="-" />
                      <TxItem title="Logs Bloom" value="-" />
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

export default BlockExplorer;
