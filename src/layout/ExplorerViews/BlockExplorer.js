import { useParams } from "react-router-dom";

import TimestampItem from "../../components/ExplorerView/TransactionView/TimestampItem";
import TxItem from "../../components/ExplorerView/TransactionView/TxItem";
import AddressItem from "../../components/ExplorerView/TransactionView/AddressItem";
import HeightItem from "../../components/ExplorerView/TransactionView/HeightItem";
import StakingTxItem from "../../components/ExplorerView/TransactionView/StakingTxItem";
import BlockHashItem from "../../components/ExplorerView/BlockView/BlockHashItem";
import BlockGasLimitItem from "../../components/ExplorerView/BlockView/BlockGasLimit";
import BlockGasUsedItem from "../../components/ExplorerView/BlockView/BlockGasUsedItem";
import BlockSizeItem from "../../components/ExplorerView/BlockView/BlockSizeItem";

const BlockExplorer = () => {
  const { id } = useParams();

  return (
    <>
      <div className="max-w-[1408px] min-w-[343px] w-full flex flex-col px-5 mx-auto pb-6">
        <div className="pb-6">
          <h1 className="text-[28px] font-semibold max-w-[1200px] leading-normal dark:text-darkFontPrimary text-fontSecondary text-left">
            Block #{id}
          </h1>
        </div>
        <div className=" rounded-lg overflow-x-auto flex flex-col bg-white dark:bg-darkPrimary p-6 border-[1px] dark:border-darkColorSeparator border-colorSeparator">
          <div className="flex flex-col">
            <div className=""></div>
            <div className="flex flex-start overflow-auto" id="Scrollbar">
              <table className="w-full min-w-[698px] relative border-spacing-0 border-separate h-auto">
                <thead className="none"></thead>
                <tbody className="">
                  <HeightItem title="Height" value={id} />
                  <BlockHashItem
                    title="Hash"
                    value="0x76daaecc2ddef226fc04c52bf98c1629650c7eb979eeff7b6c8ba20908f391a5"
                  />
                  <TimestampItem
                    title="Timestamp"
                    value="2023-12-06T15:11:26.000Z"
                  />
                  <TxItem title="Transactions" value="-" />
                  <StakingTxItem title="Staking Transactions" value="-" />
                  <AddressItem
                    title="Proposer"
                    value="0x21C3de23d98Caddc406E3d31b25e807aDDF33633"
                  />
                  <BlockGasLimitItem title="Gas Limit" value="30,00000" />
                  <BlockGasUsedItem title="Gas Used" value="0" />
                  <BlockSizeItem title="Size" value="1,010" />
                  <TxItem title="Extra Data" value="-" />
                  <TxItem title="Logs Bloom" value="-" />
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
