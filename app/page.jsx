"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  return (
    <section>
      <h1>Home Page</h1>
      <Link href="/x">Not Found</Link>
      <br />
      <br />
      <button
        onClick={() => {
          alert("hello");
          window.localStorage.setItem("test", "hello");
        }}
      >
        Click
      </button>
      {window.localStorage.getItem("test") ? (
        <p>localStorage: {window.localStorage.getItem("test")}</p>
      ) : (
        <p>localStorage: null</p>
      )}
    </section>
  );
}
