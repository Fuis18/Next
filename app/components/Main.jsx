export default function Main({ title, className, children, fProject }) {
  return (
    <main>
      <h1 className={`${fProject ? fProject : "f"}__h1`}>{title}</h1>
      <div className={`container ${className}`}>{children}</div>
    </main>
  );
}
