import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from "../Friends.module.css"

export const FriendList = ({friendsData}) => {
    return (
        <section className="friend-section">
            < ul className={css.friendList} >
                {friendsData.map(({id, avatar, name, isOnline}) => {
                    return <FriendListItem
                        key={id}
                        userAvatar={avatar}
                        userName={name}
                        userOnline={isOnline}
                    />
                })}
            </ul>
        </section>
    )
}

FriendList.propTypes = {
    friendsData: PropTypes.array.isRequired,
}