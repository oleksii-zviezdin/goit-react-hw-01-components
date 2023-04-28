import { UserProfileCard } from "./UserProfileCard/UserProfileCard"
import { Statistics } from "./Statistics/Statistic"
import userData from '../user.json'

export const App = ( ) => {
  return (
    <>
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
      <Statistics title="Upload stats"/>
    </>
  )
}