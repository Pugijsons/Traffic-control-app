import React, { useRef } from 'react';
import { DbOptionsApi } from '../DbOptionsApi';

export const DatabaseOptions = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }

    const filePath = URL.createObjectURL(file);
    DbOptionsApi.upload(filePath);

    if (event.target) {
      event.target.value = '';
    }
  };

  return (
    <div>
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
      <>
        <button onClick={DbOptionsApi.clear}>Clear</button>
        <button onClick={handleClick}>Upload</button>
      </>
    </div>
  );
};