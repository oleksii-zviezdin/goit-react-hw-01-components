import { UserProfileCard } from "./UserProfileCard/UserProfileCard"
import { Statistics } from "./Statistics/Statistic"
import userData from "../user.json"
import friends from "../friends.json"
import { FriendList } from "./Friends/FriendList/FriendList"

export const App = ( ) => {
  return (
    <main className="userProfile">
      <div className="userProfile__leftSection">
        <UserProfileCard
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
        />
        <Statistics title="Upload stats" />
      </div>
      <FriendList friendsData={friends} />
    </main>
  )
}