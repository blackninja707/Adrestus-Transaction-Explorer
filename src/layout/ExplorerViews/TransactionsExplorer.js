import { useParams } from "react-router-dom";
const TransactionsExplorer = () => {
  const id = useParams();

  console.log("ID:", id);

  return (
    <>
      <h2 className="dark:text-white text-black">TransactionsExplorer</h2>
    </>
  );
};

export default TransactionsExplorer;
