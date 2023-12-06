import { useParams } from "react-router-dom";
const BlockExplorer = () => {
  const Id = useParams();
  console.log("========*===========", Id);
  return (
    <>
      <h2 className="dark:text-white text-black">BlockExplorer</h2>
    </>
  );
};

export default BlockExplorer;
