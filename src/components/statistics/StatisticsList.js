import PropTypes from 'prop-types'
import Statistics from './statistics/statistics'
import css from './statisticsList.module.css'


export default function StatisticList({title, stats}) {
    return(
<section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

  <ul className={css.list}>
        {stats.map(stat => {
          return <Statistics stat={stat} key={stat.id} />;
        })}

    </ul>
    </section>

)
}
StatisticList.propTypes = {
    title: PropTypes.string.isRequired,
}