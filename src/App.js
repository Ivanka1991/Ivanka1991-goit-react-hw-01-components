import Profile from './components/social-profile/profile'
import user from './components/social-profile/user.json'

import StatisticsList from './components/statistics/StatisticsList'
import stats from './components/statistics/statistical-data.json'

import FriendList from './components/friend-list/FriendList'
import  friends  from './components/friend-list/friends.json'

import TransactionHistory from './components/transaction-history/TransactionHistory'
import transactions from './components/transaction-history/transactions.json'

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