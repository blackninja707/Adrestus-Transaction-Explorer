import { useParams } from "react-router-dom";
const TxExplorer = () => {
  const Id = useParams();
  console.log("========*===========", Id);
  return (
    <>
      <h2 className="dark:text-white text-black">TxExplorer</h2>
    </>
  );
};

export default TxExplorer;
