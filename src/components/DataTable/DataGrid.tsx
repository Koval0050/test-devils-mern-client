import { Typography } from "ui/components";

import { DataItem } from "types";

import styles from "./DataTable.module.css";

interface DataGridProps {
  data: DataItem[];
}

export const DataGrid = ({ data }: DataGridProps) => {
  if (data.length === 0) {
    return (
      <div className={styles.noData}>
        <Typography variant="body1">
          No data available. Please upload a CSV file.
        </Typography>
      </div>
    );
  }

  const headers = Object.keys(data[0].data);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>
                <Typography variant="body2">{header}</Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              {headers.map((header) => (
                <td key={`${item._id}-${header}`}>
                  <Typography variant="body2">{item.data[header]}</Typography>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
