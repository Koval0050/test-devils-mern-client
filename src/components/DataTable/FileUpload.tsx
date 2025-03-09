import React, { useRef } from "react";

import { uploadCSV } from "services/api";

import styles from "./DataTable.module.css";

interface FileUploadProps {
  onUploadComplete: () => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onUploadComplete }) => {
  const [uploadStatus, setUploadStatus] = React.useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploadStatus("Uploading...");
      await uploadCSV(file);
      setUploadStatus("Upload successful");
      onUploadComplete();
    } catch (err) {
      setUploadStatus("Upload failed");
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={styles.uploadSection}>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        ref={fileInputRef}
        className={styles.fileInput}
      />
      {uploadStatus && (
        <div className={styles.uploadStatus}>{uploadStatus}</div>
      )}
    </div>
  );
};
