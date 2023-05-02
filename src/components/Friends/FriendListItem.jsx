import PropTypes from 'prop-types';
import css from "./Friends.module.css"

export const FriendListItems = ({avatar, name, isOnline}) => {
    return (
        <li className={css.items}>
            <span className={`${css.status} ${css[isOnline]}`}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItems.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}