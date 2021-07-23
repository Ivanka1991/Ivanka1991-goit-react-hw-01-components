import Transaction from "./transaction/Transaction"
import css from './transactionHistory.module.css'

export default function TransactionHistory ({transactions}) {
    return(
      <table className={css.table}>
        <thead className={css.blank}>
          <tr className={css.tread}>
            <th className={css.column}>Type</th>
            <th className={css.column}>Amount</th>
            <th className={css.column}>Currency</th>
          </tr>
        </thead>
        <tbody className={css.history}>
        {transactions.map(transaction => {
          return (
          <Transaction transaction={transaction} key={transaction.id} />
          );
        })}
      
        </tbody>
      </table>
    )
}