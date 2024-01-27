import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";

const SocialItem = ({ path, name = "facebook" }) => {
  let Icon = <FaFacebookF />;
  if (name === "instagram") {
    Icon = <IoLogoInstagram />;
  } else if (name === "twiter") {
    Icon = <CiTwitter />;
  } else if (name === "youtube") {
    Icon = <FiYoutube />;
  } else if (name === "facebook") {
    Icon = <FaFacebookF />;
  }
  return (
    <Link
      to={path}
      className="text-black border-[1px] border-solid border-black w-8 h-8 text-lg flex items-center justify-center rounded-full m-2 transition-all ease-linear hover:border-baseColor hover:bg-baseColor hover:text-white"
    >
      {Icon}
    </Link>
  );
};

export default SocialItem;
