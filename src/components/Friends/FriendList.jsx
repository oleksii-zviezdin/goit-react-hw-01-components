import PropTypes from 'prop-types';
import css from "./Friends.module.css"

export const FriendList = ({ friends }) => {
    return (
        <section className="friend-section">
            < ul className={css.friendList} >
                {friends.map(({id, avatar, name, isOnline}) => {
                    return (
                        <li key={id} className={css.items}>
                            <span className={`${css.status} ${css[isOnline]}`}></span>
                            <img className="avatar" src={avatar} alt="User avatar" width="48" />
                            <p className={css.name}>{name}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({            
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired,
    ).isRequired,
}