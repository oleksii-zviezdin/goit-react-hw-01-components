import { FriendListItems } from './FriendListItem';
import PropTypes from 'prop-types';
import css from "./Friends.module.css"

export const FriendList = ({ friends }) => {
    return (
        <section className="friend-section">
            < ul className={css.friendList} >
                {friends.map(({id, avatar, name, isOnline}) => {
                    return(
                        <FriendListItems
                            key={id}
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                        />
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
        }).isRequired,
    ).isRequired,
}