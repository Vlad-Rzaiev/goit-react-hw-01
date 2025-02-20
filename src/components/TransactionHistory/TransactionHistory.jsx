import TrasactionTableRow from '../TrasactionTableRow/TrasactionTableRow';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionsTable}>
      <thead className={css.transactionsTableHead}>
        <tr className={css.transactionsTableHeadRow}>
          <th className={css.transactionsTableHeadItem}>Type</th>
          <th className={css.transactionsTableHeadItem}>Amount</th>
          <th className={css.transactionsTableHeadItem}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.transactionsTableBody}>
        {items.map(item => (
          <tr className={css.transactionsTableBodyRow} key={item.id}>
            <TrasactionTableRow transactionProps={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
