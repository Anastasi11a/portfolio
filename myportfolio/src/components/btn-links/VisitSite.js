import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { itemStyles, btnEffects } from "../styles";

const VisitSite = ({ link }) => {
    return (  
        <Link
            to={link}
            alt="Visit site"
            target="_blank"
            style={itemStyles.btnVisit}
            onMouseEnter={btnEffects.btnVisitHoverEffect}
            onMouseLeave={btnEffects.btnVisitLeaveEffect}>

            <FontAwesomeIcon icon={faUpRightFromSquare} size="lg"/>
        </Link>
    );
}
 
export default VisitSite;