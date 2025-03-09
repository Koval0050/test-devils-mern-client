import React, { useEffect, useState, useRef } from "react";
import { fetchData, uploadCSV } from "../services/api";
import { DataItem } from "../types";
import styles from "./DataTable.module.css";

const DataTable: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      const result = await fetchData();
      setData(result);
      setError("");
    } catch (err) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploadStatus("Uploading...");
      await uploadCSV(file);
      setUploadStatus("Upload successful");
      await loadData();
    } catch (err) {
      setUploadStatus("Upload failed");
      setError("Failed to upload file");
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  const headers = data.length > 0 ? Object.keys(data[0].data) : [];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Data Table</h2>
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
      </div>

      {error && <div className={styles.error}>{error}</div>}

      {data.length === 0 ? (
        <div className={styles.noData}>
          No data available. Please upload a CSV file.
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default DataTable;
