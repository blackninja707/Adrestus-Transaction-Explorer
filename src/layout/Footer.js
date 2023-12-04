import { Link } from "react-router-dom";
import SocialLink from "../utilities/SocialLink";

const Footer = () => {
  return (
    <div className="w-full pt-6">
      <div className="bg-white p-6 flex items-center justify-center">
        <div className="flex flex-col">
          <div className="w-80 flex flex-row justify-center items-center max-w-full gap-7">
            {SocialLink.map((item, index) => (
              <a key={index} href={item.Link}>
                {item.container}
              </a>
            ))}
          </div>
          <div className="h-[12px] self-stretch"></div>
          <div className="w-80 flex flex-row justify-center items-center max-w-full text-center">
            <span className="text-[12px] text-font">
              © Harmony 2023 . hello@harmony.one
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
