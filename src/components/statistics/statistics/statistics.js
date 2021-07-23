import css from './statistics.module.css'

export default function Statistics ({stat}){
   
    return(
    <li className={css.item}>
      <span className={css.label}>{stat.label} </span>
      <span className={css.percentage}>{stat.percentage} %</span>
    </li>
    )
}
