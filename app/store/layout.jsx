export default function StoreLayout({ children }) {
  return (
    <>
      <nav
        style={{
          fontFamily: "monospace",
        }}
      >
        <h3>Categories</h3>
        <a href="/store/electronics">Electronics</a>
      </nav>
      {children}
    </>
  );
}
