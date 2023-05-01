import { UserProfileCard } from "./UserProfileCard/UserProfileCard"
import { Statistics } from "./Statistics/Statistic"
import { FriendList } from "./Friends/FriendList"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"

import userData from "../data/user.json"
import statsData from "../data/data.json"
import friendsData from "../data/friends.json"
import transactionsData from "../data/transactions.json"

export const App = ( ) => {
  return (
    <>
      <section className="userProfile">
        <div className="userProfile__leftSection">
          <UserProfileCard
          avatar={userData.avatar}
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          stats={userData.stats}
          />
          <Statistics stats={statsData} title="Upload stats" />
        </div>
        <FriendList friends={friendsData} />
      </section>
      <section className="transactionSection">
        <TransactionHistory transactions={transactionsData} />
      </section>
    </>
  )
}