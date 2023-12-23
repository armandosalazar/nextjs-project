"use client";

import { useEffect } from "react";

function Users() {
  useEffect(() => {
    alert("Hi from Users!");
  }, []);

  return <>Users component</>;
}

export default Users;
