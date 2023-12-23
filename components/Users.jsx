"use client";

import { useEffect } from "react";

function Users() {
  useEffect(() => {
    console.log("Hi from Users!");
  }, []);

  return <>Users component</>;
}

export default Users;
