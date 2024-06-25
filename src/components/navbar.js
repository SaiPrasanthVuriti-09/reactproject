import {Link} from "react-router-dom";
import Bhome from "./Bhome";
import Bprofile from "./Bprofile";
export const Navbar= () => {
    return (
        <div id ="navbar">
            <Link to ="/" class ="navel"><Bhome/></Link>
            <Link to ="/profile" class ="navel"><Bprofile/></Link>
        </div>

    );
}

export default Navbar;