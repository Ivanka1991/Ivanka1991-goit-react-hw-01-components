import Profile from './social-profile/profile'
import user from './social-profile/user.json'

import StatisticsList from './statistics/StatisticsList'
import stats from './statistics/statistical-data.json'

import FriendList from './friend-list/FriendList'
import  friends  from './friend-list/friends.json'

import TransactionHistory from './transaction-history/TransactionHistory'
import transactions from './transaction-history/transactions.json'

export default function App (){
    return (
    <div className='page'>
        <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}/>
  
    
  <StatisticsList title="Upload stats" stats={stats} />

  <FriendList friends={friends} />

  <TransactionHistory transactions={transactions} />
    </div>
    )
}