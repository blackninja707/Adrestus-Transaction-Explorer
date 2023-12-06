import { useParams } from "react-router-dom";
const TransactionsExplorer = () => {
  const Id = useParams();
  console.log("========*===========", Id);
  return (
    <>
      <h2 className="dark:text-white text-black">TransactionsExplorer</h2>
    </>
  );
};

export default TransactionsExplorer;
