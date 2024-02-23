"use client";

import { useEffect } from "react";

function UserComponent() {
  useEffect(() => {
    console.log("UserComponent mounted");

    return () => {
      console.log("UserComponent unmounted");
    };
  }, []);

  return (
    <>
      <h2 className="text-3xl">User Component</h2>
    </>
  );
}

export default UserComponent;
