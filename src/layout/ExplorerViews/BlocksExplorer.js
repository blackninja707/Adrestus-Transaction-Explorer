import { useParams } from "react-router-dom";
const BlocksExplorer = () => {
  const Id = useParams();
  console.log("========*===========", Id);
  return (
    <>
      <h2 className="dark:text-white text-black">BlocksExplorer</h2>
    </>
  );
};

export default BlocksExplorer;
