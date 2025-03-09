import { Typography } from "ui/components";

import { FileUpload } from "./FileUpload";

import styles from "./DataTable.module.css";

interface DataTableHeaderProps {
  onUploadComplete: () => void;
}

export const DataTableHeader = ({ onUploadComplete }: DataTableHeaderProps) => (
  <div className={styles.header}>
    <Typography variant="h2">Data Table</Typography>
    
    <FileUpload onUploadComplete={onUploadComplete} />
  </div>
);
