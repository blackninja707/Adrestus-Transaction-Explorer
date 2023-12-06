import { useParams } from "react-router-dom";
const AddressExplorer = () => {
  const Id = useParams();
  console.log("========*===========", Id);
  return (
    <>
      <h2 className="dark:text-white text-black">AddressExplorer</h2>
    </>
  );
};

export default AddressExplorer;
