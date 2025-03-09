import React from "react";

import { DataItem } from "types";

import styles from "./DataTable.module.css";

interface DataGridProps {
  data: DataItem[];
}

export const DataGrid: React.FC<DataGridProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className={styles.noData}>
        No data available. Please upload a CSV file.
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
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              {headers.map((header) => (
                <td key={`${item._id}-${header}`}>{item.data[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
