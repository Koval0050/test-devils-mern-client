import React from "react";

import { FileUpload } from "./FileUpload";

import styles from "./DataTable.module.css";

interface DataTableHeaderProps {
  onUploadComplete: () => void;
}

export const DataTableHeader: React.FC<DataTableHeaderProps> = ({
  onUploadComplete,
}) => {
  return (
    <div className={styles.header}>
      <h2>Data Table</h2>
      <FileUpload onUploadComplete={onUploadComplete} />
    </div>
  );
};
