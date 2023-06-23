import { faTrash, faSignOutAlt, faEdit, faBan, faSpinner, faFileCirclePlus, faPhone, faEnvelope, faMapLocation, faLock, faUserLock} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
  return library.add(faTrash, faSignOutAlt, faEdit, faBan, faSpinner, faFileCirclePlus, faPhone, faEnvelope, faMapLocation, faLock, faUserLock);
};

export default Icons;