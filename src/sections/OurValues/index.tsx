import { TableData } from './tableData';
import styles from './styles.module.scss';

export function OurValues() {
  let data = TableData;
  return (
    <div className={styles.ourValueContainer}>
      <h2 className={styles.valueTitle}>Our Values</h2>
      <table className={styles.table}>
        <tbody className={styles.tableBody}>
          {data.map((item) => (
            <tr className={styles.tableRow} key={item.id}>
              <td className={styles.bulletNum}>{item.id}</td>
              <td className={styles.headerData}>{item.header}</td>
              <td className={styles.bodyData}>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
