import PropTypes from 'prop-types';
import css from './friendCard.module.css'

export default function FriendList({avatar, name, isOnline}) {
    return (
<li className={css.item}>
<span className={isOnline ? css.onLine : css.offLine}></span>
    <img  src={avatar} alt={name} width="48"  className={css.avatar}/>
    <p className={css.name}>{name}</p>
</li>

    )
}
FriendList.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
}
