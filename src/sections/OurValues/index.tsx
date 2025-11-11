import { TableData } from './tableData';
import styles from './styles.module.scss';

export function OurValues() {
  let data = TableData;
  return (
    <>
      <div className={styles.ourValueContainer}>
        <h2 className={styles.valueTitle}>Our Values</h2>
        {data.map((item) => (
          <table className={styles.table}>
            <tr className={styles.tableRow}>
              <td className={styles.bulletNum}>{item.id}</td>
              <td className={styles.headerData}>{item.header}</td>
              <td className={styles.bodyData}>{item.body}</td>
            </tr>
          </table>
        ))}
      </div>
    </>
  );
}
