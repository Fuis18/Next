export default function Compare({ mode, left, right, onChange }) {
  let type = "text";
  if (mode === "title") {
    type = "text";
  } else if (mode === "number") {
    type = "number";
  }

  return (
    <>
      <input
        type={type}
        name="left"
        value={left}
        onChange={onChange ? onChange : undefined}
        readOnly={!onChange}
      />
      <div className="f0-middle">-</div>
      <input
        type={type}
        name="right"
        value={right}
        onChange={onChange ? onChange : undefined}
        readOnly={!onChange}
      />
    </>
  );
}
