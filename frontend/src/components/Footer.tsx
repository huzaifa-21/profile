import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  const date = new Date()
  return (
    <div className="p-4 text-center capitalize">
      made with <FontAwesomeIcon icon={faHeart} className="text-secondaryColor animate-bounce fa-beat"/> by huzaifa 
      ©{date.getFullYear()}
    </div>
  );
}
export default Footer