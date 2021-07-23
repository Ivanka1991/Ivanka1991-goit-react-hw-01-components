import css from './transaction.module.css'

export default function Transaction ({transaction}) {
   return (
<tr className={css.list}>
      <td className={css.item}>{transaction.type}</td>
      <td className={css.item}>{transaction.amount}</td>
      <td className={css.item}>{transaction.currency}</td>
    </tr>

   )
}
