import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import CodeWithSaqib from "./CodeWithSaqib";

// This component displays location from context
const Location = () => {
  const user = useContext(UserContext);

  return (
    <div>
      {/* Display user's location from Context */}
      <h3>Component 2 👇</h3>
      <h2 className="is-size-4">
        <strong>Location</strong>: {user.location}
      </h2>
      <CodeWithSaqib />
    </div>
  );
};

export default Location;
