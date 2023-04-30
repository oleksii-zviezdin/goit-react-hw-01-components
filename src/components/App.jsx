import { UserProfileCard } from "./UserProfileCard/UserProfileCard"
import { Statistics } from "./Statistics/Statistic"
import { FriendList } from "./Friends/FriendList/FriendList"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"

import userData from "../user.json"
import friends from "../friends.json"
import transactions from "../transactions.json"

export const App = ( ) => {
  return (
    <main>
      <section className="userProfile">
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
      </section>
      <section className="transactionSection">
        <TransactionHistory transactions={transactions} />
      </section>
    </main>
  )
}