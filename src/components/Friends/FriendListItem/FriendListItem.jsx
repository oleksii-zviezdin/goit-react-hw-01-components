// import PropTypes from 'prop-types';
import css from "../Friends.module.css"

export const FriendListItem = ({ userAvatar, userName, userOnline }) => {
    return (
        <li className={css.items}>
            <span className={`${css.status} ${css[userOnline]}`}></span>
            <img className="avatar" src={userAvatar} alt="User avatar" width="48" />
            <p className={css.name}>{userName}</p>
        </li>
    )
}