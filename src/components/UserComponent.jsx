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
    <section>
      <p>Componente de usuario</p>
    </section>
  );
}

export default UserComponent;
