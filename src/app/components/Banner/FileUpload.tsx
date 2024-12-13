"use client";
import React, { useState } from "react";
import Image from "next/image";
import images from "@utils/image.utils";
import icons from "@/app/utils/icon.utils";

const FileUpload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>("");
  const [isUrlInput, setIsUrlInput] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  const maxFileSize = 10 * 1024 * 1024; // 10MB

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFileValidation(droppedFiles);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    handleFileValidation(selectedFiles);
  };

  const handleToggleUrlInput = () => {
    setIsUrlInput((prevState) => !prevState);
  };

  const handleFileValidation = (newFiles: File[]) => {
    const invalidFile = newFiles.find((file) => file.size > maxFileSize);
    if (invalidFile) {
      setError("File size exceeds the 10MB limit.");
    } else {
      setError("");
      const uniqueFiles = newFiles.filter((newFile) =>
        !files.some((file) => file.name === newFile.name && file.size === newFile.size)
      );
      setFiles((prevFiles) => [...prevFiles, ...uniqueFiles]);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUrlInput(false);
  };

  return (
    <div className="w-max h-[380px] bg-bannergray p-6 flex flex-col justify-center items-center">
      <div
        className="w-[600px] h-[320px] border-2 border-dashed border-gray-400 flex flex-col justify-center items-center cursor-pointer bg-white"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        {files.length === 0 ? (
          // Default view when no files are uploaded
          <>
            <div className="flex flex-col items-center mb-10">
              <Image
                src={images.DropFile}
                width={60}
                height={60}
                alt="Drop File Icon"
              />
              <p className="text-xs text-gray-500 font-light">(up to 10MB)</p>
            </div>

            <p className="text-sm text-gray-500 font-light">
              <span>Drop files to upload or </span>
              <label
                htmlFor="fileInput"
                className="text-blue-600 cursor-pointer"
              >
                Browser
              </label>
            </p>
          </>
        ) : (
          // Display uploaded files
          <div>
            <span className="text-textblue">Uploaded file</span>
            <div className="mt-4 w-full px-4 text-center">
              <div className="w-full p-4 shadow-lg rounded-md bg-white">
                <ul className="text-sm text-gray-600 space-y-1">
                  {files.map((file, index) => (
                    <li key={index} className="text-[16px] space-x-6 list-none flex justify-between">
                      <span className="text-black font-light">{file.name}</span>
                      <span className="text-red-600 font-semibold">{(file.size / 1024).toFixed(2)} KB</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleFileSelect}
      />

      {error && <p className="text-red-600 text-xs mt-2">{error}</p>}

      {/* URL input */}
      <div className="flex mt-2 w-full items-center h-20 px-20 space-x-10">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <icons.Link />
            <button
              onClick={handleToggleUrlInput}
              className="text-black font-light cursor-pointer"
            >
              Enter URL
            </button>
            {isUrlInput && (
              <form onSubmit={handleUrlSubmit} className="mt-2 flex items-center w-full justify-center px-2">
                <input
                  type="text"
                  value={url}
                  onChange={handleUrlChange}
                  placeholder="Enter URL"
                  className="p-2 border border-black text-black font-light rounded-md w-2/3"
                />
                <button type="submit" className="ml-2 text-blue-600">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <icons.GoogleDrive />
          <button className="text-black font-light cursor-pointer">Enter URL</button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
