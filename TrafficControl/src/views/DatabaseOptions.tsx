import React, { useRef, useState } from 'react';
import { DbOptionsApi } from '../api/DbOptionsApi';
import "../styles/components/loader.scss";

export const DatabaseOptions = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
 
const clearAction = async () => {
  setLoading(true);
  await DbOptionsApi.clear();
  setLoading(false);
}

 const uploadAction = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }
    setLoading(true);
    await DbOptionsApi.upload(file);
    setLoading(false);

    if (event.target) {
      event.target.value = '';
    }
  };

    return (
      <div className="container">
        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="main-content">
            <input
        style={{ display: 'none' }}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
      <>
        <button onClick={clearAction}>Clear</button>
        <button onClick={uploadAction}>Upload</button>
      </>
          </div>
        )}
      </div>
    );
  };