// src/Home.js
import React, { useEffect, useState } from "react";
import { Storage } from "aws-amplify";

function Home() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    const fileKeys = await Storage.list("");
    const fileUrls = await Promise.all(
      fileKeys.map(async (file) => {
        const url = await Storage.get(file.key);
        return { ...file, url };
      })
    );
    setFiles(fileUrls);
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        {files.map((file) => (
          <div key={file.key}>
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              {file.key}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
