import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Amplify App</h1>
    </div>
  );
}

export default withAuthenticator(App);
