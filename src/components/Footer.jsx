import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from "react-icons/ai";
function Footer() {
  return (
    <footer className="flex flex-col py-5 justify-center items-center border-t mt-4">
      <p>© 2023 | Copyrights</p>
      <p className="flex items-center py-4">
        <span className="px-3 text-3xl font-bold hover:text-blue-400 text-blue-700">
          <AiOutlineInstagram />
        </span>
        <span className="px-3 text-3xl font-bold hover:text-blue-400 text-blue-700">
          <AiOutlineTwitter />
        </span>
        <span className="px-3 text-3xl font-bold hover:text-blue-400 text-blue-700">
          <AiOutlineFacebook />
        </span>
        <span className="px-3 text-3xl font-bold hover:text-blue-400 text-blue-700">
          <AiOutlineYoutube />
        </span>
      </p>
    </footer>
  );
}

export default Footer;
