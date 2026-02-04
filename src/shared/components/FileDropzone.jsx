import React, { useState, useRef } from "react";
import "./file-dropzone.css";
import UploadCloudIcon from "../../assets/images/upload-cloud-2-line.svg";

const FileDropzone = ({ onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

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

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      if (onFileSelect) onFileSelect(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="supporting_documents">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file_upload_input"
      />
      <label
        htmlFor="file_upload_input"
        className={`file_dropzone ${isDragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={(e) => {
          // Prevent accidental double triggers if label click behavior is inconsistent
          if (e.target.tagName !== "INPUT") {
            handleClick();
          }
        }}
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
    </div>
  );
};

export default FileDropzone;
