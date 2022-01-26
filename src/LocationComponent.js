import React, { useContext } from 'react';
import { UserContext } from './UserContext';

// This component displays location from context
const Location = () => {
  const user = useContext(UserContext);

  return (
    <div>
      {/* Display user's location from Context */}
      <h2 className="is-size-4">
        <strong>Location</strong>: {user.location}
      </h2>
    </div>
  );
};

export default Location;