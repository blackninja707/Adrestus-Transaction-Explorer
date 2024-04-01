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
import CustomItem from "../../components/ExplorerView/TransactionView/CustomItem";
import { getTxNumberPerBlock } from "../../actions/blockAction";
import TxHashesItem from "../../components/ExplorerView/TransactionView/TxHashesItem";

const BlockExplorer = () => {
  const { id } = useParams();
  const [blocks, setBlocks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [TxHashes, setTxHashed] = useState(null);

  async function fetchData() {
    setLoading(true); // Begin loading
    try {
      const fetchedBlocks = await getBlockByHash(id);
      const TxNumber = await getTxNumberPerBlock(id);
      setBlocks(fetchedBlocks); // Set the transaction state with the fetched data
      setTxHashed(TxNumber);
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
          <h1 className="text-[28px] font-semibold max-w-[1200px] leading-normal dark:text-darkFontPrimary text-fontSecondary text-left">
            Block # {abbreviateString(id)}
          </h1>
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
                      <CustomItem title="version" value={blocks?.version} />
                      <CustomItem title="PreviousHash" value={blocks?.previousHash} />
                      <TimestampItem
                        title="Timestamp"
                        value={timestampConverter(blocks.timestamp)}
                      />
                      <CustomItem title="Size" value={blocks?.size} />
                      <CustomItem title="Height" value={blocks?.height} />
                      <TxHashesItem value={TxHashes} />
                      <CustomItem title="Generation" value={blocks?.generation} />
                      <CustomItem title="ViewID" value={blocks?.viewID} />
                      <CustomItem title="Zone" value={blocks?.zone} />
                      <CustomItem
                        title="Proposer"
                        value={blocks.transactionProposer}
                      />
                       <CustomItem
                        title="LeaderPublicKey"
                        value={blocks.leaderPublicKey}
                      />
                      <CustomItem
                        title="MerkleRoot"
                        value={blocks.merkleRoot}
                      />
                      <CustomItem
                        title="PatriciaMerkleRoot"
                        value={blocks.patriciaMerkleRoot}
                      />
                      <CustomItem
                        title="Staking"
                        value={0}
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

export default BlockExplorer;
