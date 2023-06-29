import React, { useRef, useState } from 'react';

const UPLOAD_DELAY = 5000;

const ImageUploader = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const inputImageRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onClickText = () => {
    if (inputImageRef.current !== null) {
      inputImageRef.current.click();
    }
  };

  const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

  const onClickUpload = async () => {
    if (selectedFile !== null) {
      await sleep(UPLOAD_DELAY);
      setMessage(`${selectedFile.name} has been successfully uploaded`);
    }
  };

  const handleFileChange = () => {
    if (inputImageRef.current !== null && inputImageRef.current.files !== null) {
      const file = inputImageRef.current.files[0];
      if (file) {
        setSelectedFile(file);
        onClickUpload();
      }
    }
  };

  return (
    <div>
      <p style={{ textDecoration: 'underline' }} onClick={onClickText}>
        画像をアップロード
      </p>
      <input
        ref={inputImageRef}
        type="file"
        accept="image/*"
        style={{ visibility: 'hidden' }}
        onChange={handleFileChange}
      />
      <br />
      <button onClick={onClickUpload}>アップロードする</button>
      {message != null && <p>{message}</p>}
    </div>
  );
};

export default ImageUploader;
