import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { Storage } from "aws-amplify";
import { useEffect, useState } from "react";

Amplify.configure(awsExports);

function App() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function fetchFiles() {
      const fileKeys = await Storage.list("");
      const filePromises = fileKeys.map(async (file) => {
        const signedUrl = await Storage.get(file.key);
        return { key: file.key, url: signedUrl };
      });
      const files = await Promise.all(filePromises);
      setFiles(files);
    }

    fetchFiles();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Welcome to the Amplify App</h1>
      </div>
      <h1>Files from S3</h1>
      <ul>
        {files.map((file) => (
          <li key={file.key}>
            <a href={file.url}>{file.key}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default withAuthenticator(App);
