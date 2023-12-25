export const metadata = {
  title: "Online Store",
};

export default function StoreLayout({ children }) {
  return (
    <>
      <nav
        style={{
          display: "block",
        }}
        className="bg-blue-950 p-4 text-slate-600"
      >
        <h3 className="font-bold text-3xl">Categories</h3>
        <a href="/store/electronics" className="text-slate-400">
          Electronics
        </a>
      </nav>
      <main className="p-4">{children}</main>
    </>
  );
}
