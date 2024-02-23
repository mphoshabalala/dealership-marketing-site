import React, { useState } from "react";
import axios from "axios";

const FileDroppingUpload = () => {
  const [files, setFiles] = useState({ images: [], otherFiles: [] });

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);

    // Separate files into images and other files
    const imageFiles = droppedFiles.filter((file) =>
      file.type.startsWith("image/")
    );
    const nonImageFiles = droppedFiles.filter(
      (file) => !file.type.startsWith("image/")
    );

    setFiles({
      images: [...files.images, ...imageFiles],
      otherFiles: [...files.otherFiles, ...nonImageFiles],
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Handle uploading multiple files (both images and other files)
    const formData = new FormData();
    files.images.forEach((file) => formData.append("images", file));
    files.otherFiles.forEach((file) => formData.append("otherFiles", file));

    try {
      const response = await axios.post(
        "http://localhost:3001/upload",
        formData
      );

      console.log("Files uploaded successfully:", response);
      // Optionally, you can reset the state after successful upload
      setFiles({ images: [], otherFiles: [] });
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-96 h-40 border-2 border-dashed border-gray-300 flex flex-col justify-center items-center"
      >
        <p className="mb-2 text-gray-600">Drag and drop files here</p>
        <p className="text-xs text-gray-500">
          Supports images and other file types
        </p>
      </div>
      <div className="mt-4 flex">
        <div className="mr-4">
          <h2 className="text-lg font-bold mb-2">Images</h2>
          {files.images.map((file) => (
            <div key={file.name} className="mb-2">
              {file.name}
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Other Files</h2>
          {files.otherFiles.map((file) => (
            <div key={file.name} className="mb-2">
              {file.name}
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleFormSubmit} className="mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          disabled={files.images.length === 0 && files.otherFiles.length === 0}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default FileDroppingUpload;
