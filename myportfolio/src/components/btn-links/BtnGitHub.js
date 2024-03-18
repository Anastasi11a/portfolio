import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { btnEffects, itemStyles } from '../styles';

const BtnGitHub = ({ link }) => {
    return (  
        <Link 
            to={link} 
            alt="GitHub link"
            target="_blank"
            style={itemStyles.btnStyle}
            onMouseEnter={btnEffects.btnHoverEffect}
            onMouseLeave={btnEffects.btnLeaveEffect}
        >
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </Link>
    );
}
 
export default BtnGitHub;