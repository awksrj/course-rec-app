import React from "react";
import { useEffect, useState } from "react";
import { fetchUser } from "../services/api";

function User() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  return (
    <div>
      {user ? (
        <p>{user.name} - {user.email}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default User;
