import PropTypes from 'prop-types'
import UserService from "../services/auth-service";
import NotAllowed from "./NotAllowed";

const RenderOnAllRole = ({ roles, showNotAllowed, children }) => (
    UserService.hasAllRole(roles)) ? children : showNotAllowed ? <NotAllowed /> : null;

RenderOnAllRole.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default RenderOnAllRole