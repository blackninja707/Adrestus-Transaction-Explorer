import TitleItem from "../TitleItem";

const CustomItem = ({ title, value }) => {
  return (
    <>
      <tr>
        <TitleItem title={title} />
        <td className="text-left bg-transparent py-4 px-2 w-2/3 border-b-[1px] dark:border-darkColorSeparator border-colorSeparator">
          <div className="max-w-[700px] items-baseline flex flex-row w-full">
            <div className="flex flex-row items-center">
              <span className="text-[14px] text-primary dark:text-[#69FABD] leading-[20px] text-ellipsis max-w-[700px] w-full whitespace-nowrap overflow-hidden inline-block">
                {value}
              </span>
            </div>
          </div>
        </td>
      </tr>
      <tr></tr>
    </>
  );
};

export default CustomItem;
