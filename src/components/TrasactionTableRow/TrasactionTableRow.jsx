import css from './TrasactionTableRow.module.css';

export default function TrasactionTableRow({
  transactionProps: { type, amount, currency },
}) {
  return (
    <>
      <td className={css.transactionsTableBodyItem}>{type}</td>
      <td className={css.transactionsTableBodyItem}>{amount}</td>
      <td className={css.transactionsTableBodyItem}>{currency}</td>
    </>
  );
}
