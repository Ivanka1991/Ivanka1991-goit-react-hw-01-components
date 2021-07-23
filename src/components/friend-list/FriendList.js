import  FriendCard  from './friendCard/FriendCard'
import css from './friendList.module.css'

export default function FriendList ({friends}){
    return (
    <div className={css.friends}>
        <ul className={css.list}>
        {friends.map(friend => {
            return (
            <FriendCard 
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              key={friend.id}
            />
            )
        })}
 
        </ul>
    </div>
    )
}