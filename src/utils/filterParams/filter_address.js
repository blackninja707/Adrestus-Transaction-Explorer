import { TxPanelBodyParams } from "../constants/TxParams";

function filter_address(params) {
  return TxPanelBodyParams.filter(
    (item) => item.From.indexOf(params) >= 0 || item.To.indexOf(params) >= 0
  );
}

export default filter_address;
