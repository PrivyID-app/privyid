import React, { useRef, useState } from "react";
import "./file-dropzone.css";
import UploadCloudIcon from "../../assets/images/upload-cloud-2-line.svg";

const FileDropzone = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      if (onFileSelect) onFileSelect(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      if (onFileSelect) onFileSelect(files[0]);
    }
  };

  return (
    <div className="supporting_documents">
      <label
        className={`file_dropzone ${isDragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <div className="dropzone_content">
          <div className="dropzone_icon">
            <img src={UploadCloudIcon} alt="upload" />
          </div>

          <p className="dropzone_text">
            <strong>Choose a file</strong> or drag & drop it here.
          </p>

          <p className="dropzone_hint">
            JPEG, PNG, PDF, and MP4 formats, up to 50 MB.
          </p>

          <span className="browse_button">Browse File</span>
        </div>
      </label>

      {/* <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        required
        hidden
      /> */}
    </div>
  );
};

export default FileDropzone;
