import PropTypes from 'prop-types';
import css from './profile.module.css'


export default function Profile (props){
    const {name, tag, location, avatar, stats} = props
    return(
        <div className={css.profile}>
        <div className={css.info}>
         <img src={avatar} alt="{name}" width = "160" className={css.avatar}/>
         <p className={css.name}>{name}</p>
         <p className={css.tag}>{tag}</p>
         <p className={css.location}>{location}</p>
         </div>
         <ul className={css.stats}>
             <li className={css.item}>
                 <span className={css.label}>Followers</span>
                 <span className={css.quantity}>{stats.followers}</span>
             </li>
             <li className={css.item}>
                 <span className={css.label}>Views</span>
                 <span className={css.quantity}>{stats.views}</span>
             </li>
             <li className={css.item}>
                 <span className={css.label}>Likes</span>
                 <span className={css.quantity}>{stats.likes}</span>
             </li>
         </ul>
        </div>
    )
}


Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),

}
