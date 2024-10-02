export default function Main({ title, className, children }) {
  return (
    <main>
      <h1>{title}</h1>
      <div className={`container ${className}`}>{children}</div>
    </main>
  );
}
